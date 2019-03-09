
var tableData = data;
var tbody = d3.select("tbody");


function init(tableData) {
  tableData.forEach(function(sighting) {
    //console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
      //console.log(key, value);
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
}






var filter = d3.select("#filter-btn");
filter.on("click", function() { 
   d3.event.preventDefault();
   d3.selectAll("td").remove()
   
   //define each filter
   var filterDate = d3.select("#datetime").property("value");
   var filterCity = d3.select("#cityname").property("value");
   var filterState = d3.select("#statename").property("value");
   var filterCountry = d3.select("#countryname").property("value");
   var filterShape = d3.select("#shapetype").property("value");

   var filters= {};

    if (filterDate != ""){
        filters = {...filters,...{"datetime":filterDate}};
    }

    if (filterCity != ""){
        filters = {...filters,...{"city":filterCity}};
    }

    if (filterState != ""){
        filters = {...filters,...{"state":filterState}};
    }

    if (filterCountry != ""){
        filters = {...filters,...{"country":filterCountry}};
    }

    if (filterShape != ""){
        filters = {...filters,...{"shape":filterShape}};
    }

    
    var filteredData = tableData;
    //iterate through each filter statement
    Object.entries(filters).forEach(function([key,value]) {

        filteredData = filteredData.filter(dataDict => dataDict[key] === value);

    })
    // send filtered data to table making function
    init(filteredData);
      
    });
//initializies table upon opening of webpage
init(tableData);