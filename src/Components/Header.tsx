import React from 'react';
import { AppBar, Toolbar, Box, Button, createTheme } from '@mui/material';

const theme =createTheme({
  typography:{
    fontFamily: "Roboto, sanserif"
  }
})

export default function Header() {
  const pages: string[] = ["Home", "Music", "Coding", "Languages", "Fitness"];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between' }}>
            {pages.map((page) => (
              <Button  variant='contained' key={page} sx={{ color: 'white', backgroundColor: 'blue', letterSpacing: 6, fontFamily:"Lora, serif" }} disableRipple>
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
