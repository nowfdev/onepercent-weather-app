import "./Weather.css";
import search_icon from "../../src/assets/search.png";
const Weather = () => {
  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Search" name="" id="" />
        <img src={search_icon} alt="" />
      </div>
      <div className="container">
        <div className="image">image</div>
        <div className="degree">degree</div>
        <div className="location">location</div>
      </div>
    </div>
  );
};
// Test commit
export default Weather;
