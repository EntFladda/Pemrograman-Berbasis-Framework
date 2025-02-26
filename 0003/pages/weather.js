import { useState } from 'react';

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
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather && (
        <div>
          <h2>{weather.city.name}</h2>
          <p>Temperature: {weather.list[0].main.temp}°C</p>
          <p>Weather: {weather.list[0].weather[0].description}</p>
        </div>
      )}
    </div>
  );
}