import axios from 'axios';
const getLocations = async (req, res, next) => {
  try {
    const { query = '' } = req.params;

    const { data } = await axios.get(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.API_KEY}&q=${query}`
    );
    res.json(data);
  } catch (err) {
    res.status(404);
    return next(err);
  }
};

export { getLocations };
