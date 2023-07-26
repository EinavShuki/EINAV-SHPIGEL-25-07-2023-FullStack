import React, { useEffect, useState } from 'react';
import Search from '../components/Search/Search';
import WeatherCard from '../components/WeatherCard/WeatherCard';
import _ from 'lodash';
import FavoritesList from '../components/FavoritesList/FavoritesList';
import { BsSun } from 'react-icons/bs';

function HomeScreen() {
  const [currentLocation, setCurrentLocation] = useState('');

  return (
    <div className='home_div'>
      <Search
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
      />
      <div className='main_display'>
        {!_.isEmpty(currentLocation) && (
          <WeatherCard currentLocation={currentLocation} />
        )}
        <FavoritesList />
      </div>
    </div>
  );
}

export default HomeScreen;
