import React from "react";
import BookPage from "../../../components/BookPage";
import books from "@/data/books";

export default function BookDetails() {
  const book = books[0];
  return <BookPage book={book} />;
}
