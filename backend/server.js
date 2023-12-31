import express from 'express';
import dotenv from 'dotenv';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import cityWeatherRoutes from './routes/cityWeatherRoutes.js';
import locationsRouter from './routes/locationsRoutes.js';
import favoritesLocationsRouter from './routes/favoritesLocationsRouter.js';
import cookieParser from 'cookie-parser';
dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/cityWeather', cityWeatherRoutes);
app.use('/api/locations', locationsRouter);
app.use('/api/favoritesLocations', favoritesLocationsRouter);

app.get('/', (req, res) => {
  res.send('API is running....');
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running  on port ${PORT}`));
