export type Sorter<T> = (a: T, b: T) => number;
export type SortFunction = Sorter<string> | Sorter<boolean> | Sorter<number>;

export const enum SortStrategy {
  Popularity = "downloads",
  Name = "title",
  Viewed = "viewed",
}

export interface SortOptions {
  sortBy: SortStrategy;
  isAscending: boolean;
}
