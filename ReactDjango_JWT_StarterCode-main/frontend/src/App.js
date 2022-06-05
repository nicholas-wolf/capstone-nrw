// General Imports
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Footer from "./components/Footer/Footer";
import SearchBar from './components/SearchBar/SearchBar';

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import GoogleMaps from "./components/GoogleMap/GoogleMap";
import PlaceMap from './components/GoogleMap/GoogleMap';



function App() {
  const [, setVideoResults] = useState();
  const navigate = useNavigate();

  if (process.env.NODE_ENV !== "production") {
    console.log("It's working!");
  }

  useEffect(() => {
    fetchResults("starwars");
  }, []);

  const fetchResults = async (searchTerm) => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            q: searchTerm,
            key: process.env.REACT_APP_YT_API_KEY,
            part: "snippet",
            type: "video",
            maxResults: 5,
          },
        }
      );
      setVideoResults(response.data.items);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };



  return (
    <div>
      <PlaceMap/>
      {/* <SearchBar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer /> */}
    </div>
  );
}

export default App;
