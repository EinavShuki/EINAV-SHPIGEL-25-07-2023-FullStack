import React from 'react';
import './WeatherCard.css';
import Card from '../Card/Card';
import _ from 'lodash';
import { TbSunglasses } from 'react-icons/tb';
import { BsFillCloudRainHeavyFill } from 'react-icons/bs';
import { WiHumidity } from 'react-icons/wi';

function WeatherCard({ weather }) {
  return (
    <div style={{ marginTop: '100px', display: 'flex' }}>
      {_.map(weather.forecast.forecastday, (day, index) => {
        const condition = day.day.condition;
        const formattedDate = new Date(day.date).toDateString();
        return (
          <Card key={index}>
            <h5 className='date'>{formattedDate}</h5>
            <div className='conditon'>{condition.text}</div>
            <img
              style={{ width: '7vw' }}
              src={require(`../../weather_icons${condition.icon.slice(-12)}`)}
              alt={condition.text}
            />
            <div className='temp'>
              {day.day.mintemp_c}&deg;- {day.day.maxtemp_c}&deg;
            </div>
            <div className='more_info'>
              <div
                style={{
                  borderRight: 'solid 1px hsl(0, 0%, 40%)',
                }}>
                <TbSunglasses />
                <span> {day.day.uv}%</span>
              </div>
              <div
                style={{
                  borderRight: 'solid 1px hsl(0, 0%, 40%)',
                }}>
                <BsFillCloudRainHeavyFill />
                <span> {day.day.daily_chance_of_rain}%</span>
              </div>
              <div>
                <WiHumidity />
                <span> {day.day.avghumidity}%</span>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default WeatherCard;
