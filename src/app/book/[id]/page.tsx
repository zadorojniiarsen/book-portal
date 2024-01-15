import BookPage from "../../../components/bookPage";
import books from "@/mock/books";

export default function BookDetails({ params }: { params: { id: string } }) {
  const book = books.find((book) => book.id === Number(params.id));
  return book && <BookPage {...book} />;
}
