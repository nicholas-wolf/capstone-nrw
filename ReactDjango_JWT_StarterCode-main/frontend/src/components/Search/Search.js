import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';

export default function SelectAutoWidth(props) {
  const [parks, setParks] = React.useState('');

  const handleChange = (event) => {
    setParks(event.target.value);
  };
  React.useEffect(() => {
    fetchResults()
  }, [])
  
  const fetchResults = async (searchTerm) => {
    try {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/nearbyParks/?location=33.8880008 -84.552061`);
        console.log(response)
        setParks(response.parks)
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Parks</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={"Select Park"}
          onChange={handleChange}
          autoWidth
          label="Parks"
        >
          {parks ? parks.map((park) => {
            return  <MenuItem value={park}/>
          }) : <div>No Parks are located near you. :(</div>}

        </Select>
      </FormControl>
    </div>
  );
}
