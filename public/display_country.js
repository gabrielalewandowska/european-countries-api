var clearDisplay = function(){
  var display = document.getElementById("country-info");
  display.innerHTML = "";
}

var getArea = function(country){
  var countryDiv = document.getElementById("country-info");
  var area = document.createElement("p");
  area.innerText = "Area: " + country.area;
  countryDiv.appendChild(area);
}

var getCurrency = function(country){
  var countryDiv = document.getElementById("country-info");
  var currency = document.createElement("p");
  currency.innerText = "Currency: " + country.currencies[0].name;
  countryDiv.appendChild(currency);
}

var getCapital = function(country){
  var countryDiv = document.getElementById("country-info");
  var capital = document.createElement("p");
  capital.innerText = "Capital city: " + country.capital;
  countryDiv.appendChild(capital);
}

var getPopulation = function(country){
  var countryDiv = document.getElementById("country-info");
  var population = document.createElement("p");
  population.innerText = "Population: " + country.population;
  countryDiv.appendChild(population);
}

var getFlag = function(country){
  var countryDiv = document.getElementById("country-info");
  var flag = document.createElement("img");
  flag.src = country.flag;
  countryDiv.appendChild(flag);
}

var getCountryNameHeadline = function(country){
  var countryDiv = document.getElementById("country-info");
  var nameHeadline = document.createElement("h2");
  nameHeadline.innerText = country.name;
  countryDiv.appendChild(nameHeadline);
}

var getLanguages = function(country){
  var countryDiv = document.getElementById("country-info");
  var languages = document.createElement("p");
  switch(country.languages.length){
    case 1:
      languages.innerText = "Official language: " + country.languages[0].name;
      break;
    case 2:
      languages.innerText = "Official languages: " + country.languages[0].name + ", " + country.languages[1].name;
      break;
    case 3:
      languages.innerText = "Official languages: " + country.languages[0].name + ", " + country.languages[1].name + ", " + country.languages[2].name;
      break;
    case 4:
      languages.innerText = "Official languages: " + country.languages[0].name + ", " + country.languages[1].name + ", " + country.languages[2].name + ", " + country.languages[3].name;
      break;
  }
  countryDiv.appendChild(languages);
}

var renderMap = function(lat, lng){
  var coordinates = {lat: lat, lng: lng}
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: coordinates
  });
  var marker = new google.maps.Marker({
    position: coordinates,
    map: map
  });
}

var displayCountry = function(){
  clearDisplay();
  for(var country of europeanCountries){
    if(country.name === this.value){
      getCountryNameHeadline(country);
      getFlag(country);
      getPopulation(country);
      getArea(country);
      getCapital(country);
      getLanguages(country);
      getCurrency(country);
      renderMap(country.latlng[0], country.latlng[1]);
    }
  }
}
