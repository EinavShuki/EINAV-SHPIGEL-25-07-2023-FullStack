import React, { useContext } from 'react';
import Search from '../components/Search/Search';
import WeatherCard from '../components/WeatherCard/WeatherCard';
import _ from 'lodash';
import FavoritesList from '../components/FavoritesList/FavoritesList';
import StateContext from '../StateContext';
import { useNavigate } from 'react-router-dom';
import DispatchContext from '../DispatchContext';

function HomeScreen() {
  const { favoritesLocations, currentLocation } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  console.log({ currentLocation });

  const navigate = useNavigate();

  const disableButton = favoritesLocations[currentLocation?.value];

  const navigateToFav = () => {
    navigate('/favorites');
  };

  const onLocationClicked = (data) => {
    dispatch({ type: 'SET_CURRENT', payload: data });
  };

  return (
    <div className='screen'>
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <button
          onClick={navigateToFav}
          className='fav_manage_btn'>
          Favorites Manage
        </button>
        <Search
          currentLocation={currentLocation}
          onClick={onLocationClicked}
        />
      </div>
      <div className='main_display'>
        {!_.isEmpty(currentLocation) && (
          <WeatherCard
            currentLocation={currentLocation}
            disableButton={disableButton}
            favActionBtn={'Add'}
          />
        )}
        <FavoritesList
          buttonDisable={disableButton}
          onClick={onLocationClicked}
        />
      </div>
    </div>
  );
}

export default HomeScreen;
