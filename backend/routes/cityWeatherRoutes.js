import express from 'express';
const router = express.Router();
import { getCityWeather } from '../controllers/cityWeatherController.js';

router.route('/:cityKey').get(getCityWeather);

export default router;
