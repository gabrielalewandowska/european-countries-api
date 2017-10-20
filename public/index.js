var url = "https://restcountries.eu/rest/v2/all"

var makeRequest = function( url ) {
  var request = new XMLHttpRequest();
  request.open( "GET", url );
  request.addEventListener( "load", function() {
  var countries = JSON.parse( this.responseText )
  console.log(countries);
  })
  request.send();
}

var initialize = function(){
makeRequest(url);
}

window.addEventListener("load", initialize);
