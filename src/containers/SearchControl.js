import React from "react";
import Search from "../components/Search";
import { connect } from "react-redux";
import { getCityWeather } from "../services/openWeatherService";
import * as actionTypes from "../store/actions";

const SearchControl = ({
  city,
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

  return (
    <Search
      searchCity={(e) => searchCity(e)}
      onEditCity={(city) => onEditCity(city)}
    />
  );
};

const mapStateToProps = ({ city }) => ({ city });

const mapDispatchToProps = (dispatch) => {
  return {
    onEditCity: (city) => dispatch({ type: actionTypes.SET_CITY, city }),
    onSetWeather: (weather) =>
      dispatch({ type: actionTypes.SET_WEATHER, weather }),
    onSetError: (error) => dispatch({ type: actionTypes.SET_ERROR, error }),
    onRemoveError: () => dispatch({ type: actionTypes.REMOVE_ERROR }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchControl);
