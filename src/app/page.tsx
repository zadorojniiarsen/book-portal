'use client'
import BookList from "@/components/bookList";
import books from "@/mock/books";

import dotenv from 'dotenv';
export default function Home() {
dotenv.config();

  return (
    <main>
      <BookList books={books} />
    </main>
  );
}