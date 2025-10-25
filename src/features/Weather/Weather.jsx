import { useEffect, useState } from 'react';

function kelvinToCelsius(degK) {
  return (degK - 273.15).toFixed(1);
}

export function Weather() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);

    function handleGeoSuccess({coords}) {
      const lon = coords.longitude;
      const lat = coords.latitude;
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1d260c5f4897b555ae217809965ad963`
      )
        .then((res) => res.json())
        .then(setWeatherData);
    }

    function handleGeoError() {
      console.warn("Geolocation didn't work");
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const jsonData = Object.fromEntries(formData.entries());
    
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${jsonData.city},${jsonData.country}&appid=1d260c5f4897b555ae217809965ad963`
    )
      .then((res) => res.json())
      .then((d) => setWeatherData(d));
  }

  return (
    <>
      <h1>Weather</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" name="city" />

        <label htmlFor="country">Country</label>
        <select name="country" id="country">
          <option value="RO">Romania</option>
          <option value="DE">Germany</option>
          <option value="US">United States</option>
        </select>

        <button type="submit">Search</button>
      </form>

      {!weatherData && <strong>Loading ...</strong>}

      {weatherData && (
        <>
          <p><strong>The weather in {weatherData.name} is {weatherData.weather[0].main}!</strong></p>
          <output>{kelvinToCelsius(weatherData.main.temp)}&deg;C</output>
          <img width="50" src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
        </>
      )}
    </>
  );
}
