import { SortFunction, SortOptions, SortStrategy } from "@/types/SortValue";

export const sorters: Record<SortStrategy, SortFunction> = {
  [SortStrategy.Author]: (a: string, b: string): number => a.localeCompare(b),
  [SortStrategy.Name]: (a: string, b: string): number => a.localeCompare(b),
  [SortStrategy.Viewed]: (a: boolean, b: boolean): number =>
    a === b ? 0 : a ? 1 : -1,
  [SortStrategy.Year]: (a: string, b: string): number =>
    Number(a) - Number(b)
};

export const defaultSortValues: SortOptions = Object.freeze({
  sortBy: SortStrategy.Name,
  isAscending: true,
});

export const sortBooksByOption = (books: Book[], option: SortOptions): Book[] => {
  return books.toSorted((a: Book, b: Book): number => {
    const first = (option.isAscending ? a : b)[option.sortBy] as never;
    const second = (option.isAscending ? b : a)[option.sortBy] as never;
    const sorter = sorters[option.sortBy] as SortFunction | undefined;

    return sorter ? sorter(first, second) : 0;
  });
};