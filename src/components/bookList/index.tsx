import { FC, useEffect, useState } from "react";
import BookItem from "./BookItem";
import SortingComponent from "./SortingComponent";
import { SortFunction, SortOptions, SortStrategy } from "@/types/SortValue";
import Loading from "./Loading";
import Header from "../Header";
import GoogleApiClient from "@/services/GoogleApiClient";

const sorters: Record<SortStrategy, SortFunction> = {
  [SortStrategy.Author]: (a: string, b: string): number => a.localeCompare(b),
  [SortStrategy.Name]: (a: string, b: string): number => a.localeCompare(b),
  [SortStrategy.Viewed]: (a: boolean, b: boolean): number =>
    b === a ? 0 : a ? -1 : 1,
};

const defaultSortValues: SortOptions = {
  sortBy: SortStrategy.Name,
  isAscending: true,
};

const sortBooksByOption = (books: Book[], option: SortOptions): Book[] => {
  return books.toSorted((a: Book, b: Book): number => {
    const first = (option.isAscending ? a : b)[option.sortBy] as never;
    const second = (option.isAscending ? b : a)[option.sortBy] as never;
    const sorter = sorters[option.sortBy] as SortFunction | undefined;

    return sorter ? sorter(first, second) : 0;
  });
};

const BookList: FC = () => {
  const [booksState, setBooksState] = useState<Book[]>([]);
  const [sorting, setSorting] = useState<SortOptions>(defaultSortValues);
  const [loading, setLoading] = useState(true);

  const sortValues = (value: SortOptions) => {
    setSorting(value);
    setBooksState(sortBooksByOption(booksState, value));
  };

  const setViewed = (id: string) => {
    setLoading(true);

    const viewedState = localStorage.getItem("viewed-state") ?? "";
    const parsedViewedState: string[] = JSON.parse(viewedState);
    const updatedArray = viewedState ? [...parsedViewedState, id] : [];
    localStorage.setItem("viewed-state", JSON.stringify(updatedArray));
  };

  useEffect(() => {
    (async () => {
      const apiClient = new GoogleApiClient();

      const books = await apiClient.searchBooks();

      // get viewed state from localStorage
      const viewedState = localStorage.getItem("viewed-state");

      if (!viewedState) {
        const defaultData = books.filter(b => b.viewed).map((b) => b.id);

        localStorage.setItem("viewed-state", JSON.stringify(defaultData));
        return;
      }

      const parsedViewedState: string[] = JSON.parse(viewedState);

      const mergedState = books.map((book) => ({
        ...book,
        viewed: parsedViewedState.includes(book.id),
      }));

      setBooksState(sortBooksByOption(mergedState, sorting));
      setLoading(false);
    })();
  }, []);

  return (
    <div>
      <Header pageTitle={"Books Read This Month"} />

      <div className="mb-2">
        <div className="flex justify-between mx-[32px] px-[12px] py-[24px] items-center">
          <h2>{booksState.length} Books</h2>

          <SortingComponent value={sorting} setValue={sortValues} />
        </div>

        <ul className="flex flex-wrap justify-center gap-[24px] h-[70vh] px-[32px] overflow-y-auto">
          {booksState.map((book) => (
            <BookItem key={book.id} {...book} setViewed={setViewed} />
          ))}
        </ul>
      </div>

      {loading && <Loading />}
    </div>
  );
};

export default BookList;
