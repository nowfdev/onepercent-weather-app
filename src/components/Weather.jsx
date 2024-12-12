import "./Weather.css";
import search_icon from "../../src/assets/search.png";
import clear_icon from "../../src/assets/clear.png";
import cloud_icon from "../../src/assets/cloud.png";
import drizzle_icon from "../../src/assets/drizzle.png";
import humidity_icon from "../../src/assets/humidity.png";
import rain_icon from "../../src/assets/rain.png";
import snow_icon from "../../src/assets/snow.png";
import wind_icon from "../../src/assets/wind.png";
import { useEffect, useRef, useState } from "react";

const key = "36549a76634deb127a67a2a87644767a";

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);
  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": drizzle_icon,
    "10n": drizzle_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };
  const search = async (city) => {
    if (city === "") {
      alert("PLEASE INPUT CITY NAME!");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;
      const respond = await fetch(url);
      const data = await respond.json();
      console.log(data);
      if (!respond.ok) {
        alert(data.message);
        return;
      }

      const icon = allIcons[data.weather[0].icon] || clear_icon;

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temp: data.main.temp,
        tempFeelsLike: data.main.feels_like,
        location: data.name,
        icon: icon,
      });
    } catch (e) {
      setWeatherData(false);
      console.error(e);
    }
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Search" />
        <img
          src={search_icon}
          alt=""
          onClick={() => search(inputRef.current.value)}
        />
      </div>

      {weatherData ? (
        <>
          <img src={weatherData.icon} className="weather-icon" alt="" />
          <p className="temper">{weatherData.temp}°C</p>
          <p className="feels-like">
            Feels Like: {weatherData.tempFeelsLike}°C
          </p>
          <p className="location">{weatherData.location}</p>
          <div className="weather-data">
            <div className="col">
              <img src={humidity_icon} alt="" />
              <div>
                <p>{weatherData.humidity}%</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={wind_icon} alt="" />
              <div>
                <p>{weatherData.windSpeed} Km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Weather;
