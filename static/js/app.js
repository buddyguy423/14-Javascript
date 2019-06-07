// variables
var tableData = data;
var tbody = d3.select("tbody");


// YOUR CODE HERE!
function displayRows(someData){
    var row = tbody.append("tr")
    row.append("td").text(someData["datetime"]);
    row.append("td").text(someData["city"]);
    row.append("td").text(someData["state"]);
    row.append("td").text(someData["country"]);
    row.append("td").text(someData["shape"]);
    row.append("td").text(someData["durationMinutes"]);
    row.append("td").text(someData["comments"]);
};

tableData.forEach(displayRows);

//Below is me trying to handle the filter button. I'll need to talk with someone during office hours about this.


//function filterRows(someData){
  //  tbody.html("")
  //  var row = tbody.append("tr")
  //  row.append("td").text(someData["datetime"]);
  //  row.append("td").text(someData["city"]);
  //  row.append("td").text(someData["state"]);
  //  row.append("td").text(someData["country"]);
  //  row.append("td").text(someData["shape"]);
  //  row.append("td").text(someData["durationMinutes"]);
  //  row.append("td").text(someData["comments"]);
//};

//var myInput = d3.select("#filter-button");
//myInput.on("change", )

