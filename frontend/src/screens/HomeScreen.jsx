import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import Search from '../components/Search/Search';
import WeatherCard from '../components/WeatherCard/WeatherCard';

function HomeScreen() {
  const [cityKey, setCityKey] = useState('');
  const { data, isLoading, isError } = useFetch(`/api/cityWeather/${cityKey}`);
  console.log({ data });

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Search />
      {data && <WeatherCard />}
    </div>
  );
}

export default HomeScreen;
