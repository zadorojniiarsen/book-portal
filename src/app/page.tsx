'use client'
import BookList from "@/components/bookList";
import books from "@/mock/books";

export default function Home() {
  return (
    <main>
      <BookList books={books} />
    </main>
  );
}