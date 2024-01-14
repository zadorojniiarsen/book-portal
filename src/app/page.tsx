import BookList from "@/components/BookList";
import books from "@/data/books";

export default function Home() {
  return (
    <main>
      <BookList books={books} />
    </main>
  );
}
