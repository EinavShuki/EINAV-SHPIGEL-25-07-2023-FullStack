import { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import './Search.css';
import Select from 'react-select';
import _ from 'lodash';
import { getOptions, fetchLocations } from '../../utils';

const DELAY = 1000;

const Search = ({ currentLocation, onClick }) => {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
  const debouncedValue = useDebounce(inputValue, DELAY); //costume hook

  useEffect(() => {
    //fetching locations
    fetchLocations(debouncedValue, (jsonData) => {
      setOptions(getOptions(jsonData));
    });
  }, [debouncedValue]);

  return (
    <Select
      value={currentLocation || ''}
      isMulti={false}
      name='cities'
      className='basic-select'
      classNamePrefix='select'
      onChange={onClick}
      options={options}
      placeholder='Start typing location name'
      onInputChange={(input) => setInputValue(input)}
    />
  );
};

export default Search;
