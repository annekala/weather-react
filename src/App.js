import React from "react";
import Forecast from "./Forecast";

export default function App() {
  return (
    <body>
      <div className="container">
        <div className="meteo">
          <form className="citySearch">
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  autoFocus="on"
                  className="form-control"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="form-control btn"
                />
              </div>
            </div>
          </form>

          <div className="row">
            <div className="col-md-6">
              <h1>Paris</h1>

              <ul>
                <li className="element">Last updated: Tuesday 10:00am</li>
                <li className="element-clouds">Partly Cloudy</li>
              </ul>
            </div>

            <div className="clearfix show-temperature">
              <div className="shift-temperature">
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
                <strong>{19}</strong>
                <span className="units">
                  <a href="/" className="active">
                    °C{" "}
                  </a>
                  |
                  <a href="/" className="active">
                    °F
                  </a>
                </span>
              </div>
            </div>
            <ul className="shift">
              <li>
                Humidity: <span> 44 </span> %
              </li>
              <li>
                Wind: <span> 1 </span> mph
              </li>
            </ul>
          </div>
          <br />
          <Forecast />
        </div>

        <p className="codes">
          This Weather App was coded by Anne Kala and is {""}
          <a href="https://github.com/annekala/weather-react" target="_blank">
            Open-sourced on GitHub
          </a>
        </p>
      </div>
    </body>
  );
}
