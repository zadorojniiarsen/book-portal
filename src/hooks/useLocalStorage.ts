export const useLocalStorage = (key: string) => {
  const getLocalStorageValue = (key: string) => {
    const storedValue = localStorage.getItem(key) ?? "";
    const data = storedValue ? JSON.parse(storedValue) : null;
    return data;
  };

  const setValueInStorage = (newValue: any) => {
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  const localStorageValue = getLocalStorageValue(key);

  return [localStorageValue, setValueInStorage];
};
