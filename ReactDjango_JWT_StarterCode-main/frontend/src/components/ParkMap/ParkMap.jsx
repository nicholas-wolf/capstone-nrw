import React, {useState, useEffect} from "react";
import Geocode from "react-geocode";



export default function ParkMap ({address}) {
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
const [lat, setLat] = useState("");
const [long, setLong] = useState("")

useEffect(() => {
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

// set response language. Defaults to english.
Geocode.setLanguage("en");

// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("us");
Geocode.setLocationType("ROOFTOP");

Geocode.fromAddress(address).then(
    (response) => {
      setLat(response.results[0].geometry.location.lat)
      setLong(response.results[0].geometry.location.lng)
    },
    (error) => {
      console.error(error);
    }
  );

}, [address])



    return (
        <div style={{marginTop:'6rem'}}>
        {lat ? <iframe title="Park Map"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/view?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&center=${lat} ${long}&zoom=18&maptype=satellite`}>
        </iframe> : <div>Loading...</div>}
        </div>
    );
};