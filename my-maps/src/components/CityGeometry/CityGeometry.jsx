import React from 'react';
import axios from 'axios';

const CityGeometry = async () => {
  try {
    const url = 'https://api.geoapify.com/v1/isoline?lat=39.10052013895695&lon=-76.78959305536686&type=time&mode=drive&range=900&apiKey=d156728181664b42a14c05bbddbbd236';
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default CityGeometry;

// import React, { useState, useEffect } from "react";
// import axios from 'axios';

// function CityGeometry() {
//     const [geoJSONFeatures, setGeoJSONFeatures] = useState(null);

//     useEffect(() => {
//         const url = 'https://api.geoapify.com/v1/isoline?lat=39.10052013895695&lon=-76.78959305536686&type=time&mode=drive&range=900&apiKey=d156728181664b42a14c05bbddbbd236';

//         axios.get(url)
//             .then((response) => {
//                 console.log(response.data)
//                 // Assuming the response contains GeoJSON data
//                 // You may need to adjust this depending on the actual response structure
//                 setGeoJSONFeatures(response.data);
//             })
//             .catch((error) => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);

//     // Rendering GeoJSON features
//     return (
//         <div>
//             {geoJSONFeatures && (
//                 <pre>{JSON.stringify(geoJSONFeatures, null, 2)}</pre>
//             )}
//         </div>
//     );
// }

// export default CityGeometry;


// import React from "react";

// import axios from 'axios';

// function CityGeometry() {
//     const url = 'https://api.geoapify.com/v1/isoline?lat=39.10052013895695&lon=-76.78959305536686&type=time&mode=drive&range=900&apiKey=d156728181664b42a14c05bbddbbd236';

//     // var config = {
//     //   method: 'get',
//     //   url: 'https://api.geoapify.com/v1/isoline?lat=39.10052013895695&lon=-76.78959305536686&type=time&mode=drive&range=900&apiKey=d156728181664b42a14c05bbddbbd236',
//     //   headers: { }
//     // };
    
//     // axios(config)
//     // .then(function (response) {
//     //   console.log(response.data);
//     // })
//     // .catch(function (error) {
//     //   console.log(error);
//     // });

//     axios.get(url)
//         .then((response.data) => data.json())
//         then.((GeoJSONFeatures) => console)

    
// };

// export default CityGeometry;
