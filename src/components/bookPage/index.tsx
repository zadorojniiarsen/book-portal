import { FC } from "react";
import Header from "../Header";

interface Props extends Book {
}

const BookPage: FC<Props> = ({ img, author, rating, title }) => (
  <>
    <Header />

    <div className="p-[40px]">
      <div>
        <img className="w-[280px] rounded-xl mb-[20px]" src={img} alt={title} />
      </div>
      <h1 className="">{title}</h1>
      <p>{author}</p>
      <p>{rating}</p>
    </div>
  </>
);

export default BookPage;
