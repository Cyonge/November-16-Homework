//VARIABLES
//================================================
var apiKey = "&appid=8828f41ba465ab0fe84b7b789254b6e7";
var urlBase = "https://api.openweathermap.org/data/2.5/weather?" + apiKey;
var fiveDayUrlBase = "https://api.openweathermap.org/data/2.5/forecast?" + apiKey;
var cityInput = "";
var d = new Date();
var strDate = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();
var currentTime = new Date().toLocaleTimeString();



// this is to capitalize the first letter in a string
function uppercaseFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
    }


$(document).ready(function () {

    //FUNCTIONS
    //================================================

// This is for the API call


    function getWeather(UrlToSearch) {
        console.log(UrlToSearch)
        $.ajax({
            url: UrlToSearch,
            method: "GET"
        }).then(function (weatherData) {

// console.log to check if the AJAX call is accessing the API
            console.log(weatherData);

// this section adds the requested weather data to the page
            $('#humidity').text(weatherData.main.humidity + "%");
            $('#date').text(strDate);
            $('#temp').text(weatherData.main.temp + ' F');
            $('#rain').text(uppercaseFirstLetter(weatherData.weather[0].description));
            // how do I get the time to update every time I search?
            $('#time').text(currentTime);




        });

    };

// function that will call the 5 day forecast
function fiveDayForecast(UrlToSearch2){
    
    // AJAX call for the 5 day forecast
    $.ajax({
        url: UrlToSearch2,
        method: "GET"
    }).then(function(forecast){
        console.log(forecast)
        

    }

)};


//Button for searching a city
$("#searchBtn").on('click', function () {
    event.preventDefault();

    var cityInput = $("#form-control").val().trim();
    // building our URL here
    var newUrl = urlBase + "&q=" + cityInput + "&units=imperial";
    
    
// this section will show the city History on the left side of the screen
    // setting a variable equal to what we want rendered on the page
    var cityList = $(`
    <li class="list-group-item">${cityInput}</li>
    `);
    // this prepends to city that you search based on the variable cityList
    $(".list-group").prepend(cityList);
    console.log(cityList);

// this section of the button will be for the 5 day forecast URL and adding data to the page
    var newFiveDayUrl = fiveDayUrlBase + "&q=" + cityInput + "&units=imperial"

getWeather(newUrl);
fiveDayForecast(newFiveDayUrl);
    


});




//MAIN PROCESSES
//================================================
//
// 1) Search bar
    // a) Where we take user input (city) and click the search button and displays to the user and stores that locally
    // b) This makes an AJAX request to the weather API for whatever city that was
    // c) Based on whatever city is searched it queries everything on the page
    // d) Will need to clear input out of search bar after and clear page when a new search is made

});

// when you click button have 3 function
    // 1) add to search history (after button is clicked)
    // 2) Structure getWeather function for current weather
    // 3) need new function/api call for 5 day forecast