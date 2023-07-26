import mongoose from 'mongoose';

const usersFavoritesSchema = mongoose.Schema({
  userId: { type: String, require: true },
  favoritesLocations: { type: Map },
});

const UsersFavorites = mongoose.model('UsersFavorites', usersFavoritesSchema);

export default UsersFavorites;
