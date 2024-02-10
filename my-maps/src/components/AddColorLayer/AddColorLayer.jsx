// function addColorLayer(map, airQualityData) {
//     const aqi = airQualityData.aqi;

//     // Define color stops based on AQI values
//     let fillColor;

//     switch (aqi) {
//         case 1: // Good
//             fillColor = 'green';
//             break;
//         case 2: // Fair
//             fillColor = 'yellow';
//             break;
//         case 3: // Moderate
//             fillColor = 'orange';
//             break;
//         case 4: // Poor
//             fillColor = 'red';
//             break;
//         case 5: // Very Poor
//             fillColor = 'purple';
//             break;
//         default:
//             fillColor = 'gray'; // Default color for unknown AQI values
//     }

//     // Add a layer to the map
//     map.addLayer({
//         id: 'air-quality-layer',
//         type: 'fill',
//         source: {
//             type: 'geojson',
//             data: {
//                 type: 'Feature',
//                 geometry: {
//                     type: 'Point',
//                     coordinates: [airQualityData.lon, airQualityData.lat]
//                 }
//             }
//         },
//         paint: {
//             'fill-color': fillColor,
//             'fill-opacity': 0.7 // Adjust opacity as needed
//         }
//     });
// }

// export default addColorLayer;
import React from "react";

function addColorLayer(map, airQualityData, cityPolygon) {
    const { aqi } = airQualityData;
    console.log("i wish i colored the map")

    // Define color stops based on AQI values
    let fillColor;

    switch (aqi) {
        case 1: // Good
            fillColor = 'green';
            break;
        case 2: // Fair
            fillColor = 'yellow';
            break;
        case 3: // Moderate
            fillColor = 'orange';
            break;
        case 4: // Poor
            fillColor = 'red';
            break;
        case 5: // Very Poor
            fillColor = 'purple';
            break;
        default:
            fillColor = 'gray'; // Default color for unknown AQI values
    }

    // Add a layer to the map
    map.addLayer({
        id: 'air-quality-layer',
        type: 'fill',
        source: {
            type: 'geojson',
            data: {
                type: 'Feature',
                geometry: {
                    type: 'Polygon',
                    coordinates: cityPolygon // Correct order: [longitude, latitude]
                }
            }
        },
        paint: {
            'fill-color': fillColor,
            'fill-opacity': 0.5 // Adjust opacity as needed
        }
    });
}

export default addColorLayer;
