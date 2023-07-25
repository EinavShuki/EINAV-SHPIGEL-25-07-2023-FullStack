import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import Search from '../components/Search/Search';
import WeatherCard from '../components/WeatherCard/WeatherCard';

function HomeScreen() {
  const [cityKey, setCityKey] = useState('');
  const { data, isLoading, isError } = useFetch(`/api/cityWeather/${cityKey}`);
  console.log({ data });

  return (
    <div className='home_div'>
      <Search />
      {data && <WeatherCard />}
    </div>
  );
}

export default HomeScreen;
