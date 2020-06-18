const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const townData = jsonObject['townData']; 

      // making a variable for each element
  for (let i = 0; i < townData.length; i++ ) {
    let towns = document.createElement('section');
    let fullName = document.createElement('h2');
    let motto = document.createElement('p');
    let yearFounded = document.createElement('p');
    let image = document.createElement('img');
    let alt = document.createElement('alt');

      // calling each variable into the JSON Javascript
    fullName.textContent = prophets[i].name + ' ' + prophets[i].lastname;
    alt.setAttribute('alt', prophets[i].name + prophets[i].lastname + ' - ' + prophets[i].order);
    image.setAttribute('src', prophets[i].imageurl);
    bDay.textContent = "Date of Birth: " +prophets[i].birthdate;
    birth.textContent = "Place of Birth: " +prophets[i].birthplace;

      // previewing each element with its acquired information to show on the site
    card.appendChild(fullName);
    card.appendChild(alt);
    card.appendChild(bDay);
    card.appendChild(birth);
    card.appendChild(image);
    
    
    
    
    
    document.querySelector('div.cards').appendChild(card);
  }
});