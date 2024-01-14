export type Sorter<T> = (a: T, b: T) => number;
export type SortFunction = Sorter<string> | Sorter<Date> | Sorter<number>;

export const enum SortStrategy {
  Popularity = "downloads",
  Name = "title",
  Newest = "addedAt",
}

export interface SortOptions {
  sortBy: SortStrategy;
  isAscending: boolean;
}
