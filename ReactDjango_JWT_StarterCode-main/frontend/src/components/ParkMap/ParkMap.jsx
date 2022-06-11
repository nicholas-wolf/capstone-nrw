import React, { useState } from "react";

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const latitude = '33.7698923,'
const longitude = '-84.5497376'
export default function ParkMap () {
    return (
        <div style={{marginTop:'6rem'}}>
        <iframe title="Park Map"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/view?key=${GOOGLE_MAPS_API_KEY}&center=${latitude} ${longitude}&zoom=18&maptype=satellite`}>
        </iframe>
        </div>
    );
};