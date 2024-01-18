'use client'

import BookDetailsSceleton from "@/components/bookDetails/BookDetailsSceleton";
import Header from "@/components/header";
import GoogleApiClient from "@/services/GoogleApiClient";
import { Suspense, lazy } from "react";

const BookDetails = lazy(() => import("@/components/bookDetails"));

export default async function BookPage({ params }: { params: { id: string } }) {
  const apiClient = new GoogleApiClient();
  const book = await apiClient.searchBookById(params.id);

  return (
    book && (
      <div>
        <Header />
        <Suspense fallback={<BookDetailsSceleton />}>
          <BookDetails {...book} />;
        </Suspense>
      </div>
    )
  );
}
