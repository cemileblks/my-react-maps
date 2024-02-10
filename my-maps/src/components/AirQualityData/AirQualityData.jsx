import React from "react";
import axios from "axios";




export const AirQualityData = async (lat, lon) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=c159ba1148ba5d89f87f2d56ab03fa73`);
        console.log(response.data.list[0].main.aqi)
        return {aqi: response.data.list[0].main.aqi};
      } catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
};
