import React from "react";
import "./App.css";
import Chart from "./components/Chart";
import { connect } from "react-redux";
import SearchControl from "./containers/SearchControl";

function App({ weather }) {
  return (
    <div className="container">
      <SearchControl />
      {weather.length > 0 && <Chart />}
    </div>
  );
}
const mapStateToProps = ({ weather }) => ({ weather });
export default connect(mapStateToProps)(App);
