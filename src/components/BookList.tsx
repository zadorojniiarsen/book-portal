import { FC, useEffect, useState } from "react";
import BookItem from "./BookItem";
import SortingComponent from "./SortingComponent";
import { SortFunction, SortOptions, SortStrategy } from "@/types/SortValue";

interface Props {
  books: Book[];
}

const sorters: Record<SortStrategy, SortFunction> = {
  [SortStrategy.Popularity]: (a: number, b: number): number => b - a,
  [SortStrategy.Name]: (a: string, b: string): number => a.localeCompare(b),
  [SortStrategy.Newest]: (a: Date, b: Date): number =>
    b.getTime() - a.getTime(),
};

const defaultSortValues: SortOptions = {
  sortBy: SortStrategy.Popularity,
  isAscending: true,
};

const BookList: FC<Props> = ({ books }) => {
  const [booksState, setBooksState] = useState<Book[]>(books);
  const [sorting, setSorting] = useState<SortOptions>(defaultSortValues);

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

    if (viewedState) {
      const parsedViewedState = JSON.parse(viewedState);

      const mergedState = booksState.map((b) => ({
        ...b,
        viewed: parsedViewedState.find(
          (item: { id: number }) => item.id === b.id
        ).viewed,
      }));

      setBooksState(mergedState);
    }
  }, []);

  useEffect(() => {
    const sortedBooks = booksState.toSorted((a: Book, b: Book): number => {
      type ToSort = number | string | Date;
      const first: ToSort = a[sorting.sortBy];
      const second: ToSort = b[sorting.sortBy];
      const sorter = sorters[sorting.sortBy] as SortFunction | undefined;

      if (!sorter) return 0;

      return sorting.isAscending
        ? sorter(first as never, second as never)
        : sorter(second as never, first as never);
    });

    setBooksState(sortedBooks);
  }, [sorting]);

  return (
    <div>
      <div className="px-[32px]">
        <div className="flex justify-between px-[12px] py-[24px]">
          <h2>{books.length} Books</h2>

          <SortingComponent value={sorting} setValue={setSorting} />
        </div>

        <ul className="flex flex-wrap gap-[24px] h-[70vh] overflow-y-auto mx-auto">
          {booksState.map((book) => (
            <BookItem key={book.id} book={book} setViewed={setViewed} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookList;
