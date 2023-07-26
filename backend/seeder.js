import dotenv from 'dotenv';
import UsersFavorites from './models/usersFavoritesModel.js';
import weather from './mocks/getWeather.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await UsersFavorites.deleteMany();
    console.log('Data imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};
importData();
