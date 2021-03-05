import React from "react";
import { getCityWeather } from "../services/openWeatherService";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

const Search = ({
  city,
  error,
  onEditCity,
  onSetWeather,
  onRemoveError,
  onSetError,
}) => {
  const searchCity = (e) => {
    e.preventDefault();
    getCityWeather(city)
      .then((res) => {
        onSetWeather(res);
        onRemoveError();
      })
      .catch((error) => {
        onSetError(error);
        onSetWeather([]);
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
          onChange={(e) => onEditCity(e.target.value)}
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

const mapDispatchToProps = (dispatch) => {
  return {
    onEditCity: (city) => dispatch({ type: actionTypes.SET_CITY, city }),
    onSetWeather: (weather) =>
      dispatch({ type: actionTypes.SET_WEATHER, weather }),
    onSetError: (error) => dispatch({ type: actionTypes.SET_ERROR, error }),
    onRemoveError: () => dispatch({ type: actionTypes.REMOVE_ERROR }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
