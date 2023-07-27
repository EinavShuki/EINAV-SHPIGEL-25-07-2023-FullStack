import UsersFavorites from '../models/usersFavoritesModel.js';
import _ from 'lodash';

const getFavoritesLocations = async (req, res, next) => {
  const { userId } = req.cookies;
  try {
    const fav = await UsersFavorites.findOne({ userId });
    res.json(fav);
  } catch (err) {
    res.status(404);
    return next(err);
  }
};

const addFavoritesLocation = async (req, res, next) => {
  const { userId } = req.cookies;
  const { value, label } = req.body;
  try {
    const userFav = await UsersFavorites.findOne({ userId });
    let newUserFav;
    if (!userFav) {
      //create user with the favorite location
      newUserFav = await UsersFavorites.create({
        userId,
        favoritesLocations: { [value]: label },
      });
      res.status(201).json(newUserFav);
    } else {
      userFav.favoritesLocations.set(value, label);
      // add the favorite location to the user
      newUserFav = await userFav.save();
      res.json(newUserFav);
    }
  } catch (err) {
    res.status(404);
    return next(err);
  }
};

const deleteFavoritesLocations = async (req, res, next) => {
  const { userId } = req.cookies;
  const { value, label } = req.body;
  try {
    const userFav = await UsersFavorites.findOne({ userId });
    userFav.favoritesLocations.delete(value);
    await userFav.save();
    res.json({ message: `${label} removed from favorites` });
  } catch (err) {
    res.status(404);
    return next(err);
  }
};

export {
  getFavoritesLocations,
  addFavoritesLocation,
  deleteFavoritesLocations,
};
