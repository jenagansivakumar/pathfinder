import React from 'react';
import Header from './Components/Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './Pages/Home';


const theme = createTheme({
  typography:{
    fontFamily: "Roboto Serif"
  }
})


function App() {
  return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
      <Home/> 
  </ThemeProvider>
  );
}

export default App;
