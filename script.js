// NPS API
var stateIn = "MN"
var queryURL = "https://developer.nps.gov/api/v1/parks?parkCode=&stateCode=" + stateIn + "&api_key=cqjOFJchUaVcTbkS5D8SYpZ1Mfz1wQciEmZ3P5Cf";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {

    for (let i = 0; i < response.data.length; i++) {
        var allParks = response.data[i];
        // Object Deconstruction
        // console.log(allParks.images[0].url);
        // console.log(allParks);
        // console.log(allParks.description);
        var imgUrl = allParks.images[0].url;
        var des = allParks.description;
        var name = allParks.name;
        // console.log(name);
        // console.log(des);
        // console.log(imgUrl);
        
         var parkCard = $("#park-card");
        
        var cardDiv = $("<div>").attr("class", "card float-left").attr("style", "width: 18rem");
        var cardImg =$("<img>").attr("src", imgUrl).attr("class", "card-img-top").attr("id", "img").attr("alt", "");
        var cardBody = $("<div>").attr("class", "card-body");
        var cardh5 = $("<h5>").attr("class", "card-title").text(name);
        var cardh6 = $("<h6>").attr("class", "card-subtitle mb-2 text-muted");
        var cardp = $("<p>").attr("class", "card-text").attr("id", "placeholder").text(des);

        $(parkCard).append(cardDiv , cardImg, cardBody, cardh5, cardh6, cardp);
        // $(parkCard).append(cardImg);
        // $(parkCard).append(cardBody);
        // $(parkCard).append(cardh5);
        // $(parkCard).append(cardh6);
        // $(parkCard).append(cardp);

    }

    });
// Weather API
var cityState = "Minneapolis,MN"
var queryURLweather = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityState + ",US&units=imperial&appid=c8964eed8811dd75cc40e8ea60039298";
$.ajax({
    url: queryURLweather,
    method: "GET"
}).then(function (feedback) {
    // main, sys (sunset and sunrise), wind, and clouds.
    // var fiveDayForecast = feedback.list.slice(0, 5);
    // console.log(feedback.list);

    // console.log(feedback.list.slice(0, 5));
    //console.log(feedback);
    var fiveDayForecast = feedback.list;

    for (var i = 0; i < fiveDayForecast.length; i++) {
        var currentDay = fiveDayForecast[i];
        // Object Deconstruction
        //console.log(currentDay);
        var { temp, feels_like, temp_min, temp_max, humidity } = currentDay.main;
        var { description } = currentDay.weather[0];
       // console.log('farenheit: ', temp);
        //console.log('rain: ', description);
        // TODO: create a div with class='card-body'
        
        var weatherData = $('#weather-data');
        // var cardBody = $("<div>").addClass("card-body");
        // var weatherDiv = weatherData.append(cardBody);
        // var weatherDiv = weatherData.append(".weather")

       
        
        // console.log(feedback.list[i].dt_txt.indexOf('15:00:00'));
        // TODO: create a <p> for all data and assign text 
        // TODO: rain, precipitation
        if (feedback.list[i].dt_txt.indexOf('15:00:00') !== -1) {
        console.log(feedback.list[i]);
        var title = $('<h5>').addClass('card-title').text(new Date(feedback.list[i].dt_txt).toLocaleDateString("en-EN", {weekday: "long"}));
        
        console.log(feedback.list[i].dt_txt.indexOf('15:00:00') !== -1);

        var temperature = $('<p>').text("Temperature: " + (temp) + " °F");
        var feelsLike = $('<p>').text("Feels Like: " + (feels_like) + " °F");
        var tempMin = $('<p>').text("Temperature Min: " + (temp_min) + " °F");
        var tempMax = $('<p>').text("Temperature Max: " + (temp_max) + " °F");
        var humid = $('<p>').text("Humidity: " + (humidity) + "%");
        var rainLevel = $('<p>').text("Precipitation Level: " + (description));
        
        

        // TODO: Append all <p> tags to card-body div we created above
        // $(weatherDiv).append(title, temperature, feelsLike, tempMin, tempMax, humid, rainLevel);
        $(weatherData).append(title);
        $(weatherData).append(temperature);
        $(weatherData).append(feelsLike);
        $(weatherData).append(tempMin);
        $(weatherData).append(tempMax);
        $(weatherData).append(humid);
        $(weatherData).append(rainLevel);


        // TODO: Append the card-body to the card to the div with id='weather-data'
  
        }
    }
})


