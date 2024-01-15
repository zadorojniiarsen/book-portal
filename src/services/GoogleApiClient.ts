import axios from 'axios';

export default class GoogleApiClient {
  private apiKey: string;
  private apiUrl: string;

  constructor() {
    this.apiKey = process.env.API_KEY || '';
    this.apiUrl = process.env.API_URL || '';
  }

  public async searchBooks(query: string): Promise<void> {
    const queryParams = {
      q: query,
      maxResults: 40,
      key: this.apiKey,
    };

    try {
      const response = await axios.get(this.apiUrl, { params: queryParams });

      if (response.status !== 200) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = response.data;

      const booksArray = data.items.map((book: any) => ({
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown',
        rating: book.volumeInfo.maturityRating,
        description: book.volumeInfo.description || 'No description available',
        reviews: book.volumeInfo.reviewsCount || 0,
        imageUrl: book.volumeInfo.imageLinks
          ? book.volumeInfo.imageLinks.thumbnail
          : 'No image available',
      }));

      console.log(booksArray);
    } catch (error) {
      // console.error('Error:', error.message);
    }
  }
}
