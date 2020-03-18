// NPS API
var queryURL = "https://developer.nps.gov/api/v1/parks?parkCode=grpo&api_key=cqjOFJchUaVcTbkS5D8SYpZ1Mfz1wQciEmZ3P5Cf";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
      console.log(response.data[0].name);
    });

// Weather API
var cityState = "Minneapolis,MN"
var queryURLweather = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityState + ",US&appid=c8964eed8811dd75cc40e8ea60039298";
$.ajax({
    url: queryURLweather,
    method: "GET"
}).then(function(feedback){
// main, sys (sunset and sunrise), wind, and clouds.
console.log(feedback.list.slice(0, 5))
})