const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=133721f6e52b26f1b93ecfdf9e059427&units=imperial';
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
   console.log(jsObject); // temporary checking for valid response and data parsing
 
  document.getElementById('current-temp').textContent = jsObject.main.temp;

  const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
  const desc = jsObject.weather[0].description;  // note how we reference the weather array
  document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
  document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
  document.getElementById('icon').setAttribute('alt', desc);
}); 


  /*Bro. Blazzard's way
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=133721f6e52b26f1b93ecfdf9e059427&units=imperial';
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
   console.log(jsObject);

const currentTemp = document.querySelector('#current-temp');
const icon = document.querySelector('img'); //grabs all images
currentTemp.textContent = jsObject.main.temp; //pulls from the html file
const imagesrc = 'https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png';
const desc = jsObject.weather[0].description;
icon.setAttribute('src', imagesrc);
icon.setAttribute('alt', desc);
}); */