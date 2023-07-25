import { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import './Search.css';
import Select from 'react-select';
import _ from 'lodash';

const DELAY = 1000;

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState('');
  const debouncedValue = useDebounce(inputValue, DELAY); //costume hook

  const changeInpute = (e) => {
    setInputValue(e.target.value);
  };

  const fetchLocations = async (debouncedValue) => {
    if (_.size(debouncedValue) > 2) {
      const response = await fetch();
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setOptions(jsonData);
    }
  };

  useEffect(() => {
    //fetching locations
    fetchLocations(debouncedValue);
  }, [debouncedValue]);

  return (
    <Select
      value={debouncedValue}
      isMulti={false}
      name='cities'
      className='basic-select'
      classNamePrefix='select'
      onChange={changeInpute}
      options={options}
      placeholder='Enter location name'
    />
  );
};

export default Search;
