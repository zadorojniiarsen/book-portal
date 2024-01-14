interface BookMinimal {
  id: number;
  viewed: boolean;
}

interface Book extends BookMinimal {
  title: string;
  author: string;
  rating: number;
  description: string;
  reviews: Review[];
  downloads: number;
  img: any;
}
