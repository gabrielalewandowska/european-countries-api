var url = "https://restcountries.eu/rest/v2/all"

var makeRequest = function( url ) {
  var request = new XMLHttpRequest();
  request.open( "GET", url );
  request.addEventListener( "load", function() {
  var countries = JSON.parse( this.responseText )
  getEuropeanCountries(countries);
  })
  request.send();
}

var getEuropeanCountries = function(countriesArray){
  var europeanCountries = countriesArray.filter(function(country){
    return country.region === "Europe";
  });
  console.log(europeanCountries);
  populateCountryDropdown(europeanCountries);
  return europeanCountries;
}

var populateCountryDropdown = function(countriesArray){
  var dropdown = document.getElementById("select-country");
  for(var country of countriesArray){
    var countryOption = document.createElement("option");
    countryOption.textContent = country.name;
    dropdown.appendChild(countryOption);
  }
}

var initialize = function(){
makeRequest(url);
}

window.addEventListener("load", initialize);
