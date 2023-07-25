import CityWeather from '../models/cityWeatherModel.js';

const getCityWeather = async (req, res, next) => {
  try {
    const { cityKey = '' } = req.params;

    const city = await CityWeather.findOne({ cityKey });
    res.json(city);
  } catch (err) {
    res.status(404);
    return next(err);
  }
};

export { getCityWeather };
