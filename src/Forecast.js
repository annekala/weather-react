import React from "react";

export default function Forecast() {
  return (
    <div>
      <hr />
      <div className="weather-forecast" id="forecast">
        <div className="row">
          <div className="col-2">
            <div className="date-forecast">Sun</div>

            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt=""
              width="42"
            />
            <div class="temperature-forecast">
              <span class="temperature-forecast-min">12°</span>/
              <span class="temperature-forecast-max">18°</span>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
}
