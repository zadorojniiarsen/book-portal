import { FC, useState } from "react";
import BookItem from "./BookItem";

interface BookListProps {
  books: Book[];
}
const BookList: FC<BookListProps> = ({ books }) => {
  const [booksState, setBooksState] = useState(books);

  const setViewed = (id: number) => {
    setBooksState(() =>
      booksState.map((b) => ({ ...b, viewed: b.id === id ? true : b.viewed }))
    );
  };

  return (
    <div>
      <div className="px-[32px]">
        <div className="flex justify-between px-[12px] py-[24px]">
          <h2>{books.length} Books</h2>

          <div>
            <span>Sort by</span>
            <div>selector</div>
          </div>
        </div>

        <ul className="flex flex-wrap gap-[24px] h-[70vh] overflow-y-auto justify-center">
          {booksState.map((book) => (
            <BookItem key={book.id} book={book} setViewed={setViewed} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookList;
