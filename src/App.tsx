import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MusicPage from "./pages/MusicPage";
import CodingPage from "./pages/CodingPage";
import LanguagesPage from "./pages/LanguagesPage";
import FitnessPage from "./pages/FitnessPage";
import { Container } from "@mui/material";

const themeLight = createTheme({
  palette: {
    background: {
      default: "#b5d9ff"
    },
   
  }
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#636365"
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
    <Container >
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <Button onClick={() => setLight((prev) => !prev)}>Toggle Theme</Button>
      <RouterProvider router={router} />
    </ThemeProvider>
    </Container>
  );
};

export default App