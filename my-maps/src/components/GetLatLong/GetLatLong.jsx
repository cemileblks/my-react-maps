import axios from 'axios';

export const getLatLong = async (cityName) => {
  try {
    const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=c159ba1148ba5d89f87f2d56ab03fa73`);
    const { lat, lon } = response.data[0];
    return { lat, lon };
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
