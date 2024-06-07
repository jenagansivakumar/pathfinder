// src/styles/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#b5d9ff', // Set your desired background color here
    },
  },
  typography: {
    fontFamily: [
      '"Alfa Slab One"',
      'sans-serif'
    ].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#f0f0f0', // Ensure the body background color matches the theme background color
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Alfa Slab One", sans-serif',
        },
      },
    },
  },
});

export default theme;
