import React, { useState, FormEvent } from 'react';
import { Paper, TextField, Button, Typography, Box } from '@mui/material';

interface WeatherData {
  list: {
    main: {
      temp: number;
    };
    weather: {
      icon: string;
    }[];
  }[];
}

export const WeatherApp: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchWeatherData = (cityNameOrCoords: string | {latitude: number, longitude: number}) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    if (!apiKey) {
      setError('API key is missing');
      return;
    }

  let apiURL: string

  if (typeof cityNameOrCoords === "string"){
    apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityNameOrCoords}&appid=${apiKey}`
  } else {
    const {latitude, longitude} = cityNameOrCoords
    apiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
  }
  

    fetch(apiURL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Please make sure you have spelt the city correctly");
        }
        return response.json();
      })
      .then((data: WeatherData) => {
        setWeatherData(data);
        setError(null); 
      })
      .catch(error => setError(error.message));
  };

  const getLocation = () => {
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const {latitude, longitude} = position.coords
                fetchWeatherData({latitude, longitude})
            }
        )
    }
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (city.trim() === '') {
      setError('City name cannot be empty');
      return;
    }
    fetchWeatherData(city);
  };

  const kelvinToCelsius = (kelvin: number): number => {
    const unroundedCelsius = kelvin - 273.15;
    return Math.round(unroundedCelsius);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(to right, #6dd5ed, #2193b0)',
      }}
    >
      <Paper
        sx={{
          padding: 3,
          maxWidth: 500,
          margin: 'auto',
          borderRadius: 2,
          boxShadow: 5,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
        }}
      >
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h1'>Enter City Name</Typography>
          <TextField fullWidth value={city} onChange={(e) => setCity(e.target.value)} placeholder='London? Berlin? Belgrade?' />
          <Button
            type='submit'
            sx={{
              marginTop: 2,
              backgroundColor: 'primary.main',
              color: 'white',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            Submit
          </Button>
          <Button type='button' onClick={getLocation} >
            Current Location
          </Button>
        </form>
        {error && (
          <Typography sx={{ color: 'error.main', marginTop: 2 }}>
            Error fetching weather data: {error}
          </Typography>
        )}
        {weatherData && weatherData.list.length > 0 && (
          <Box sx={{ marginTop: 3 }}>
            <Typography variant='h6'>Weather Data</Typography>
            <Typography>Temperature: {kelvinToCelsius(weatherData.list[0].main.temp)}°C</Typography>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}.png`}
              alt='weather icon'
              style={{ marginTop: 10 }}
              
            />
          </Box>
        )}
      </Paper>
    </Box>
  );
};
