var ColumnChart = function(title, dataIn, categories, container) {
    var chart = new Highcharts.Chart({
      chart: {
        type: "column",
        renderTo: container
      },
      title: {
        text: title
      },
      series: [{
        data: dataIn
      }],
      xAxis: {
        categories: categories
        },
    });

}

var drawPopulationChart = function(countriesArray){
  var categories = countriesArray.map(function(country){
    return country.name;
  })

  var population = countriesArray.map(function(country){
    return country.population;
  })

  var container = document.getElementById("chart-population");

  new ColumnChart("Countries by population", population, categories, container);
}
