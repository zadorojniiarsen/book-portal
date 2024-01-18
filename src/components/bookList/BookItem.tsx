import { UNVIEWED_SVG, VIEWED_SVG } from "@/svg";
import Link from "next/link";
import { FC } from "react";

interface Props extends Book {
  setViewed: (id: string) => void;
}

const BookItem: FC<Props> = ({
  title,
  author,
  publishedDate,
  imageUrl,
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
      <div className="relative w-[190px] h-[300px] mb-2 rounded-xl before:ease overflow-hidden shadow-xl transition-all before:absolute before:right-0 before:top-0 before:h-[300px] before:w-[100px] before:translate-x-[190px] before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-white hover:before:-translate-x-[300px]">
        <img
          className="rounded-xl w-[190px] h-[300px]"
          src={imageUrl}
          alt={title}
        />
        <div className="absolute top-4 right-4">
          {viewed ? <VIEWED_SVG /> : <UNVIEWED_SVG />}
        </div>
      </div>

      <div className="relative h-[200px]">
        <h3 className="font-semibold break-words">{title}</h3>
        <p className="text-sm mb-5">{author}</p>
        <p className="absolute bottom-0">{publishedDate}</p>
      </div>
    </li>
  </Link>
);

export default BookItem;
