import { FC } from "react";

interface BookPageProps {
  book: Book;
}

const BookPage: FC<BookPageProps> = ({ book }) => {
  const { img } = book;
  return (
    <div className="w-[300px]">
      <div>
        <img src={img} alt="" />
      </div>
      {/* <img src={book.cover} alt={book.title} /> */}
      <h1 className="bg-red-500">{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.rating}</p>
      {/* <p>Status: {book.status}</p> */}
      {/* Add more details as needed */}
    </div>
  );
};

export default BookPage;
