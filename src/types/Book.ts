interface Review {
  text: string;
  name: string;
  age: number;
}

interface BookMinimal {
  id: string;
  viewed: boolean;
}

interface Book extends BookMinimal {
  title: string;
  author: string;
  rating: string;
  description: string;
  reviews: Review[];
  imageUrl: any;
  publishedDate: string;
  pageCount: string;
}
