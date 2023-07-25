import { useEffect, useState } from 'react';

const useDebounce = (value, delay) => {
  console.log({ value });
  const [debouncedItem, setDebouncedItem] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedItem(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  return debouncedItem;
};
export default useDebounce;
