function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getWeather);
    } else {
        console.log('Geolocation is not supported by this browser.');
    }
}

function getWeather(position) {
    var query = '?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude;
    // API Key
    var APIKey = '41e58cef7150f773438a28a98fe5aa79';

    //the URL to query the database
    var queryURL = 'http://api.openweathermap.org/data/2.5/weather' + query + '&units=imperial&appid=' + APIKey;

    $.ajax({ url: queryURL, method: 'GET' })

    .done(function(response) {

        // Log the resulting object
        console.log(response);

        // Log the data in the console as well
        console.log("Temperature (F): " + response.main.temp);
    });
}

getLocation();
