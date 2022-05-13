import React, { useState } from "react";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";
import axios from "axios";
export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div>
        <hr />
        <div className="weather-forecast">
          <div className="row">
            {forecast.map(function (dailyForecast, index) {
              if (index < 6) {
                return (
                  <div className="col-2" key={index}>
                    <ForecastDay data={dailyForecast} />
                  </div>
                );
              }
            })}
          </div>
        </div>
        <hr />
      </div>
    );
  } else {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=b277a23ccaf8535566ba9c0db7d5a42b&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
