import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Navbar from "./Components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import MusicPage from "./Pages/MusicPage";
import CodingPage from "./Pages/CodingPage";
import LanguagesPage from "./Pages/LanguagesPage";
import FitnessPage from "./Pages/FitnessPage";
import { Container } from "@mui/material";

const themeLight = createTheme({
  palette: {
    background: {
      default: "#e4f0e2"
    },
   
  }
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#b5d9ff"
    },
   
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home /> 
  },
  {
    path: "/music",
    element: <MusicPage /> 
  }, 
  {
    path: "/coding",
    element: <CodingPage /> 
  },
  {
    path: "/languages",
    element: <LanguagesPage /> 
  },
  {
    path: "/fitness",
    element: <FitnessPage /> 
  }
])

const App = () => {
  const [light, setLight] = React.useState(true);
  return (
    <Container>
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <RouterProvider router={router} />
      <Button onClick={() => setLight((prev) => !prev)}>Toggle Theme</Button>
    </ThemeProvider>
    </Container>
  );
};

export default App