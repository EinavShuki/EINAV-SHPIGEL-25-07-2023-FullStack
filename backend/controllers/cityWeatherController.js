import CityWeather from '../models/cityWeatherModel.js';
import axios from 'axios';
import _ from 'lodash';
import weather from '../mocks/getWeather.js';

const fetchingCityWeather = async (cityKey) => {
  console.log('fetching from API');
  return axios.get(
    `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${process.env.API_KEY}`
  );
};

const getCityWeather = async (req, res, next) => {
  try {
    const { cityKey = '' } = req.params;

    const city = await CityWeather.findOne({ cityKey });
    const now = new Date().toLocaleDateString('en-GB');

    if (!city) {
      // const { data } = await fetchingCityWeather(cityKey);
      const data = weather;
      const newCity = await CityWeather.create({
        ...data[0],
        cityKey,
      });
      res.json(newCity);
    } else {
      const cityDate = new Date(
        city.LocalObservationDateTime
      ).toLocaleDateString('en-GB');

      if (now !== cityDate) {
        // const data = await fetchingCityWeather(cityKey);
        const data = weather;
        const newCity = await _.merge(city, data[0]).save();
        console.log({ newCity });
        res.json(newCity);
      } else {
        console.log('fetching from db');
        res.json(city);
      }
    }
  } catch (err) {
    res.status(404);
    return next(err);
  }
};

export { getCityWeather };
