import axios from 'axios';
import locations from '../mocks/getLocations.js';
const getLocations = async (req, res) => {
  try {
    const { query = '' } = req.params;

    const { data } = await axios.get(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.API_KEY}&q=${query}`
    );
    // const data = locations;
    res.json(data);
  } catch (err) {
    res.status(404);
  }
};

export { getLocations };
