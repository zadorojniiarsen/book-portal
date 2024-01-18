interface Review {
  text: string;
  name: string;
  age: number;
}

interface Book {
  id: string;
  title: string;
  author: string;
  rating: string;
  description: string;
  reviews: Review[];
  imageUrl: any;
  publishedDate: string;
  pageCount: string;
  viewed: boolean;
}
