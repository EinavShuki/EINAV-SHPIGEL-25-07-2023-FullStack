import React, { useState, useContext } from 'react';
import Search from '../components/Search/Search';
import WeatherCard from '../components/WeatherCard/WeatherCard';
import _ from 'lodash';
import FavoritesList from '../components/FavoritesList/FavoritesList';
import StateContext from '../StateContext';
import { useNavigate } from 'react-router-dom';

function HomeScreen() {
  const [currentLocation, setCurrentLocation] = useState('');
  const { favoritesLocations } = useContext(StateContext);
  const navigate = useNavigate();

  const disableButton = favoritesLocations[currentLocation.value];

  const navigateToFav = () => {
    navigate('/favorites');
  };

  const onFavClick = (data) => {
    setCurrentLocation(data);
  };

  return (
    <div className='home_div'>
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <button
          onClick={navigateToFav}
          className='fav_manage_btn'>
          Favorites Manage
        </button>
        <Search
          currentLocation={currentLocation}
          setCurrentLocation={setCurrentLocation}
        />
      </div>
      <div className='main_display'>
        {!_.isEmpty(currentLocation) && (
          <WeatherCard currentLocation={currentLocation} />
        )}
        <FavoritesList
          buttonDisable={disableButton}
          onClick={onFavClick}
        />
      </div>
    </div>
  );
}

export default HomeScreen;
