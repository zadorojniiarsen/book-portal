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
      <div className="relative w-[190px] h-[240px] mb-2 rounded-xl before:ease overflow-hidden shadow-lg hover:before:duration-300 transition-all before:absolute before:right-[-20px] before:top-0 before:h-[300px] before:w-[200px] before:translate-x-[190px] before:rotate-6 before:bg-white before:opacity-10 hover:shadow-white hover:before:-translate-x-[240px]">
        <img
          className="rounded-xl w-[190px] h-[240px]"
          src={imageUrl}
          alt={title}
        />
        <div className="absolute top-2 right-2">
          {viewed ? <VIEWED_SVG /> : <UNVIEWED_SVG />}
        </div>
      </div>

      <div className="relative h-[125px] text-sm leading-6" title={title}>
        <h3 className="font-semibold break-words line-clamp-3">{title}</h3>

        <div className="absolute bottom-0">
          <p>{author}</p>
          <p>{publishedDate}</p>
        </div>
      </div>
    </li>
  </Link>
);

export default BookItem;
