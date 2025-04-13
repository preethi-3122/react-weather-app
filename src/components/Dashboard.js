import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [weather, setWeather] = useState(null);
  const apiKey = '447298a9102066d8fd848342d18d1d86'; // Replace with your OpenWeatherMap API key
  const city = 'Erode';

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  if (!weather) return <div>Loading weather data...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Dashboard</h2>
      <h3>Weather in {weather.name}</h3>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default Dashboard;
