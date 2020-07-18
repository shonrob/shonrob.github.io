const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json(); 
  })
  .then(function (jsonObject) {

       // temporary checking for valid response and data parsing

    const townsdata = jsonObject['towns']; 
    const place = townsdata.filter(function(towndata) {return towndata.name == "Fish Haven"});
   
      // making a variable for each element
 
    let eventful = document.createElement('div');
    let header = document.createElement('h4');
    let occasion = document.createElement('p');
  

      // calling each variable into the JSON Javascript
      header.textContent = "Upcoming Events ";
      
      occasion.innerHTML =  place[0].events[0] + '<hr>' + place[0].events[1] + '<hr>' + place[0].events[2];
  
      // previewing each element with its acquired information to show on the site
  
      eventful.appendChild(header);
      eventful.appendChild(occasion);
   
    
    document.querySelector('div.communityEvent').appendChild(eventful);
  
});