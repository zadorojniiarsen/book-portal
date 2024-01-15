import { FC } from "react";
import Header from "../Header";

interface Props extends Book {}

const BookPage: FC<Props> = ({
  img,
  author,
  rating,
  title,
  downloads,
  description,
  reviews,
}) => (
  <>
    <Header />

    <div className="flex p-[40px]">
      <div className="mx-[40px]">
        <img
          className="w-[280px] rounded-xl mb-[20px] "
          src={img}
          alt={title}
        />
        <div className="flex gap-3">
          <b className="font-semibold">Downloads:</b> <p>{downloads}</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-[640px] h-[500px] overflow-y-auto">
        <div className="flex gap-3">
          <b className="font-semibold">Title:</b> <p>{title}</p>
        </div>
        <div className="flex gap-3">
          <b className="font-semibold">Author:</b> <p>{author}</p>
        </div>
        <div className="flex gap-3">
          <b className="font-semibold">Rating:</b> <p>{rating}/5</p>
        </div>
        <div className="flex gap-3">
          <b className="font-semibold">Description:</b> <p>{description}</p>
        </div>
        <div className="flex gap-3">
          <b className="font-semibold w-[250px]">Reader reviews:</b>

          <div className="flex flex-col gap-10">
            {reviews.map((r) => (
              <div key={r.text} className="flex flex-col">
                <p>"{r.text}"</p>
                <p>
                  {r.name}, {r.age} Years Old{" "}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default BookPage;
