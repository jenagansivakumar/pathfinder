import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city: string) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                q: city,
                appid: API_KEY,
                units: "metric"
            }
        });
        console.log("Weather data: ", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
};

// Sample call for testing
getWeather("London");
