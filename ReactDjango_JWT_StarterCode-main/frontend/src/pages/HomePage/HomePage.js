import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import img2 from "../../assets/roller-coaster.jpeg"
import img3 from "../../assets/TR.jpg"

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchCars();
  }, [token]);
  return (
    <div >
      <div >
        <h1 style={{textAlign:'center', marginTop:'1rem', fontFamily:'fantasy', fontSize:'2.25rem'}}> Welcome to Ride Buddy {user.username}!</h1>
      </div>
    <div className="containerLeft">
      <img style={{maxWidth:'500px', minWidth:'200px', margin:'1rem', justifyContent:'left'}} src={img2} alt=''/>
      <p style={{fontSize:"1.5rem" }}>Do you love amusement parks, and riding rides, but your friends hate rides?</p>  
    </div>
    <div className="containerRight">
      <p style={{fontSize:"1.5rem" }}>Well your in the right place! Search for a amusement park near you, and find other ride enthusiasts!</p>
      <img style={{maxWidth:'500px', minWidth:'200px', margin:'1rem', justifyContent:'right'}} src={img3} alt=''/>
    </div>
    </div>
  );
};

export default HomePage;
