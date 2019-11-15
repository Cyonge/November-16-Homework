//VARIABLES
//================================================
var apiKey = "&appid=8828f41ba465ab0fe84b7b789254b6e7";
var urlBase = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=london" + apiKey;
var searchedCity = "";
var cityHistory = [];

//FUNCTIONS
//================================================

// This is for the API call


function citySearch(urlBase){
    $.ajax({
        url: urlBase,
        method: "GET"
    }).then(function (weatherData) {
        
        console.log(weatherData);
       
});
console.log('hello')

};

// //Button for searching a city
$("#button").on('click', function(event) {
    event.preventDefault();
    searchedCity = $("#form-control").text().trim();

    //variable for the new URL created after the search
    var newUrl = urlBase + "&q=" + searchedCity;   

    
});
citySearch();

console.log(urlBase);


//MAIN PROCESSES
//================================================
//
// 1) Search bar
    // a) Where we take user input (city) and click the search button and displays to the user and stores that locally
    // b) This makes an AJAX request to the weather API for whatever city that was
    // c) Based on whatever city is searched it queries everything on the page
    // d) Will need to clear input out of search bar after and clear page when a new search is made


