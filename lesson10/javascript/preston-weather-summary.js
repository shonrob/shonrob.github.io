 // Weather Summary
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=133721f6e52b26f1b93ecfdf9e059427&units=imperial';
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
   console.log(jsObject); // temporary checking for valid response and data parsing
 
    document.getElementById('view').textContent = jsObject.weather.description;
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    document.getElementById('high').textContent = jsObject.main.temp_max;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windySpeed').textContent = jsObject.wind.speed;

}); 


