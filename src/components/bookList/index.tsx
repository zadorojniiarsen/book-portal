import { FC, Suspense, lazy, useState } from "react";
import { SortOptions } from "@/types/SortValue";
import { defaultSortValues, sortBooksByOption } from "@/utils/bookListUtils";
import SortingComponent from "./components/SortingComponent";
import Loading from "./components/Loading";
import BooksSceleton from "./components/BooksSceleton";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import useBooks from "@/hooks/useBooks";

const BookItem = lazy(() => import("./components/BookItem"));

const BookList: FC = () => {
  const [sorting, setSorting] = useState<SortOptions>(defaultSortValues);
  const [loading, setLoading] = useState(true);
  const [viewedState, setViewedState] = useLocalStorage("viewed-state");
  const { booksState, setBooksState } = useBooks(sorting, setLoading)

  const sortValues = (value: SortOptions) => {
    setSorting(value);
    setBooksState(sortBooksByOption(booksState, value));
  };

  const setViewed = (id: string) => {
    setLoading(true);
    const updatedArray = viewedState ? [...viewedState, id] : [];
    setViewedState(updatedArray);
  };

  return (
    <>
      <div className="mb-2">
        <div className="flex flex-col gap-5 sm:flex-row sm:gap-0 justify-between md:mx-[32px] px-[12px] py-[24px] items-center cursor-default">
          <h2>{`${booksState.length ? `${booksState.length} Books` : ""}`}</h2>

          <SortingComponent value={sorting} setValue={sortValues} />
        </div>

        <ul className="flex flex-wrap justify-center gap-[24px] h-[70vh] px-[12px] mx-[20px] overflow-y-auto">
          {booksState.length ? (
            <Suspense fallback={<BooksSceleton />}>
              {booksState.map((book) => (
                <BookItem key={book.id} {...book} setViewed={setViewed} />
              ))}
            </Suspense>
          ) : (
            <BooksSceleton />
          )}
        </ul>
      </div>

      {loading && <Loading />}
    </>
  );
};

export default BookList;
