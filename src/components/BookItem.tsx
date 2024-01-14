import { UNVIEWED_SVG, VIEWED_SVG } from "@/svg";
import { FC } from "react";

interface BookItemProps {
  book: Book;
}

const BookItem: FC<BookItemProps> = ({ book }) => {
  const { title, author, rating, img, viewed } = book;

  return (
    <div className="w-[190px] h-[335px]">
      <div className="relative mb-2">
        <img className="w-full rounded-xl" src={img} alt={book.title} />
        <div className="absolute top-4 right-4">
          {viewed ? <VIEWED_SVG /> : <UNVIEWED_SVG />}
        </div>
      </div>
      <h3 className="font-semibold break-words">{title}</h3>
      <p className="text-sm">{author}</p>
      <p className="">{rating}/5</p>
    </div>
  );
};

export default BookItem;