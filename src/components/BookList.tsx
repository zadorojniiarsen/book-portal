import { FC, useCallback, useEffect, useState } from "react";
import BookItem from "./BookItem";
import SortingComponent from "./SortingComponent";
import { SortFunction, SortOptions, SortStrategy } from "@/types/SortValue";
import Loading from "./Loading";

interface Props {
  books: Book[];
}

const sorters: Record<SortStrategy, SortFunction> = {
  [SortStrategy.Popularity]: (a: number, b: number): number => b - a,
  [SortStrategy.Name]: (a: string, b: string): number => a.localeCompare(b),
  [SortStrategy.Viewed]: (a: boolean, b: boolean): number =>
    b === a ? 0 : a ? -1 : 1,
};

const defaultSortValues: SortOptions = {
  sortBy: SortStrategy.Viewed,
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

const BookList: FC<Props> = ({ books }) => {
  const [booksState, setBooksState] = useState<Book[]>([]);
  const [sorting, setSorting] = useState<SortOptions>(defaultSortValues);
  const [loading, setLoading] = useState(true);

  const sortValues = (value: SortOptions) => {
    setSorting(value);
    setBooksState(sortBooksByOption(booksState, value));
  };

  const setViewed = (id: number) => {
    setLoading(true);
    
    const updatedArray = booksState.map((b) => ({
      viewed: b.id === id || b.viewed,
      id: b.id,
    }));

    localStorage.setItem("viewed-state", JSON.stringify(updatedArray));
  };

  useEffect(() => {
    // get viewed state from localStorage
    const viewedState = localStorage.getItem("viewed-state");

    if (!viewedState) return;

    const parsedViewedState: BookMinimal[] = JSON.parse(viewedState);

    const mergedState = books.map((book) => ({
      ...book,
      viewed:
        parsedViewedState.find((storageItem) => storageItem.id === book.id)
          ?.viewed ?? false,
    }));

    setBooksState(sortBooksByOption(mergedState, sorting));

    setLoading(false);
  }, []);

  return (
    <div>
      <div className="mx-[32px] mb-2">
        <div className="flex justify-between px-[12px] py-[24px]">
          <h2>{books.length} Books</h2>

          <SortingComponent value={sorting} setValue={sortValues} />
        </div>

        <ul className="flex flex-wrap gap-[24px] h-[70vh] overflow-y-auto mx-auto">
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
