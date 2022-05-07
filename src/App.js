import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "FormattedDate";
import Forecast from "./Forecast";

export default function App(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  function handleResponse(response) {
    setweatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
      humidity: response.data.main.humidity,
      wind: response.data.main.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
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
                <h1>{weatherData.city}</h1>
                <ul>
                  <li className="element">
                    <FormattedDate date={weatherData.date} />
                  </li>
                  <li className="element-clouds">{weatherData.description}</li>
                </ul>
              </div>

              <div className="clearfix show-temperature">
                <div className="shift-temperature">
                  <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                  />
                  <strong>{Math.round(weatherData.temperature)}</strong>
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
                  Humidity: <span> {weatherData.humidity} </span> %
                </li>
                <li>
                  Wind: <span> {weatherData.wind} </span> mph
                </li>
              </ul>
            </div>

            <br />
            <Forecast />
          </div>
        </div>
      </body>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=b277a23ccaf8535566ba9c0db7d5a42b&units=metric`;
    axios.get(url).then(handleResponse);
    return "Loading...";
  }
}
