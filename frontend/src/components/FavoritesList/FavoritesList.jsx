import React, { useContext, useEffect } from 'react';
import './FavoritesList.css';
import StateContext from '../../StateContext';
import _ from 'lodash';

const FavoritesList = ({ buttonDisable = false, onClick }) => {
  const { favoritesLocations } = useContext(StateContext);

  return (
    <div className='fav_list'>
      <h3>Favorites Locations</h3>
      <ul>
        {_.map(_.keys(favoritesLocations), (key) => {
          return (
            <li>
              <button
                disabled={buttonDisable}
                onClick={() =>
                  onClick({ value: key, label: favoritesLocations[key] })
                }
                className={buttonDisable ? 'buttonDisable' : 'list_btn'}>
                {favoritesLocations[key]}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FavoritesList;