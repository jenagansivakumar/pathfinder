import React, { useState, FormEvent } from 'react';
import { Paper, TextField, Button, Typography } from '@mui/material';

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

  const fetchWeatherData = (cityName: string) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    if (!apiKey) {
      setError('API key is missing');
      return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
    console.log(`API URL: ${apiUrl}`);
    console.log(`API Key: ${apiKey}`);

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error("Error fetching weather data");
        }
        return response.json();
      })
      .then((data: WeatherData) => {
        setWeatherData(data);
        setError(null); // Clear any previous error
      })
      .catch(error => setError(error.message));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (city.trim() === '') {
      setError('City name cannot be empty');
      return;
    }
    fetchWeatherData(city);
  };

  const kelvinToCelsius = (kelvin: number) :number =>{
    const unroundedCelsius = kelvin - 273.15
    return Math.round(unroundedCelsius)
  }

  return (
    <>
      <Paper>
        <form onSubmit={handleSubmit}>
          <Typography variant='h6'>City Name</Typography>
          <TextField fullWidth value={city} onChange={(e) => setCity(e.target.value)} />
          <Button type='submit'>Submit</Button>
        </form>
        {error && (
          <Typography color="error">
            Error fetching weather data: {error}
          </Typography>
        )}
        {weatherData && weatherData.list.length > 0 && (
          <>
            <Typography variant='h6'>Weather Data</Typography>
            <Typography>Temperature: {kelvinToCelsius(weatherData.list[0].main.temp)}°C</Typography>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}.png`}
              alt='weather icon'
            />
          </>
        )}
      </Paper>
    </>
  );
};
