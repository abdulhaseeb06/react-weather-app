import axios from "axios";

export default function getWeatherData(city) {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d279b29ee001e673d96d9aad87f893c1`
    )
    .then(function (resp) {
      console.log(resp);
    })
    .catch(function () {});
}
