import { FC } from "react";
import BookItem from "./BookItem";

interface BookListProps {
  books: Book[];
}

const BookList: FC<BookListProps> = ({ books }) => {
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

        <div className="flex flex-wrap gap-[24px] h-[70vh] overflow-y-auto  justify-center">
          {books.map((book, index) => (
            <BookItem key={index} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookList;
