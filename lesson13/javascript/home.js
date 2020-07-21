// date in footer
var fulldate = document.lastModified;

document.getElementById("time").innerHTML = fulldate;
// end of date


// hambutton 
function toggleMenu() {
    document.getElementById("menuButton").classList.toggle("hide");
}
// end of hambutton

//5 day forecast

 // Weather Summary
 const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=3521342&APPID=133721f6e52b26f1b93ecfdf9e059427&units=imperial';
 fetch(apiURL)
 .then((response) => response.json())
 .then((jsObject) => {
    //console.log(jsObject); // temporary checking for valid response and data parsing
  
     document.getElementById('view').textContent = jsObject.weather[0].description;
     document.getElementById('current-temp').textContent = jsObject.main.temp;
     document.getElementById('humidity').textContent = jsObject.main.humidity;
 
 }); 

     // 5 day Forecast
     const apiForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=3521342&APPID=133721f6e52b26f1b93ecfdf9e059427&units=imperial';
     fetch(apiForecastURL)
     .then((response) => response.json())
     .then((jsObject) => {
         
 
         const fiveDayForecast = jsObject.list.filter(x => x.dt_txt.includes(`12:00:00`));
          //console.log(jsObject);
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

     //end of 5 day forecast

     //rental json file
     const rental = "data/rental.json"; 
     fetch(rental)
     .then((response) => response.json())
     .then((jsObject) => {
        console.log(jsObject);
    
    const rentals = jsObject['rentalOptions'];
  
    rentals.forEach(rentalOptions => {
        document.getElementById('rent').innerHTML +=
        `<tr><th> Rental Type ${rentalOptions.rentalType}</tr></th>
        <tr><td> Max People ${rentalOptions.people}</tr></td> 
        <tr><td>Reservation Price (Half Day: 3 Hours) ${rentalOptions.reservationH}</tr></td>
        <tr><td>Reservation Price (Full Day) ${rentalOptions.reservationF}</tr></td>
        <tr><td>Walk-In Price (Half Day: 3 Hours) ${rentalOptions.walkinH}</tr></td>
        <tr><td>Walk-In Price (Full Day) ${rentalOptions.walkinF}</tr></td>`
    })
});



