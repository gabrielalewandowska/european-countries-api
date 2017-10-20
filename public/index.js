var europeanCountries = [];

var makeRequest = function() {
  var request = new XMLHttpRequest();
    request.open( "GET", "https://restcountries.eu/rest/v2/all");
    request.addEventListener( "load", function() {
    var countries = JSON.parse( this.responseText )
      getEuropeanCountries(countries);
  })
  request.send();
}

var getEuropeanCountries = function(countriesArray){
  europeanCountries = countriesArray.filter(function(country){
    return country.region === "Europe";
  });
    console.log(europeanCountries);
  populateCountryDropdown(europeanCountries);
  return europeanCountries;
}

var populateCountryDropdown = function(countriesArray){
  var countryDropdown = document.getElementById("select-country");
  for(var country of countriesArray){
    var countryOption = document.createElement("option");
    countryOption.textContent = country.name;
    countryDropdown.appendChild(countryOption);
  }
  countryDropdown.addEventListener("change", displayCountry);
}


var displayCountry = function(){
  for(var country of europeanCountries){
    if(country.name === this.value){
      getCountryNameHeadline(country);
      getFlag(country);
      getPopulation(country);
      getCapital(country);
      getLanguages(country);
      getCurrency(country);
    }
  }
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


window.addEventListener("load", makeRequest);
