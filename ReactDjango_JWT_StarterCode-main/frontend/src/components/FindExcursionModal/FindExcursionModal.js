import React from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ParkSearch from '../ParkSearch/ParkSearch';
import NearbyParkSearchMap from '../NearbyParkSearchMap/NearbyParkSearchMap';
import "../CreateExcursionModal/CreateExcursionModal.css";

const FindExcursionModal = ({ open, close, placeID, setPlaceID, latitude, longitude, setAddress }) => {
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