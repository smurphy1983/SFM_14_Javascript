
var tableData = data;
var tbody = d3.select("tbody");


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
    var filterCity = d3.select("#cityname").property("value");
    
    if (filterDate != "" || filterCity != "") {
          var filteredData = tableData.filter(sighting => sighting.datetime === filterDate).filter(sighting => sighting.datetime === filterCity);
          init(filteredData);
    } else {init(tableData);}


    

    // var filterElementCity = ;
    // var filterValueCity = filterElementCity.property("value");

    // if (filterValueCity != "") {
    //   var filteredData = tableData.filter(sighting => sighting.datetime === filterValueCity);

    //   filteredData.forEach(function(sighting) {
    //       console.log(sighting);
    //       var row = tbody.append("tr");
    //       Object.entries(sighting).forEach(function([key, value]) {
    //           console.log(key, value);
    //           var cell = tbody.append("td");
    //           cell.text(value);
    //       });

    //   });
    // } else {init();}


})

init(tableData);   

