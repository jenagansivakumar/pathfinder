import React, { useEffect } from 'react';
import { Paper, TextField, Button, Typography } from '@mui/material';
import { useState } from 'react';



interface WeatherData {
    list: {
        main: {
            temp: number
        }
        weather: {
            icon: string
        }[]
    }[]
}
export const WeatherApp: React.FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    const fetchWeatherData = (cityName: string) => {
        const apiKey = process.env.REACT_APP_API_KEY
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`)
        .then(response => {
            if(!response.ok){
                throw new Error("Error fetching weather data")
            }
            return response.json()
        })
        .then((data: WeatherData) => setWeatherData(data))

    }
  
  const handleSubmit = (event: React.MouseEvent) =>{
    event.preventDefault()
    fetchWeatherData()
  }

  return (
    <>
      <Paper>
        <form>
          <Typography variant='h6'>City Name</Typography>
          <TextField fullWidth />
          <Button>Submit</Button>
        </form>
        <img src='' alt='weather icon' />
      </Paper>
    </>
  );
};
