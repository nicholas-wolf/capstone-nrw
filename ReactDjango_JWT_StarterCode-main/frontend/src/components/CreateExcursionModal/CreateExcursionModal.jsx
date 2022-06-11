import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ExcursionTextForm from '../ExcursionTextForm/ExcursionTextForm';
import DateForm from '../DateForm/DateForm';
import moment from 'moment';
import { modalStyles } from './styles';
import { URL_HOST } from "../../urlHost";
import axios from "axios";
import ParkSearch from '../ParkSearch/ParkSearch';
import useAuth from '../../hooks/useAuth';



const CreateExcursionModal = ({ open, close, placeID, setPlaceID }) => {
    const [excursion, setExcursion] = useState('');
    const [date, setDate] = useState(moment(new Date()).format("DD/MM/YYYY"));
    const [user, token] = useAuth();
    const navigate = useNavigate();

    

    // const modalStyles = {
    //     // inputFields: {
    //     //     display: 'flex',
    //     //     flexDirection: 'column',
    //     //     marginTop: '20px',
    //     //     marginBottom: '15px',
    //     //     '.MuiFormControl-root': {
    //     //         marginBottom: '20px',
    //     //     },
    //     // },
    // };

    const onSubmit = async () => {
        console.log( date.toISOString().split('T')[0] )
        try {
            await axios.post(
              `${URL_HOST}/api/excursion/`,
              { user: user.username, place_id: placeID, text: excursion, date: new date.toISOString().split('T')[0] },
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
            <Box sx={modalStyles.wrapper}>
                <Typography
                    sx={modalStyles.newExcursionText}
                    variant="h6"
                    component="h2"
                >
                   Create Excursion
                </Typography>
                <Typography sx={{ mt: 2, color: 'white' }}>
                    Fill out inputs and hit 'submit' button.
                </Typography>
                <ParkSearch 
                    parkName={placeID} 
                    setPlaceID={setPlaceID}
                />
                <Box sx={modalStyles.ExcursionTextForm}>
                <ExcursionTextForm
                    excursion={excursion}
                    setExcursion={setExcursion}
                />
                </Box>
                <Box>
                <DateForm sx={{width:'300px'}}
                    date={date}
                    setDate={setDate}
                />
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button sx={modalStyles.buttons}
                        variant="contained"
                        onClick={onSubmit}
                    >
                        Submit
                    </Button>
                    <Button sx={{background:'white'}}onClick={close}>Cancel</Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default CreateExcursionModal;