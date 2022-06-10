const ParkGoogleMap = () => {
    
        return (
            <iframe
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                src={`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Six Flags&inputtype=textquery&key=AIzaSyCqmFQSKJmJegqrcj0V0HeW5aPznqQNKUU`}>
            </iframe>
        );
};

export default ParkGoogleMap;