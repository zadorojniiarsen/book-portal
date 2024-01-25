import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useLocalStorage } from './useLocalStorage';
import GoogleApiClient from '@/services/GoogleApiClient';
import { sortBooksByOption } from '@/utils/bookListUtils';
import { SortOptions } from '@/types/SortValue';

const useBooks = (sorting: SortOptions, setLoading: Dispatch<SetStateAction<boolean>>) => {
  const [viewedState, setViewedState] = useLocalStorage("viewed-state");
  const [booksState, setBooksState] = useState<Book[]>([]);

  const fetchData = async () => {
    const apiClient = new GoogleApiClient();
    const books = await apiClient.fetchBooks();

    // get viewed state from localStorage
    if (!viewedState) {
      const defaultData = books.filter((b) => b.viewed).map((b) => b.id);
      setViewedState(defaultData);
    }

    const mergedState = books.map((book) => ({
      ...book,
      viewed: viewedState ? viewedState.includes(book.id) : false,
    }));

    setBooksState(sortBooksByOption(mergedState, sorting));
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { booksState, setBooksState };
}

export default useBooks;