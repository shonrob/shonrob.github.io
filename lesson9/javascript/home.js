const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

     console.table(jsonObject);  // temporary checking for valid response and data parsing

    const townsdata = jsonObject['towns']; 
    const place = townsdata.filter(function(towndata) {return towndata.name == "Preston" || towndata.name == "Fish Haven" || towndata.name == "Soda Springs"});

      // making a variable for each element
  place.forEach(towndata => {
    let community = document.createElement('section');
    let city = document.createElement('h2');
    let thought = document.createElement('p');
    let discovered = document.createElement('p');
    let pop = document.createElement('p');
    let rain = document.createElement('p');
    let image = document.createElement('img');
    let alt = document.createElement('alt');

      // calling each variable into the JSON Javascript
    city.textContent = towndata.name;
    thought.innerHTML = towndata.motto;
    discovered.innerHTML = "Founded: " +towndata.yearFounded ;
    pop.innerHTML = "Population: " +towndata.currentPopulation;
    rain.innerHTML = "Average Annual Rainfall: " +towndata.averageRainfall;
    image.setAttribute('src', '/lesson9/images/' + towndata.photo);
    alt.setAttribute('alt', towndata.name);

      // previewing each element with its acquired information to show on the site
    community.appendChild(city);
    community.appendChild(thought);
    community.appendChild(discovered);
    community.appendChild(pop);
    community.appendChild(rain);
    community.appendChild(image);
    community.appendChild(alt);
    
    document.querySelector('div.community').appendChild(community);
  })
});
