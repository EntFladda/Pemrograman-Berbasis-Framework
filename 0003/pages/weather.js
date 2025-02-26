import { useState } from 'react';
import styles from './Weather.module.css';

export default function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    setError(null);
    setWeather(null);

    try {
      const response = await fetch(`/api/weather?city=${city}`);
      const data = await response.json();

      if (response.ok) {
        setWeather(data);
      } else {
        console.error('Error response from API:', data);
        setError(data.error);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Failed to fetch weather data');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className={styles.input}
      />
      <button onClick={fetchWeather} className={styles.button}>Get Weather</button>

      {error && <p className={styles.error}>{error}</p>}
      {weather && (
        <div className={styles.weatherInfo}>
          <h2>{weather.city.name}</h2>
          <p>Temperature: {weather.list[0].main.temp}°C</p>
          <p>Weather: {weather.list[0].weather[0].description}</p>
        </div>
      )}
    </div>
  );
}