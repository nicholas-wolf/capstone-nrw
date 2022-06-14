// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ExcursionsPage from "./pages/ExcursionsPage/ExcursionsPage";

// Component Imports
import Footer from "./components/Footer/Footer";
import SearchBar from './components/SearchBar/SearchBar';


// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const [placeID, setPlaceID] = useState('');
  const [longitude, setLongitude] = useState("")
  const [latitude, setLatitude] = useState("")
  const [address, setAddress] = useState("")

  var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
  };
  
  function success(pos) {
      var crd = pos.coords;
      setLongitude(crd.longitude)
      setLatitude(crd.latitude)
  }
  
  function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);

  return (
    <div>     
      <SearchBar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage 
                placeID={placeID} 
                setPlaceID={setPlaceID} 
                longitude={longitude} 
                setLongitude={setLongitude}
                latitude={latitude}
                setLatitude={setLatitude} 
                setAddress={setAddress}
              />              
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/excursions" element={<ExcursionsPage placeID={placeID} longitude={longitude} latitude={latitude} address={address} />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;