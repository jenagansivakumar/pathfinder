import React from 'react';
import { AppBar, Toolbar, Box, Button, createTheme } from '@mui/material';


export default function Navbar() {
  const pages: string[] = ["Home", "Music", "Coding", "Languages", "Fitness"];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between' }}>
            {pages.map((page) => (
              <Button  variant='contained' key={page} sx={{ color: 'white', backgroundColor: 'white',  marginLeft: 16, marginRight: 11}} disableRipple>
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
