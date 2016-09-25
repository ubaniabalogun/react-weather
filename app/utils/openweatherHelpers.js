var axios = require('axios');
var openweatherSecrets = require('../secrets/openweatherSecrets');

var api = "http://api.openweathermap.org/data/2.5/";
var weather = "weather";
var forecast = "forecast/daily";
var id = openweatherSecrets.id;
var currentWeatherEp = api + weather + "?APPID=" + id + "&type=accurate";
var forecastEp = api + forecast + "?APPID=" + id + "&type=accurate&cnt=5&units=imperial";

function getCurrentWeather(location){
  return axios.get(currentWeatherEp + "&q=" + location);
}

function getForecast(location){
  return axios.get(forecastEp + "&q=" + location);
}


var openweatherHelpers = {
  getCurrentWeather: getCurrentWeather,
  getForecast: getForecast
}

module.exports = openweatherHelpers;
