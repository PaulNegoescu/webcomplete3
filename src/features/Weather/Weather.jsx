import { useEffect, useState } from 'react';

function kelvinToCelsius(degK) {
  return (degK - 273.15).toFixed(1);
}

export function Weather() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Brasov,RO&appid=1d260c5f4897b555ae217809965ad963'
    )
      .then((res) => res.json())
      .then((d) => setWeatherData(d));
  }, []);
  
  return (
    <>
      <h1>Weather</h1>
      {!weatherData && <strong>Loading ...</strong>}

      {weatherData && (
        <>
          <p><strong>The weather in Brasov is {weatherData.weather[0].main}!</strong></p>
          <output>{kelvinToCelsius(weatherData.main.temp)}&deg;C</output>
          <img width="50" src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
        </>
      )}
    </>
  );
}
