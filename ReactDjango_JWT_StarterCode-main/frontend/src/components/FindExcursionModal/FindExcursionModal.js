import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import moment from 'moment';
import { URL_HOST } from "../../urlHost";
import axios from "axios";
import ParkSearch from '../ParkSearch/ParkSearch';
import useAuth from '../../hooks/useAuth';
import NearbyParkSearchMap from '../NearbyParkSearchMap/NearbyParkSearchMap';
import "../CreateExcursionModal/CreateExcursionModal.css";

const FindExcursionModal = ({ open, close, placeID, setPlaceID, latitude, longitude, setAddress }) => {

    // const [user, token] = useAuth();
    const navigate = useNavigate();

    const onSubmit = async () => {
        try {
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
                                Find Excursion
                            </Typography>
                            <Typography sx={{ mt: 2, color: 'white', marginLeft:'1rem' }}>
                                Search for park and hit 'submit' button.
                            </Typography>
                            <ParkSearch 
                                parkName={placeID} 
                                setPlaceID={setPlaceID}
                                setAddress={setAddress}
                            />
                            <div className='datePickAndButtons'>
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
    )}
export default FindExcursionModal;