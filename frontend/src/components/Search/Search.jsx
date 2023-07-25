import { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import './Search.css';
import Select from 'react-select';
import _ from 'lodash';
import { getOptions } from '../../utils';

const DELAY = 1000;

const Search = () => {
  const [inputValue, setInputValue] = useState('kk');
  const [options, setOptions] = useState([]);
  const [currentLocation, setCurrentLocation] = useState('');
  const debouncedValue = useDebounce(inputValue, DELAY); //costume hook

  const changeLocation = (e) => {
    setCurrentLocation(e.Key);
  };

  const fetchLocations = async (debouncedValue) => {
    if (_.size(debouncedValue) > 1) {
      const response = await fetch(`/api/locations/${debouncedValue}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setOptions(getOptions(jsonData));
    }
  };

  useEffect(() => {
    //fetching locations
    fetchLocations(debouncedValue);
  }, [debouncedValue]);

  return (
    <Select
      value={currentLocation}
      isMulti={false}
      name='cities'
      className='basic-select'
      classNamePrefix='select'
      onChange={changeLocation}
      options={options}
      placeholder='Start typing location name'
      onInputChange={(input) => setInputValue(input)}
    />
  );
};

export default Search;
