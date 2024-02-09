import React, { useEffect, useState } from 'react';
import './MyMap.scss';
import maplibre from 'maplibre-gl';
import SearchInput from '../SearchInput/SearchInput';
import { getLatLong } from '../GetLatLong/GetLatLong';

function MyMap() {
  const [map, setMap] = useState(null);
  const [initialState, setInitialState] = useState({
    lng: -1.0724,
    lat: 53.9920,
    zoom: 10
  });

  // Start map with fetched latitude and longitude
  const initializeMap = async (cityName) => {
    const myAPIKey = 'bc942683c0154ef7af35b4b812414db5';
    const mapStyle = 'https://maps.geoapify.com/v1/styles/klokantech-basic/style.json';
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

      setMap(mapInstance);
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