import { FC, useCallback, useEffect, useState } from "react";
import BookItem from "./BookItem";
import SortingComponent from "./SortingComponent";
import { SortFunction, SortOptions, SortStrategy } from "@/types/SortValue";

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
  const [booksState, setBooksState] = useState<Book[]>(books);
  const [sorting, setSorting] = useState<SortOptions>(defaultSortValues);

  const sortValues = (value: SortOptions) => {
    setSorting(value);
    setBooksState(sortBooksByOption(booksState, value));
  };

  const setViewed = (id: number) => {
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

    const mergedState = booksState.map((book) => ({
      ...book,
      viewed:
        parsedViewedState.find((storageItem) => storageItem.id === book.id)
          ?.viewed ?? false,
    }));

    setBooksState(sortBooksByOption(mergedState, sorting));
  }, []);

  return (
    <div>
      <div className="px-[32px]">
        <div className="flex justify-between px-[12px] py-[24px]">
          <h2>{books.length} Books</h2>

          <SortingComponent value={sorting} setValue={sortValues} />
        </div>

        <ul className="flex flex-wrap gap-[24px] h-[70vh] overflow-y-auto mx-auto">
          {booksState.map((book) => (
            <BookItem key={book.id} entries={book} setViewed={setViewed} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookList;
