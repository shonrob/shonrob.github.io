const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

     //console.table(jsonObject);  // temporary checking for valid response and data parsing

    const townsdata = jsonObject['townsdata']; 
    const place = townsdata.filter(towndata => (towndata.name == "Preston", "Soda Springs", "Fish Haven"));

      // making a variable for each element
  townsdata.forEach(towndata => {
    let community = document.createElement('section');
    let city = document.createElement('h2');
    let motto = document.createElement('p');
    let discovered = document.createElement('p');
    let pop = document.createElement('p');
    let rain = document.createElement('p');
    let image = document.createElement('img');
  

      // calling each variable into the JSON Javascript
    city.textContent = towndata.name;
    motto.innerHTML = towndata.motto;
    discovered.innerHTML = "Founded: " +towndata.yearFounded ;
    pop.innerHTML = "Population: " +towndata.currentPopulation;
    rain.innerHTML = "Average Annual Rainfall: " +towndata.averageRainfall;
    image.setAttribute('src', towndata);

      // previewing each element with its acquired information to show on the site
    community.appendChild(city);
    community.appendChild(motto);
    community.appendChild(discovered);
    community.appendChild(pop);
    community.appendChild(rain);
    community.appendChild(image);
    
    
    
    
    
    document.querySelector('div.community').appendChild(community);
  
});