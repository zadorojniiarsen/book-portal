"use client";

import BookListSceleton from "@/components/bookList/components/sceletons/BookListSceleton";
import Header from "@/components/header";
import { Suspense, lazy } from "react";

const BookList = lazy(() => import("@/components/bookList"));

export default function Home() {
  return (
    <main>
      <Header pageTitle={"Books Read This Month"} />

      <Suspense fallback={<BookListSceleton />}>
        <BookList />
      </Suspense>
    </main>
  );
}
