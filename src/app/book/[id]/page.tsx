import BookDetails from "@/components/bookDetails";
import GoogleApiClient from "@/services/GoogleApiClient";

export default async function BookPage({ params }: { params: { id: string } }) {
  const apiClient = new GoogleApiClient()
  const book = await apiClient.searchBookById(params.id);
  return book && <BookDetails {...book} />;
}
