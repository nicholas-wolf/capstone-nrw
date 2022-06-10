// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

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
  return (
    <div>
      
      <SearchBar />
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
        <Route path="/excursions" element={<ExcursionsPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


  // useEffect(() => {
  //   fetchResults("starwars");
  // }, []);

  // const fetchResults = async (searchTerm) => {
  //   try {
  //     let response = await axios.get(
  //       `https://www.googleapis.com/youtube/v3/search`,
  //       {
  //         params: {
  //           q: searchTerm,
  //           key: process.env.REACT_APP_YT_API_KEY,
  //           part: "snippet",
  //           type: "video",
  //           maxResults: 5,
  //         },
  //       }
  //     );
  //     setVideoResults(response.data.items);
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };