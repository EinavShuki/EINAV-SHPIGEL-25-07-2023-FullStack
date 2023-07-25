import CityWeather from '../models/cityWeatherModel.js';
import axios from 'axios';
import _ from 'lodash';

const getCityWeather = async (req, res, next) => {
  try {
    const { cityKey = '' } = req.params;

    const city = await CityWeather.findOne({ cityKey });
    const now = new Date().toLocaleDateString('en-GB');
    const cityDate = new Date(city.LocalObservationDateTime).toLocaleDateString(
      'en-GB'
    );

    if (!city || now !== cityDate) {
      let newCity;

      const { data } = await axios.get(
        `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${process.env.API_KEY}`
      );
      if (!city) {
        newCity = await CityWeather.create({ ...data[0], cityKey });
      } else {
        console.log({ now });
        newCity = await _.merge(city, data[0]).save();
      }
      console.log({ newCity });
      res.json(newCity);
    } else res.json(city);
  } catch (err) {
    res.status(404);
    return next(err);
  }
};

export { getCityWeather };
