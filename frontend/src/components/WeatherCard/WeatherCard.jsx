import React, { useContext } from 'react';
import './WeatherCard.css';
import _ from 'lodash';
import useFetch from '../../hooks/useFetch';
import Loader from '../Loader/Loader';
import ErrorCard from '../ErrorCard/ErrorCard';
import DispatchContext from '../../DispatchContext';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

const ErrorMsg = 'Something went wrong';

function WeatherCard({ currentLocation, disableButton, favActionBtn }) {
  console.log({ favActionBtn });
  const dispatch = useContext(DispatchContext);

  const { data, isLoading, isError } = useFetch(
    `/api/cityWeather/${currentLocation.value}`
  );
  const formattedDate =
    data && new Date(data.LocalObservationDateTime).toDateString();
  const currentTemp = _.get(data, 'Temperature.Metric.Value', '');

  const addToFavorites = async () => {
    dispatch({ type: 'ADD_FAV', payload: currentLocation });
    try {
      await fetch(`/api/favoritesLocations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentLocation),
      });
    } catch (e) {
      console.log(e.message);
    }
  };
  const removeFromFavorites = async () => {
    console.log('currentLocation  was removed from favorites');
    dispatch({ type: 'REMOVE_FAV', payload: currentLocation });
  };

  return (
    <span style={{ marginRight: '400px' }}>
      {isError ? (
        <ErrorCard message={ErrorMsg} />
      ) : isLoading ? (
        <Loader />
      ) : (
        data && (
          <>
            <div className='weather_area'>
              <div>
                <div className='weather_top_line'>
                  <h4
                    style={{
                      borderBottom: 'solid 1px  hsl(0, 0%, 40%)',
                      paddingBottom: '5px',
                    }}>
                    Current Weather in {currentLocation?.label}
                  </h4>
                  <h5 className='date'>{formattedDate}</h5>
                </div>
                <div className='weather_mid_line'>
                  <img
                    style={{ width: '15vw' }}
                    src={require(`../../images/${data.WeatherIcon}.svg`)}
                    alt={data.WeatherText}
                  />
                  <div className='conditon'>{data.WeatherText}</div>
                </div>
                <div className='temp'>{currentTemp}&deg;</div>
              </div>
            </div>
            <FavoriteButton
              onClick={
                favActionBtn === 'Add' ? addToFavorites : removeFromFavorites
              }
              disableButton={disableButton}
              action={favActionBtn}
            />
          </>
        )
      )}
    </span>
  );
}

export default WeatherCard;
