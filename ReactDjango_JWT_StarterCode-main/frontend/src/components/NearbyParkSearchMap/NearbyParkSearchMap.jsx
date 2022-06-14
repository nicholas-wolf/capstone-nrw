const NearbyParkSearchMap = ({latitude, longitude}) => {
    return (
        <div style={{height: '450px'}}>
       {longitude ? <iframe title="Nearby Theme Parks"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/search/?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&center=${latitude} ${longitude}&zoom=10&q=amusement parks near me`}>
        </iframe> : <div>Loading...</div>}
        </div> 
    );
}
export default NearbyParkSearchMap;