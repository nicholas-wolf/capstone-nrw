
import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Navigate, Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import img2 from '../../assets/RC.svg'
import Search from "../Search/Search"
import "./SearchBar.css";


export default function SearchBar() {
  const { logoutUser, user } = useContext(AuthContext);

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
                  <img className="searchBarImage" src={img2} alt=''/>
                </Box>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                  <Link to="/" style={{ textDecoration: "none"}}>
                    <b className="searchBarTitle">Ride Buddy</b>
                  </Link>
                </Typography>
                <Search/>
                {user ? (
                    <button className="searchBarLogoutButton" onClick={logoutUser}>Logout</button>
                  ) : (
                    <button onClick={() => Navigate("/login")}>Login</button>
                )}
              </Toolbar>
          </AppBar>
        </Box>
      )
}