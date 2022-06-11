import React, { useState} from "react";

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const placeID = "ChIJ1b5Y6CwZ9YgR67d2d7T4-nM"

export default function ParkDirectionsMap () {
    const [longitude, setLongitude] = useState("")
    const [latitude, setLatitude] = useState("")

    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
   
    function success(pos) {
        var crd = pos.coords;
        setLongitude(crd.longitude)
        setLatitude(crd.latitude)
        console.log(longitude)
        console.log(latitude)
        
    }
    
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
   navigator.geolocation.getCurrentPosition(success, error, options);
    return (
        <div style={{marginTop:'6rem'}}>
        <iframe title="Park Map"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/directions?key=${GOOGLE_MAPS_API_KEY}&origin=${latitude} ${longitude}&destination=place_id:${placeID}`}>
        </iframe>
        </div>
    );
};