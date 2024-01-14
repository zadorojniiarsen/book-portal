import { FC } from "react";

interface Props {
  book: Book;
}

const BookPage: FC<Props> = ({ book }) => {
  const { img, author, rating } = book;
  return (
    <div className="w-[300px]">
      <div>
        <img src={img} alt="" />
      </div>
      <h1 className="">{book.title}</h1>
      <p>{author}</p>
      <p>{rating}</p>
    </div>
  );
};

export default BookPage;
