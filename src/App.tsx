import React from 'react';
import Header from './Components/Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const theme = createTheme({
  typography:{
    fontFamily: "cursive"
  }
})


function App() {
  return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
      <Header/>
  </ThemeProvider>
  );
}

export default App;
