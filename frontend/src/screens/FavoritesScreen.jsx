import React, { useContext } from 'react';
import FavoritesList from '../components/FavoritesList/FavoritesList';
import StateContext from '../StateContext';
import { useNavigate } from 'react-router-dom';
import DispatchContext from '../DispatchContext';
import _ from 'lodash';
import WeatherCard from '../components/WeatherCard/WeatherCard';

const FavoritesScreen = () => {
  const { favoritesLocations, currentLocation } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };
  const onFavClick = (data) => {
    dispatch({ type: 'SET_CURRENT', payload: data });
  };

  const disableButton = !favoritesLocations[currentLocation?.value];

  return (
    <div
      className='screen'
      style={{ marginTop: '20px' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <button
          onClick={navigateToHome}
          className='back_btn'>
          Back
        </button>
        <span className='fav_title'>
          <h1>Favorites </h1>
        </span>
      </div>
      <div className='main_display'>
        {!_.isEmpty(currentLocation) && (
          <WeatherCard
            currentLocation={currentLocation}
            disableButton={disableButton}
            favActionBtn={'Remove'}
          />
        )}
        <FavoritesList
          buttonDisable={favoritesLocations[currentLocation?.value]}
          onClick={onFavClick}
        />
      </div>
    </div>
  );
};

export default FavoritesScreen;
