interface Book {
  title: string;
  author: string;
  rating: number;
  description: string;
  reviews: Review[];
  downloads: number;
  viewed: boolean;
  img: any;
  id: number;
  addedAt: Date;
  [key: string]: string | number | boolean | Date | Review[];
}
