import React, { useState } from 'react';

function SearchInput({ onCitySearch }) {
  const [cityName, setCityName] = useState('');

  const handleSearch = () => {
    onCitySearch(cityName);
  };

  return (
    <div>
      <input
        type="text"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchInput;

// import React, { useState } from 'react';
// import axios from 'axios';

// function SearchInput({ onSearch }) {
//   const [cityName, setCityName] = useState('');
//   const [latitude, setLatitude] = useState(null);
//   const [longitude, setLongitude] = useState(null);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid={API key}`);
//       const { lat, lon } = response.data[0];
//       setLatitude(lat);
//       setLongitude(lon);
//       onSearch(lat, lon);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={cityName}
//         onChange={(e) => setCityName(e.target.value)}
//         placeholder="Enter city name"
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// }

// export default SearchInput;