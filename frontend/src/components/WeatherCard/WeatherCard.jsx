import React from 'react';
import './WeatherCard.css';
import _ from 'lodash';
import useFetch from '../../hooks/useFetch';
import Loader from '../Loader/Loader';
import ErrorCard from '../ErrorCard/ErrorCard';
import { AiFillHeart } from 'react-icons/ai';

const ErrorMsg = 'Something went wrong';

function WeatherCard({ currentLocation }) {
  console.log({ currentLocation });

  const { data, isLoading, isError } = useFetch(
    `/api/cityWeather/${currentLocation.value}`
  );
  const formattedDate =
    data && new Date(data.LocalObservationDateTime).toDateString();
  const currentTemp = _.get(data, 'Temperature.Metric.Value', '');

  const addToFavorites = () => {};

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
                  <h3
                    style={{
                      borderBottom: 'solid 1px  hsl(0, 0%, 40%)',
                      paddingBottom: '5px',
                    }}>
                    Current Weather
                  </h3>
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
            <button
              className='fav_btn'
              onClick={addToFavorites}>
              Add to favories
              <AiFillHeart style={{ marginLeft: '3px', color: 'red' }} />
            </button>
          </>
        )
      )}
    </span>
  );
}

export default WeatherCard;
