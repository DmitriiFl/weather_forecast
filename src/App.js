import React from "react";
import "./App.css";
import Search from "./components/Search";
import Chart from "./components/Chart";
import { connect } from "react-redux";

function App({ weather }) {
  return (
    <div className="container">
      <Search />
      {weather.length > 0 && <Chart />}
    </div>
  );
}
const mapStateToProps = ({ weather }) => ({ weather });
export default connect(mapStateToProps)(App);
