import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {

  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL =
    "https://api.openweathermap.org/data/2.5/weather";

  const API_KEY =
    "c7ca122980a6a4ca60d9d17eab2c56d8";

  const getWeatherInfo = async () => {

    const response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const jsonResponse = await response.json();

    const result = {
      city: jsonResponse.name,

      temp: jsonResponse.main.temp,

      tempMin: jsonResponse.main.temp_min,

      tempMax: jsonResponse.main.temp_max,

      humidity: jsonResponse.main.humidity,

      feelslike: jsonResponse.main.feels_like,

      weather: jsonResponse.weather[0].description,
    };

    return result;
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {

    event.preventDefault();

    if (!city.trim()) {
      return;
    }

    try {

      setError(false);

      const newInfo = await getWeatherInfo();

      console.log(newInfo);

      updateInfo(newInfo);

      setCity("");

    } catch (error) {

      console.log(error);

      setError(true);

    }
  };

  return (
    <div className="SearchBox">

      <form onSubmit={handleSubmit}>

        <TextField
          id="City"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />

        <Button
          variant="contained"
          type="submit"
        >
          Search
        </Button>

        {error && (
          <p className="error">
            No such place exists!
          </p>
        )}

      </form>

    </div>
  );
}