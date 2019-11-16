//VARIABLES
//================================================
var apiKey = "&appid=8828f41ba465ab0fe84b7b789254b6e7";
var urlBase = "https://api.openweathermap.org/data/2.5/weather?" + apiKey;
var searchedCity = "";
var cityHistory = [];
var d = new Date();
var strDate = d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate();
var currentTime = new Date().toLocaleTimeString();


$( document ).ready(function() {

//FUNCTIONS
//================================================

// This is for the API call


// function citySearch(weatherData){

    $.ajax({
        url: urlBase,
        method: "GET"
    }).then(function () {
        
    //console.log to check if the AJAX call is accessing the API
//     console.log(weatherData);
//     console.log(weatherData.main.humidity);
//     console.log(weatherData.main.temp);
//     console.log(weatherData);
//     console.log(weatherData.weather[0].description)

//     console.log(currentTime);
//     console.log(strDate);
// });




// });
// // //Button for searching a city
// $("#searchBtn").on('click', function() {
//     event.preventDefault();
//     var searchedCity = $("#form-control").val().trim();
//     var newUrl = urlBase + searchedCity; 
//     console.log("hello");
    
    
//     //variable for the new URL created after the search
//     console.log(newUrl)

// citySearch(searchedCity);
    



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
