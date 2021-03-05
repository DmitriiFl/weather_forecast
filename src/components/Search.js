import React from "react";
import { connect } from "react-redux";

const Search = ({ city, error, onEditCity, searchCity }) => {
  const errorText = (error) => {
    let result = `${error.name}. ${error.message}.`;
    if (error.response.status < 500) {
      result += " The city was not found";
    } else if (error.response.status >= 500) {
      result += " Some server problems. Try again later";
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
const mapStateToProps = ({ city, error }, { searchCity, onEditCity }) => ({
  city,
  error,
  searchCity,
  onEditCity,
});

export default connect(mapStateToProps)(Search);
