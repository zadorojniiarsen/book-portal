const processData = (book: any) => ({
  title: book.volumeInfo.title,
  author: book.volumeInfo.authors
    ? book.volumeInfo.authors.join(", ")
    : "Unknown",
  rating: book.volumeInfo.maturityRating,
  publishedDate: book.volumeInfo.publishedDate,
  description: book.volumeInfo.description || "No description available",
  reviews: book.volumeInfo.reviewsCount || 0,
  imageUrl: book.volumeInfo.imageLinks
    ? book.volumeInfo.imageLinks.thumbnail
    : "No image available",
  viewed: false,
  id: book.id,
  pageCount: book.volumeInfo.pageCount,
});

export const bookArrayResponseMapper = (data: any): Book[] =>
  data.map(processData);

export const bookResponseMapper = (data: unknown): Book => processData(data);
