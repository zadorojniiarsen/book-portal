export type Sorter<T> = (a: T, b: T) => number;
export type SortFunction = Sorter<string> | Sorter<boolean> | Sorter<number>;

export enum SortStrategy {
  Author = "author",
  Name = "title",
  Viewed = "viewed",
  Year = "publishedDate",
}

export interface SortOptions {
  sortBy: SortStrategy;
  isAscending: boolean;
}
