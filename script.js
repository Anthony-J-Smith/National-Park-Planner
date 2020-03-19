// NPS API
var stateIn = "MN"
var queryURL = "https://developer.nps.gov/api/v1/parks?parkCode=&stateCode=" + stateIn + "&api_key=cqjOFJchUaVcTbkS5D8SYpZ1Mfz1wQciEmZ3P5Cf";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    //   console.log(response);
      // render name, description
      //console.log(response.data[0].name)
      //console.log(response.data[0].description)
      console.log(response.data[0].images[0].url)
    // Not able to grab specific objects (name, description)
    //   var { name, description } = response;
    // left $() blank
    // var movieDiv = $("#park-name");
    var name = response.data[0].name;
    var des = response.data[0].description
    var img = response.data[0].images[0].url
    var parkName = $("h5").text("Name: " + name);
    var parkDes = $("#placeholder").text("Description: " + des);
    var parkImg = $("img").attr("src" , img)
    //append text to $() html or create tags using jquery method.
    $(".card-title").append(parkName);
    $("#placeholder").append(parkDes);
    $("#img").append(parkImg)
    });
// Weather API
var cityState = "Minneapolis,MN"
var queryURLweather = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityState + ",US&units=imperial&appid=c8964eed8811dd75cc40e8ea60039298";
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
        var { description } = currentDay.weather[0];
        console.log('farenheit: ', temp);
        console.log('rain: ', description);
        // TODO: create a div with class='card-body'
        
        var weatherData = $('#weather-data');
        var cardBody = $("<div>").addClass("card-body");
        var weatherDiv = weatherData.append(cardBody);
       

        // TODO: create a <p> for all data and assign text 
        // TODO: rain, precipitation
        var temperature = $('<p>').text("Temperature: " + (temp) + " °F");
        var feelsLike = $('<p>').text("Feels Like: " + (feels_like) + " °F");
        var tempMin = $('<p>').text("Temperature Min: " + (temp_min) + " °F");
        var tempMax = $('<p>').text("Temperature Max: " + (temp_max) + " °F");
        var humid = $('<p>').text("Humidity: " + (humidity) + "%");
        var rainLevel = $('<p>').text("Precipitation Level: " + (description));
       
        

        // TODO: Append all <p> tags to card-body div we created above

        $(weatherDiv).append(temperature);
        $(weatherDiv).append(feelsLike);
        $(weatherDiv).append(tempMin);
        $(weatherDiv).append(tempMax);
        $(weatherDiv).append(humid);
        $(weatherDiv).append(rainLevel);


        // TODO: Append the card-body to the card to the div with id='weather-data'
  

    }
})




// $('#weather-data').append(temp);

// function day(today) {
// var d = new Date();
// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";

// var n = weekday[d.getDay()];
// };




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
