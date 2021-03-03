import React from "react";
import { getCityWeather } from "../services/openWeatherService";
import { editCity, setWeather, setError, removeError } from "../redux/actions";
import { connect } from "react-redux";

const Search = ({ city, error, dispatch }) => {
  const handleChange = (inputValue) => {
    dispatch(editCity(inputValue));
  };
  const searchCity = (e) => {
    e.preventDefault();
    getCityWeather(city)
      .then((res) => {
        dispatch(setWeather(res));
        dispatch(removeError());
      })
      .catch((error) => {
        dispatch(setError(error));
        dispatch(setWeather([]));
      });
  };
  const errorText = (error) => {
    let result = `${error.name}. ${error.message}.`;
    if (error.response.status < 500) {
      result += " The city was not found";
    }
    return result;
  };

  return (
    <div className="search">
      <form>
        <input
          onChange={(e) => handleChange(e.target.value)}
          type="text"
          name="city"
          placeholder="Enter city name"
          value={city}
        />
        <button type="submit" onClick={(e) => searchCity(e)}>
          Search
        </button>
      </form>

      {error !== false && <div className="error">{`${errorText(error)}`}</div>}
    </div>
  );
};
const mapStateToProps = ({ city, error, weather }) => ({
  city,
  error,
  weather,
});
export default connect(mapStateToProps)(Search);
