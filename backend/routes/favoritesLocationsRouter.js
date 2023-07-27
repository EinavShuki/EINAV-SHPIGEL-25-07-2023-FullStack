import express from 'express';
const router = express.Router();
import {
  getFavoritesLocations,
  addFavoritesLocation,
  deleteFavoritesLocations,
} from '../controllers/favoritesLocationsController.js';
import cookieHandler from '../middleware/cookiesHandler.js';

router
  .route('/')
  .get(cookieHandler, getFavoritesLocations)
  .post(addFavoritesLocation)
  .delete(deleteFavoritesLocations);

export default router;
