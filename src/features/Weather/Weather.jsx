import { useEffect, useState } from 'react';

function kelvinToCelsius(degK) {
  return (degK - 273.15).toFixed(1);
}

export function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [inputValues, setInputValues] = useState({
    city: '',
    country: '',
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);

    function handleGeoSuccess({ coords }) {
      const lon = coords.longitude;
      const lat = coords.latitude;
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1d260c5f4897b555ae217809965ad963`
      )
        .then((res) => res.json())
        .then((serverData) => {
          setWeatherData(serverData);
          setInputValues({
            city: serverData.name,
            country: serverData.sys.country,
          })
        });
    }

    function handleGeoError() {
      console.warn("Geolocation didn't work");
    }
  }, []);

  console.log(weatherData);

  function handleSubmit(e) {
    e.preventDefault();

    // const form = e.target;
    // const formData = new FormData(form);
    // const jsonData = Object.fromEntries(formData.entries());
    const jsonData = inputValues;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${jsonData.city},${jsonData.country}&appid=1d260c5f4897b555ae217809965ad963`
    )
      .then((res) => res.json())
      .then((d) => setWeatherData(d));
  }

  function handleInputChange(e) {
    // const inputName = e.target.name;
    // const newValues = {...inputValues};
    // newValues[inputName] = e.target.value;
    // setInputValues(newValues);
    setInputValues({...inputValues, [e.target.name]: e.target.value});
  }

  return (
    <>
      <h1>Weather</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={inputValues.city}
          onChange={handleInputChange}
        />

        <label htmlFor="country">Country</label>
        <select
          name="country"
          id="country"
          value={inputValues.country}
          onChange={handleInputChange}
        >
          <option value="RO">Romania</option>
          <option value="DE">Germany</option>
          <option value="US">United States</option>
        </select>

        <button type="submit">Search</button>
      </form>

      {!weatherData && <strong>Loading ...</strong>}

      {weatherData && (
        <>
          <p>
            <strong>
              The weather in {weatherData.name} is {weatherData.weather[0].main}
              !
            </strong>
          </p>
          <output>{kelvinToCelsius(weatherData.main.temp)}&deg;C</output>
          <img
            width="50"
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={`Weather is ${weatherData.weather[0].main} icon`}
          />
        </>
      )}
    </>
  );
}
