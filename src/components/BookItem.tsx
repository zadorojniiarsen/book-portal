import { UNVIEWED_SVG, VIEWED_SVG } from "@/svg";
import Link from "next/link";
import { FC } from "react";

interface Props {
  book: Book;
  setViewed: (id: number) => void;
}

const BookItem: FC<Props> = ({
  book: { title, author, rating, img, viewed, id },
  setViewed,
}) => (
  <Link
    href={`/book/${id}`}
    onClick={() => {
      setViewed(id);
    }}
  >
    <li className="w-[190px] h-[335px]">
      <div className="relative mb-2">
        <img className="w-full rounded-xl" src={img} alt={title} />
        <div className="absolute top-4 right-4">
          {viewed ? <VIEWED_SVG /> : <UNVIEWED_SVG />}
        </div>
      </div>
      <h3 className="font-semibold break-words">{title}</h3>
      <p className="text-sm">{author}</p>
      <p className="">{rating}/5</p>
    </li>
  </Link>
);

export default BookItem;
