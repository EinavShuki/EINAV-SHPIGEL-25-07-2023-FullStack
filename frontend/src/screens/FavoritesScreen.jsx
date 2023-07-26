import React from 'react';
import FavoritesList from '../components/FavoritesList/FavoritesList';
import { useNavigate } from 'react-router-dom';

const FavoritesScreen = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };
  return (
    <div className='fav_screen'>
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
        <FavoritesList />
      </div>
    </div>
  );
};

export default FavoritesScreen;
