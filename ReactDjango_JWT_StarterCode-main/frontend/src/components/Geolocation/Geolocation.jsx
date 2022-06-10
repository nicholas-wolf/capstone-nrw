
// async function fetchData(url){
//     let response = await fetch(url);
//     let data = await response.json();
//     return data;
// }

// async function showLocation(position){
//     const KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
//     let lat = position.coords.latitude;
//     let long = position.coords.longitude;
//     let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${KEY}`;
//     let data = await fetchData(url);
//     console.log("im data",data);
//     // ... USE THE DATA HERE ...
// }

// function getLocation(showPosition) {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else { 
//         console.log("Geolocation is not supported by this browser.");
//     }
// }

// window.addEventListener("load",showLocation, getLocation);
