const ParkDirectionsMap = ({ latitude, longitude, placeID}) => {
    let url = `https://www.google.com/maps/embed/v1/directions?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&origin=${latitude} ${longitude}&destination=place_id:${placeID}`
    return (
        <div style={{marginTop:'6rem'}}>
        { placeID ? <iframe title="Park Map"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={url}>
        </iframe> : <div>Loading...</div>}
        </div>
    );
};

export default ParkDirectionsMap;