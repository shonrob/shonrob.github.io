 // Weather Summary
 const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&APPID=133721f6e52b26f1b93ecfdf9e059427&units=imperial';
 fetch(apiURL)
 .then((response) => response.json())
 .then((jsObject) => {
   // console.log(jsObject); // temporary checking for valid response and data parsing
  
     document.getElementById('view').textContent = jsObject.weather[0].description;
     document.getElementById('current-temp').textContent = jsObject.main.temp;
     document.getElementById('high').textContent = jsObject.main.temp_max;
     document.getElementById('humidity').textContent = jsObject.main.humidity;
     document.getElementById('windySpeed').textContent = jsObject.wind.speed;
 
 }); 

     // 5 day Forecast
     const apiForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&APPID=133721f6e52b26f1b93ecfdf9e059427&units=imperial';
     fetch(apiForecastURL)
     .then((response) => response.json())
     .then((jsObject) => {
         
 
         const fiveDayForecast = jsObject.list.filter(x => x.dt_txt.includes(`18:00:00`));
         // console.log(jsObject);
         let day =0;
         const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
       
 
     fiveDayForecast.forEach(forecast => {
         let week = new Date(forecast.dt_txt);
         document.getElementById(`weekDays${day+1}`).textContent = weekDays[week.getDay()];
         document.getElementById(`forecast${day+1}`).textContent = forecast.main.temp.toFixed(0);
         
 
         const imagesrc = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';  
         const desc = forecast.weather[0].description; 
          
         document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc); 
         document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
         day++;
         
     })
     });