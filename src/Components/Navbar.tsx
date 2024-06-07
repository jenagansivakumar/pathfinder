import React from 'react';
import { AppBar, Toolbar, Box, Button, createTheme, IconButton, Typography } from '@mui/material';


export default function Navbar() {
  const pages: string[] = ["Home", "Music", "Coding", "Languages", "Fitness"];

  return (
    <>
      <AppBar position="static" sx={{bgcolor: "black"}}>
        <Toolbar>
          
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between' }}>
            {pages.map((page) => (
              <Button  variant='contained' key={page} sx={{bgcolor:"black", marginLeft: 14, marginRight:14}} >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
