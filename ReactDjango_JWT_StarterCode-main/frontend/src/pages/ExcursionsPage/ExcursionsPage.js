import React, {useState, useEffect} from "react";
// import Excursion from '../../components/Excursion/Excursion';
import ParkDirectionsMap from "../../components/ParkDirectionsMap/ParkDirectionsMap";
import ParkMap from '../../components/ParkMap/ParkMap';
import axios from "axios";
import { URL_HOST } from "../../urlHost";
import useAuth from "../../hooks/useAuth";
import Excursion from "../../components/Excursion/Excursion";

const ExcursionsPage = ({latitude, longitude, placeID, address}) => {
  const [excursions, setExcursions] = useState([]);
  const [user, token] = useAuth();
  console.log(excursions)
 
  useEffect(() => {
    try {
       axios.get(`${URL_HOST}/api/excursion/${placeID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then( (response) => {
        setExcursions(response.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [placeID])


        return (
            <div> 
              <ParkDirectionsMap 
                placeID={placeID}
                latitude={latitude}
                longitude={longitude}
              />
              < ParkMap address={address}/>
              {excursions ? (
                excursions.map((excursion) => {
                return (
                    <Excursion
                    key={excursion.id}
                    text={excursion.text}
                    date={excursion.date}
                    userName={excursion.user.username}
                    />
                    );
                })
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            
    );
}
export default ExcursionsPage;