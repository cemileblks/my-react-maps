import axios from 'axios';

export const getLatLong = async (cityName) => {
  try {
    const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=17231fbdb2831307cb3be13a1cf98195`);
    const { lat, lon } = response.data[0];
    return { lat, lon };
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
