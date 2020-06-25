    // 5 day Forecast
    const apiForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=133721f6e52b26f1b93ecfdf9e059427&units=imperial';
    fetch(apiForecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
       console.log(jsObject); 
    });
    /*   
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
      const desc = jsObject.weather[0].description;  // note how we reference the weather array
      document.getElementById('imagesrc').textContent = imagesrc;  
      document.getElementById('icon').setAttribute('src', imagesrc); 
      document.getElementById('icon').setAttribute('alt', desc);
    
    */