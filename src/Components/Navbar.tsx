// src/Navbar.tsx
import React from 'react';
import { AppBar, Toolbar, Box, Button } from '@mui/material';

export default function Navbar() {
  const pages: string[] = ["Home", "Music", "Coding", "Languages", "Fitness"];

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#636365" }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between' }}>
            {pages.map((page) => (
              <Button
                variant="contained"
                key={page}
                href={page === "Home" ? "/":`/${(page)}`}
                // href={`/${encodeURIComponent(page)}`}

                sx={{
                  bgcolor: "#000000",
                  marginLeft: 2,
                  marginRight: 2,
                  boxShadow: 'none',
                  '&:hover': {
                    bgcolor: "#444444",
                    boxShadow: 'none', 
                  },
                  '&:active': {
                    boxShadow: 'none', 
                  },
                  '&:focus': {
                    boxShadow: 'none', 
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
