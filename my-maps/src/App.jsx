import { useState } from 'react'
import './App.scss';
import MyMap from './components/MyMap/MyMap'
import CityGeometry from './components/CityGeometry/CityGeometry';
import 'maplibre-gl/dist/maplibre-gl.css';
// import 'leaflet/dist/leaflet.css';


function App() {

  const mapIsReadyCallback = (map) => {
    console.log(map);
  };

  return (<div>
    {/* <CityGeometry/> */}
    <MyMap mapIsReadyCallback={mapIsReadyCallback}/>
  </div>

  );
}

export default App
