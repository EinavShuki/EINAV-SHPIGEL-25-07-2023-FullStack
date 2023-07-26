import React, { useState, useContext } from 'react';
import Search from '../components/Search/Search';
import WeatherCard from '../components/WeatherCard/WeatherCard';
import _ from 'lodash';
import FavoritesList from '../components/FavoritesList/FavoritesList';
import StateContext from '../StateContext';

function HomeScreen() {
  const [currentLocation, setCurrentLocation] = useState('');
  const { favoritesLocations } = useContext(StateContext);

  const disableButton = favoritesLocations[currentLocation.value];

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
        <FavoritesList
          buttonDisable={disableButton}
          setCurrentLocation={setCurrentLocation}
        />
      </div>
    </div>
  );
}

export default HomeScreen;
