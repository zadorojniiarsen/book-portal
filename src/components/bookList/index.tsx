import { FC, Suspense, lazy, useEffect, useState } from "react";
import { SortOptions } from "@/types/SortValue";
import GoogleApiClient from "@/services/GoogleApiClient";
import { defaultSortValues, sortBooksByOption } from "@/utils/bookListUtils";
import SortingComponent from "./components/SortingComponent";
import Loading from "./components/Loading";
import BooksSceleton from "./components/BooksSceleton";

const BookItem = lazy(() => import("./components/BookItem"));

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
        const defaultData = books.filter((b) => b.viewed).map((b) => b.id);

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
    <>
      <div className="mb-2">
        <div className="flex flex-col gap-5 sm:flex-row sm:gap-0 justify-between md:mx-[32px] px-[12px] py-[24px] items-center cursor-default">
          {booksState.length ? <h2>{booksState.length} Books</h2> : <div></div>}

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
