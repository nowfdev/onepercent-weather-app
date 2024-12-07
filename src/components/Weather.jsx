import "./Weather.css";
import search_icon from "../../src/assets/search.png";
import clear_icon from "../../src/assets/clear.png";
import cloud_icon from "../../src/assets/cloud.png";
import drizzle_icon from "../../src/assets/drizzle.png";
import humidity_icon from "../../src/assets/humidity.png";
import rain_icon from "../../src/assets/rain.png";
import snow_icon from "../../src/assets/snow.png";
import wind_icon from "../../src/assets/wind.png";

const Weather = () => {
  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Search" name="" id="" />
        <img src={search_icon} alt="" />
      </div>
      <img src={clear_icon} className="weather-icon" alt="" />
      <p className="temper">25C</p>
      <p className="location">Ho CHi Minh City</p>
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
// Test commit
export default Weather;
