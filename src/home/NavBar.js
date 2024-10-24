import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography } from '@mui/material';

export const NavBar= ()=> {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#000000' }}>
    <Toolbar>
      <Typography variant="h6">
        Registry APP
      </Typography>

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
          }}
          sx={{
            input: { color: 'white' }, // Text color inside the search field
            fieldset: { borderColor: 'white' }, // Border color of the search field
            '& .MuiOutlinedInput-root:hover fieldset': {
              borderColor: 'gray',
            },
          }}
        />
      </Box>
    </Toolbar>
  </AppBar>
  );
}


export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      sx={{
        background: 'black',
        color: 'white',
        textAlign: 'center',
        padding: '5px',
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Typography variant="body1">Mazhar Ibna Zahur</Typography>
      <Typography variant="body2">&copy; {currentYear}</Typography>
    </Box>
  );
};


