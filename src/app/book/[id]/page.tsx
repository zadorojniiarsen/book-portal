import BookPage from "../../../components/BookPage";
import books from "@/mock/books";

export default function BookDetails({ params }: { params: { id: number } }) {
  const book = books.find((book) => book.id === Number(params.id));
  return book && <BookPage book={book} />;
}
