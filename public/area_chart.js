var PieChart = function(title, data, container) {
  var chart = new Highcharts.Chart({
    chart: {
      type: "pie",
      renderTo: container
    },
    title: {
      text: title
    },
    series: [
      {
        data: data
      }
    ]
  });

};

var drawPieChart = function(countriesArray){
  countriesArray[42].area = 4000000;
  data = [];

var countryDataObject = function(name, data){
  this.name = name;
  this.y = data;
}
  for(var country of countriesArray){
    country = new countryDataObject(country.name, country.area);
    data.push(country);
  }

  var container = document.getElementById("chart-area");
   PieChart("Countries by area size", data, container);
}

  var clearAreaChart = function(){
    var container = document.getElementById("chart-area");
    container.innerHTML = "";
  }
