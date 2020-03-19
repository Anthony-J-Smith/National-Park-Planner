// // NPS API
// var queryURL = "https://developer.nps.gov/api/v1/parks?parkCode=grpo&api_key=cqjOFJchUaVcTbkS5D8SYpZ1Mfz1wQciEmZ3P5Cf";
// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function(response) {
//       console.log(response.data[0].name);
//     });

// Weather API
var cityState = "Minneapolis,MN"
var queryURLweather = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityState + ",US&appid=c8964eed8811dd75cc40e8ea60039298";
$.ajax({
    url: queryURLweather,
    method: "GET"
}).then(function (feedback) {
    // main, sys (sunset and sunrise), wind, and clouds.
    var fiveDayForecast = feedback.list.slice(0, 5);

    // console.log(feedback.list.slice(0, 5))
    //console.log(feedback)
    for (let i = 0; i < fiveDayForecast.length; i++) {
        var currentDay = fiveDayForecast[i];
        // Object Deconstruction
        console.log(currentDay);
        var { temp, feels_like, temp_min, temp_max, humidity } = currentDay.main;
        console.log('kelvin: ', temp);
        // TODO: create a div with class='card-body'

        var weatherDiv = $('#weather-data').append('<div>');

        // TODO: create a <p> for all data and assign text 
        
        var temperature = $('<p>').text(temp);
        var feelsLike = $('<p>').text(feels_like);
        var tempMin = $('<p>').text(temp_min);
        var tempMax = $('<p>').text(temp_max);
        var humid = $('<p>').text(humidity);

        // TODO: Append all <p> tags to card-body div we created above

        $('#weather-data').append(temperature);
        $('#weather-data').append(feelsLike);
        $('#weather-data').append(tempMin);
        $('#weather-data').append(tempMax);
        $('#weather-data').append(humid);


        // TODO: Append the card-body to the card to the div with id='weather-data'


    }
})




// $('#weather-data').append(temp);







//print a bootstrap card using jQuery


// for (var i = 0; i < data.list.length; i++) {
//     // only look at forecasts around 3:00pm
//     if (data.list[i].dt_txt.indexOf("15:00:00") !== -1) {
//       // create html elements for a bootstrap card
//       var col = $("<div>").addClass("col-md-2");
//       var card = $("<div>").addClass("card bg-primary text-white");
//       var body = $("<div>").addClass("card-body p-2");

//       var title = $("<h5>").addClass("card-title").text(new Date(data.list[i].dt_txt).toLocaleDateString());

//       var img = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png");

//       var p1 = $("<p>").addClass("card-text").text("Temp: " + data.list[i].main.temp_max + " °F");
//       var p2 = $("<p>").addClass("card-text").text("Humidity: " + data.list[i].main.humidity + "%");

//       // merge together and put on page
//       col.append(card.append(body.append(title, img, p1, p2)));
//       $("#forecast .row").append(col);
//     }
// }

//print var cityState in H5
//retrieve data (temperature, feels like, uv-index, % chance of precipitation )
