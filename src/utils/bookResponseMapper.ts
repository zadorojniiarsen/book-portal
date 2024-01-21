const processData = (book: any) => ({
  title: book.volumeInfo.title,
  author: book.volumeInfo.authors ? book.volumeInfo.authors[0] : "Unknown",
  rating:
    book.volumeInfo.maturityRating === "NOT_MATURE"
      ? "Not Mature"
      : book.volumeInfo.maturityRating,
  publishedDate: book.volumeInfo?.publishedDate?.slice(0, 4) ?? "Unknown Year",
  description: book.volumeInfo.description || "No description available",
  reviews: book.volumeInfo.reviewsCount || 0,
  imageUrl: book.volumeInfo.imageLinks
    ? book.volumeInfo.imageLinks.thumbnail
    : "No image available",
  viewed: false,
  id: book.id,
  pageCount: book.volumeInfo.pageCount,
  url: book.saleInfo.buyLink,
});

export const bookArrayResponseMapper = (data: any): Book[] =>
  data.map(processData);

export const bookResponseMapper = (data: unknown): Book => processData(data);
