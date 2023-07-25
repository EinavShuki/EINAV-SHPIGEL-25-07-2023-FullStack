import React from 'react';
import './WeatherCard.css';
import _ from 'lodash';
import useFetch from '../../hooks/useFetch';
import Loader from '../Loader/Loader';

function WeatherCard({ currentLocation }) {
  console.log({ currentLocation });

  const { data, isLoading, isError } = useFetch(
    `/api/cityWeather/${currentLocation.value}`
  );
  console.log({ data });
  const formattedDate =
    data && new Date(data.LocalObservationDateTime).toDateString();
  const currentTemp = _.get(data, 'Temperature.Metric.Value', '');

  return (
    <div className='weather_area'>
      {isLoading ? (
        <Loader />
      ) : (
        data && (
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
        )
      )}
    </div>
  );
}

export default WeatherCard;
