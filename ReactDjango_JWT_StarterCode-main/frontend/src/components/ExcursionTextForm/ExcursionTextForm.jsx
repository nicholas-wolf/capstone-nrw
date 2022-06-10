import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Box } from '@material-ui/core';
import FormControl from '@mui/material/FormControl';



const CssTextField = styled(TextField)({
  '& .css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input': {
    color: 'white',
  },
  '& label.Mui-focused': {
    color: 'white',
  },
  '& label.MuiFormLabel-root': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiInput-root': {
    Color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});


export default function ExcursionTextForm({ excursion, setExcursion}) {
    return (
    <Box sx={{ input: { color: 'white' } }}
        component="form"
        noValidate
        autoComplete="off"
    >
        <FormControl sx={{ width: '435px', marginBottom: '1rem', marginTop: '1rem', color: 'white' }}
            variant="standard">
        
        <CssTextField sx={{ input: { color: 'white'  } }}
            label="Excursion" 
            excursion={excursion}
            multiline
            minRows={4}
            onChange={(event) => {setExcursion(event.target.value)}}
            />     
            </FormControl>     
    </Box>
    );
} 