import dotenv from 'dotenv';
import CityWeather from './models/cityWeatherModel.js';
import weather from './mocks/getWeather.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await CityWeather.insertMany(weather);
    console.log('Data imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};
importData();
