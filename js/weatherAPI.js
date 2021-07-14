function changeText(text) {
    let div = document.getElementById("temperature");
    div.innerHTML = text;
}

let key = '915518152d67549280c3bbfc67ef45d2';

const weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=Brooklyn&units=imperial&appid=915518152d67549280c3bbfc67ef45d2';

function getWeatherData(){
    let request = new XMLHttpRequest();
    let currentTime = new Date();
    request.open('GET',weatherAPI,true);
    console.log("Json Updated" + ", currentTime: " + currentTime.getHours() + ":" + currentTime.getMinutes());
    request.send();
    request.onload = function(){
    let weather = JSON.parse(this.response);
    let weatherTemp = weather.main.temp;
    changeText(weatherTemp);
    }
}

// On document ready, call initial getWeatherData
$(document).ready(console.log("Ready"), getWeatherData());
setInterval(getWeatherData, 10000);
