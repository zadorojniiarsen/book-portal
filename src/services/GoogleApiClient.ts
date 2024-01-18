import {
  bookArrayResponseMapper,
  bookResponseMapper,
} from "./bookResponseMapper";

export default class GoogleApiClient {
  constructor(
    private readonly apiKey: string = process.env.API_KEY ?? "",
    private readonly apiUrl: string = process.env.API_URL ?? ""
  ) {}

  public async searchBooks(): Promise<Book[]> {
    const queryParams = new URLSearchParams({
      q: "a",
      maxResults: "40",
      key: this.apiKey,
    });

    const fullUrl = `${this.apiUrl}?${queryParams.toString()}`;

    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();

    const books: Book[] = bookArrayResponseMapper(data.items);

    return books;
  }

  public async searchBookById(id: string): Promise<Book> {
    
    const queryParams = new URLSearchParams({
      key: this.apiKey,
    });

    const fullUrl = `${this.apiUrl}/${id}?${queryParams.toString()}`;
    const response = await fetch(fullUrl);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();
    const book: Book = bookResponseMapper(data);
    return book;
  }
}
