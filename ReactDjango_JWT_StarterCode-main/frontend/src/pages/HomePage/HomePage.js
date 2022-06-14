import React from "react";
import { useState } from "react";
import img2 from "../../assets/roller-coaster.jpeg"
import img3 from "../../assets/TR.jpg"
// import GoogleMaps from "../../components/GoogleMap/GoogleMap";
import ButtonBases from "../../components/ExcursionButton/ExcursionButton";
// import Geolocation from "../../components/Geolocation/Geolocation";
import CreateExcursionModal from '../../components/CreateExcursionModal/CreateExcursionModal';
import FindExcursionModal from "../../components/FindExcursionModal/FindExcursionModal";
import ParkMap from "../../components/ParkMap/ParkMap";

const HomePage = ({placeID, setPlaceID, latitude, setLatitude, longitude, setLongitude, setAddress}) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [showCreateExcursionModal, setShowCreateExcursionModal] = useState(false)
  const [showFindExcursionModal, setShowFindExcursionModal] = useState(false)

  return (
    <><div>
      <div>
        <h1 style={{ textAlign: 'center', marginTop: '1rem', fontFamily: 'fantasy', fontSize: '2.25rem' }}> Welcome to Ride Buddy!</h1>
      </div>
      <ButtonBases setShowCreateExcursionModal={setShowCreateExcursionModal} setShowFindExcursionModal={setShowFindExcursionModal} />
      <div className="containerLeft">
        <img style={{ maxWidth: '500px', minWidth: '500px', margin: '1rem', justifyContent: 'left' }} src={img2} alt='' />
        <p style={{ fontSize: "1.5rem" }}>Do you love amusement parks, and riding rides, but your friends hate rides?</p>
      </div>
      <div className="containerRight">
        <p style={{ fontSize: "1.5rem" }}>Well your in the right place! Search for a amusement park near you, and find other ride enthusiasts!</p>
        <img style={{ maxWidth: '500px', minWidth: '500px', margin: '1rem', justifyContent: 'right' }} src={img3} alt='' />
      </div>
      <CreateExcursionModal 
        open={showCreateExcursionModal} 
        close={() => setShowCreateExcursionModal(false)}
        placeID={placeID}
        setPlaceID={setPlaceID} 
        latitude={latitude}
        longitude={longitude}
        setLatitude={setLatitude}
        setLongitude={setLongitude}
        setAddress={setAddress}
      />
      <FindExcursionModal  
        open={showFindExcursionModal} 
        close={() => setShowFindExcursionModal(false)}
        placeID={placeID}
        setPlaceID={setPlaceID} 
        setAddress={setAddress}
        latitude={latitude}
        longitude={longitude}
      />
    </div></>
  );
};

export default HomePage;
