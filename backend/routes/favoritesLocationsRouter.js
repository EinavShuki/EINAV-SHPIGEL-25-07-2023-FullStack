import express from 'express';
const router = express.Router();
import {
  getFavoritesLocations,
  addFavoritesLocation,
} from '../controllers/favoritesLocationsController.js';
import cookieHandler from '../middleware/cookiesHandler.js';

router
  .route('/')
  .get(cookieHandler, getFavoritesLocations)
  .post(addFavoritesLocation);

export default router;
