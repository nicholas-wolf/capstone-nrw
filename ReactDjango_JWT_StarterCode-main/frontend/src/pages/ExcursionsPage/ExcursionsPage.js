import React, { useState, useEffect } from "react";
import axios from "axios";
import { URL_HOST } from "../../urlHost";
import Excursion from '../../components/Excursion/Excursion';
import ParkDirectionsMap from "../../components/ParkDirectionsMap/ParkDirectionsMap";


const ExcursionsPage = (excursionId, placeID) => {
    const [excursions, setExcursions] = useState([]);

    useEffect(() => {
        fetchExcursions(excursionId);
      }, [excursionId]);

    const fetchExcursions = async (excursionId) => {
        try {
          let response = await axios.get(`${URL_HOST}/api/excursion/${excursionId}`);
          setExcursions(response.data);
          console.log(response.data)
        } catch (error) {
          console.log(error.message);
        }
      };
        return (
            <div> 
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
            <ParkDirectionsMap placeID={placeID}/>
            </div>
            
    );
}
export default ExcursionsPage;