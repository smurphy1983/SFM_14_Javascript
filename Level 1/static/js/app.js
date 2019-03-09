// from data.js
var tableData = data;
var tbody = d3.select("tbody");

console.log(tableData);
// YOUR CODE HERE!



function init(tableData) {
  tableData.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
      console.log(key, value);
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
}

var filter = d3.select("#filter-btn");

filter.on("click", function() {
    d3.event.preventDefault();
    d3.selectAll("td").remove();
    var filterDate = d3.select("#datetime").property("value");
    var filteredData = tableData.filter(sighting => sighting.datetime === filterDate);
    init(filteredData);

    

    });
init(tableData);



   

