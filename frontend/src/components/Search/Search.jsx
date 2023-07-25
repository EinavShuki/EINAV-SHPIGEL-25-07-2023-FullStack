import { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import './Search.css';

const DELAY = 1000;

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, DELAY); //costume hook

  const changeInpute = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    //fetching locations
  }, [debouncedValue]);

  return (
    <form className='search_form'>
      <input
        autoFocus
        onChange={(e) => changeInpute(e)}
        className='search_input'
        placeholder='Enter location name'
      />
    </form>
  );
};

export default Search;
