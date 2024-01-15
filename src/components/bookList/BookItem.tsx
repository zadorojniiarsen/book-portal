import { UNVIEWED_SVG, VIEWED_SVG } from "@/svg";
import Link from "next/link";
import { FC } from "react";

interface Props extends Book {
  setViewed: (id: number) => void;
}

const BookItem: FC<Props> = ({
  title,
  author,
  rating,
  img,
  viewed,
  id,
  setViewed,
}) => (
  <Link
    href={`/book/${id}`}
    onClick={() => {
      setViewed(id);
    }}
  >
    <li className="w-[190px]">
      <div className="relative mb-2">
        <img
          className="w-full rounded-xl transition-transform transform hover:scale-150"
          src={img}
          alt={title}
        />
        <div className="absolute inset-0 bg-purple-500 transition-opacity opacity-0 hover:opacity-30"></div>
        <div className="absolute top-4 right-4">
          {viewed ? <VIEWED_SVG /> : <UNVIEWED_SVG />}
        </div>
      </div>

      <div className="relative h-[95px]">
        <h3 className="font-semibold break-words">{title}</h3>
        <p className="text-sm mb-5">{author}</p>
        <p className="absolute bottom-0">{rating}/5</p>
      </div>
    </li>
  </Link>
);

export default BookItem;
