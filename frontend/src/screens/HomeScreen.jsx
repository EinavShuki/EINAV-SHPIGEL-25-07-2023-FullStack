import React, { useEffect, useState } from 'react';
import Search from '../components/Search/Search';
import WeatherCard from '../components/WeatherCard/WeatherCard';
import _ from 'lodash';

function HomeScreen() {
  const [currentLocation, setCurrentLocation] = useState('');

  return (
    <div className='home_div'>
      <Search
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
      />
      {currentLocation && !_.isEmpty(currentLocation) && (
        <WeatherCard currentLocation={currentLocation} />
      )}
    </div>
  );
}

export default HomeScreen;
