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

  var statsBtn = document.getElementById("btn-stats");
  statsBtn.addEventListener("click", function(){
    clearDisplay();
    drawPopulationChart(countriesArray);
    drawPieChart(countriesArray);
    renderMap(54.525961, 15.255119, 3);
  });
}






window.addEventListener("load", makeRequest);
