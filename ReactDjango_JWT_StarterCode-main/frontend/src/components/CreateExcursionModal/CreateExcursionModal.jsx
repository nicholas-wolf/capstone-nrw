import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ExcursionTextForm from '../ExcursionTextForm/ExcursionTextForm';
import DateForm from '../DateForm/DateForm';
import moment from 'moment';
import { URL_HOST } from "../../urlHost";
import axios from "axios";
import ParkSearch from '../ParkSearch/ParkSearch';
import useAuth from '../../hooks/useAuth';
import NearbyParkSearchMap from '../NearbyParkSearchMap/NearbyParkSearchMap';
import "./CreateExcursionModal.css";



const CreateExcursionModal = ({ open, close, placeID, setPlaceID, latitude, longitude, setAddress }) => {
    const [excursion, setExcursion] = useState('');
    const [date, setDate] = useState(moment(new Date()).format("DD/MM/YYYY"));
    const [user, token] = useAuth();
    const navigate = useNavigate();

    const onSubmit = async () => {
        try {
            await axios.post(
              `${URL_HOST}/api/excursion/`,
              { user: user.username, place_id: placeID, text: excursion, date: date},
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
     
            navigate("/excursions");
          } catch (error) {
            console.log(error.message);
          }
        };
    

    return (
        <Modal 
        open={open} 
        onClose={close} >
            <Box>
                
                    <Box className='wrapper'>
                    <NearbyParkSearchMap latitude={latitude} longitude={longitude}/>
                        <Box >
                            <Typography
                                className='newExcursionText'
                                variant="h6"
                                component="h2">
                                Create Excursion
                            </Typography>
                            <Typography sx={{ mt: 2, color: 'white', marginLeft:'1rem' }}>
                                Fill out inputs and hit 'submit' button.
                            </Typography>
                            <ParkSearch 
                                parkName={placeID} 
                                setPlaceID={setPlaceID}
                                setAddress={setAddress}
                            />
                            <Box className='excursionTextForm'>
                                <ExcursionTextForm
                                    excursion={excursion}
                                    setExcursion={setExcursion}
                                />
                            </Box>
                            <div className='datePickAndButtons'>
                                <Box>
                                    <DateForm sx={{width:'300px'}}
                                        date={date}
                                        setDate={setDate}
                                    />
                                </Box>
                                <Box >
                                    <button className='buttons'
                                        variant="contained"
                                        onClick={onSubmit}>
                                        Submit
                                    </button>
                                    <button sx={{background:'white'}}
                                        onClick={close}>
                                        Cancel
                                    </button>
                                </Box>
                            </div>
                        </Box>
                    </Box>
            </Box>
        </Modal>
    )
}

export default CreateExcursionModal;