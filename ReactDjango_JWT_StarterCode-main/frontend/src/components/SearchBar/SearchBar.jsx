
import  {useState, useContext} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';
import img2 from '../../assets/RC.svg'
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { formatRelative } from "date-fns";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";




const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: '',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'right',
  justifyContent: 'right',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const getUserData = async () => {
    try{
        let response = await axios.get(
            `http://localhost:8000/admin/authentication/user/`
        )
            return response
         } catch (error) {
                console.log(error.message);
    }
}

const fetchResults = async (searchTerm) => {
    let responseOne = getUserData()
    let location = `${responseOne.latitude} ${responseOne.longitude}`
    try{
      let response =await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json`,
        {
          params: {
            key: process.env.REACT_APP_GOOGLE_API_KEY,
            keyword: searchTerm,
            location: location,
            radius: 50000

          }
        }
      )
      return response
    } catch (error) {
      console.log(error.message);
      let response;
      response.longitude=''
      response.latitude=''
      return response;
    }

}

export default function SearchBar(props) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const { logoutUser, user } = useContext(AuthContext);


  


  function handleSubmit(event){
    event.preventDefault();
    let results = fetchResults(searchTerm)
    console.log(results)
    navigate('/results')
}

    return (
          <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed">
              <Toolbar>
              <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
              >
                  <MenuIcon />
              </IconButton>
              <Box component="span" sx={{  p: 2, border: '1px dashed grey',  display:'flex' }}>
                <img style={{maxHeight:'50px', minWidth:'100px', stroke:"white"}} src={img2} alt=''/>
              </Box>
              <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                  <Link to="/" style={{ textDecoration: "none"}}>
                    <b style={{ display:"flex", marginTop:".5rem", textAlign:"center", flexGrow: 1, alignItems:"center", justifyContent: "center", color: "white", fontSize:'2rem', fontFamily:'copperplate'}}>Ride Buddy</b>
                  </Link>
              </Typography>
              
              <Search >
                    <IconButton color="inherit" type="submit" onClick={handleSubmit}>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    </IconButton>
                  <StyledInputBase
                  name="searchQuery"
                  placeholder="Search…"
                  type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}
                  />
                
              </Search>
              <li>
                {user ? (
                  <button style={{color:"white", border:"none" }} onClick={logoutUser}>Logout</button>
                ) : (
                  <button onClick={() => Navigate("/login")}>Login</button>
                )}
              </li>
              </Toolbar>
          </AppBar>
          </Box>
    )
}
