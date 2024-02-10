import React, { useEffect, useState } from 'react';
import './MyMap.scss';
import maplibre from 'maplibre-gl';
import SearchInput from '../SearchInput/SearchInput';
import { getLatLong } from '../GetLatLong/GetLatLong';
import { AirQualityData } from '../AirQualityData/AirQualityData';
import addColorLayer from '../AddColorLayer/AddColorLayer';

function MyMap() {
  const [map, setMap] = useState(null);
  const [initialState, setInitialState] = useState({
    lng: -1.0724,
    lat: 53.9920,
    zoom: 10
  });

  // Start map with fetched latitude and longitude
  // const initializeMap = async (cityName) => {
  //   const myAPIKey = 'bc942683c0154ef7af35b4b812414db5';
  //   const mapStyle = 'https://maps.geoapify.com/v1/styles/maptiler-3d/style.json';
  //   const { lat, lon } = await getLatLong(cityName);
  //   if (lat && lon) {
  //     setInitialState({
  //       ...initialState,
  //       lng: lon,
  //       lat: lat
  //     });

  //     const mapInstance = new maplibre.Map({
  //       container: 'map-container',
  //       style: `${mapStyle}?apiKey=${myAPIKey}`,
  //       center: [lon, lat],
  //       zoom: initialState.zoom
  //     });

  //     // mapInstance.addControl(new maplibre.NavigationControl());

  //     mapInstance.on('style.load', async () => { // Mark the callback function as async
  //       mapInstance.addControl(new maplibre.NavigationControl());
    
  //       const airQualityData = await AirQualityData(lat, lon); // Use await inside an async function
  //       addColorLayer(mapInstance, airQualityData);
  //   });



  //     setMap(mapInstance);
  //   }
  // };
  const initializeMap = async (cityName) => {
    const myAPIKey = 'bc942683c0154ef7af35b4b812414db5';
    const mapStyle = 'https://maps.geoapify.com/v1/styles/maptiler-3d/style.json';
    try {
        const { lat, lon } = await getLatLong(cityName);
        if (lat && lon) {
            setInitialState({
                ...initialState,
                lng: lon,
                lat: lat
            });

            const mapInstance = new maplibre.Map({
                container: 'map-container',
                style: `${mapStyle}?apiKey=${myAPIKey}`,
                center: [lon, lat],
                zoom: initialState.zoom
            });

            mapInstance.on('style.load', async () => {
                mapInstance.addControl(new maplibre.NavigationControl());
                try {
                  // Fetch air quality data
                  const airQualityData = await AirQualityData(lat, lon);
    
                  // Fetch city polygon coordinates
                  const cityPolygon = await fetchCityPolygon(lat, lon);
                  
                  // Add color layer to the map
                  addColorLayer(mapInstance, airQualityData, cityPolygon);
                } catch (error) {
                    console.error('Error fetching air quality data:', error);
                }
            });

            setMap(mapInstance);
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error);
    }
};


  useEffect(() => {
    // Start map with default city
    initializeMap('London'); 

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []); 

  const handleCitySearch = async (cityName) => {
    // city search logic
    await initializeMap(cityName);
  };

  const fetchCityPolygon = async (lat, lon) => {
    const apiKey = 'bc942683c0154ef7af35b4b812414db5'; // Replace with your Geoapify API key
    const url = `https://api.geoapify.com/v1/boundaries/part-of?lat=${lat}&lon=${lon}&geometry=geometry_10000&apiKey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    // Extract and return city polygon coordinates from the response
    return data && data.features && data.features[0] && data.features[0].geometry.coordinates;
  };

  return (
    <div>
      <h1>My map</h1>
      <div className="map-wrapper">
        <div className="map-container" id="map-container"></div>
      </div>
      <SearchInput onCitySearch={handleCitySearch}/>
    </div>
  );
}

export default MyMap;