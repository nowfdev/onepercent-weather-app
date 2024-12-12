import "./Weather.css";
import search_icon from "../../src/assets/search.png";
import clear_icon from "../../src/assets/clear.png";
import cloud_icon from "../../src/assets/cloud.png";
import drizzle_icon from "../../src/assets/drizzle.png";
import humidity_icon from "../../src/assets/humidity.png";
import rain_icon from "../../src/assets/rain.png";
import snow_icon from "../../src/assets/snow.png";
import wind_icon from "../../src/assets/wind.png";
import { useEffect } from "react";

const key = "36549a76634deb127a67a2a87644767a";

const Weather = () => {
  const search = async () => {
    try {
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${key}`;

      const respond = await fetch(url);
      const data = await respond.json();
      console.log(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Search" name="" id="" />
        <img src={search_icon} alt="" />
      </div>
      <img src={clear_icon} className="weather-icon" alt="" />
      <p className="temper">25C</p>
      <p className="location">Ho Chi Minh City</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="" />
          <div>
            <p>91%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="" />
          <div>
            <p>10 Km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};
// Dump commit
// Temp commit :(
// Temp commit :(
export default Weather;
