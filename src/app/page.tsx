"use client";

import BookList from "@/components/bookList";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header pageTitle={"Books Read This Month"} />
      <BookList />
    </main>
  );
}
