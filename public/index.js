var europeanCountries = [];

var makeRequest = function() {
  var request = new XMLHttpRequest();
    request.open( "GET", "https://restcountries.eu/rest/v2/all" );
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
  var countryDiv = document.getElementById("country-info");
  for(var country of europeanCountries){
    if(country.name === this.value){
      var nameHeadline = document.createElement("h2");
      nameHeadline.innerText = country.name;
      countryDiv.appendChild(nameHeadline);

      var flag = document.createElement("img");
      flag.src = country.flag;
      countryDiv.appendChild(flag);

      var population = document.createElement("p");
      population.innerText = "Population: " + country.population;
      countryDiv.appendChild(population);

      var capital = document.createElement("p");
      capital.innerText = "Capital city: " + country.capital;
      countryDiv.appendChild(capital);

      var languages = document.createElement("p");
        if(country.languages.length === 1){
          languages.innerText = "Official language: " + country.languages[0].name;
        } else if(country.languages.length === 2){
          languages.innerText = "Official languages: " + country.languages[0].name + ", " + country.languages[1].name;
        } else {
          languages.innerText = "Official languages: " + country.languages[0].name + ", " + country.languages[1].name + ", " + country.languages[2].name;
        }
      countryDiv.appendChild(languages);
    }
  }
}


window.addEventListener("load", makeRequest);
