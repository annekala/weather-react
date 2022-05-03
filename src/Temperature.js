import axios from "axios";

export default function Temperature() {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp} °C`
    );
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b277a23ccaf8535566ba9c0db7d5a42b&units=metric`;
  axios.get(url).then(showTemperature);
}
