const tempDiv = document.getElementById("temperature");
const weatherGraphic = document.getElementById("weatherGraphic");
const weatherCondition = document.getElementById("condition");

function changeText(text) {
    tempDiv.innerHTML = text;
}

function changeGraphic(weather) {
    $(".graphic").attr("src", "../weatherGraphics/" + weather + ".png");
}


let key = '61a5bfd15f7988ba17e22c7fb80dff28';

const weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=Brooklyn&units=imperial&appid=' + key;

function getWeatherData(){
    let request = new XMLHttpRequest();
    let currentTime = new Date();
    request.open('GET',weatherAPI,true);
    console.log("Json Updated" + ", currentTime: " + currentTime.getHours() + ":" + currentTime.getMinutes());
    request.send();
    request.onload = function(){
    let weatherData = JSON.parse(this.response);
    let weatherTemp = weatherData.main.temp;
    let weatherConditionTemp = weatherData.weather[0].main;
    changeText(Math.round(weatherTemp) + "°f");
    changeGraphic(weatherConditionTemp);
    weatherCondition.innerHTML = weatherConditionTemp;
    }
}

// On document ready, call initial getWeatherData
$(document).ready(console.log("Ready"), getWeatherData());
setInterval(getWeatherData, 10000);
