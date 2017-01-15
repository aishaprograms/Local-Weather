function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getWeather);
    } else {
        console.log('Geolocation is not supported by this browser.');
    }
}

function getWeather(position) {
    var query = '?lat=' + position.coords.latitude + '&lon=' +
        position.coords.longitude;
    // API Key
    var APIKey = '41e58cef7150f773438a28a98fe5aa79';

    //the URL to query the database
    var queryURL = 'http://api.openweathermap.org/data/2.5/weather' + query +
        '&units=imperial&appid=' + APIKey;

    $.ajax({ url: queryURL, method: 'GET' })

    .done(function(response) {
        console.log(response);
        $('.loc-name').text(response.name);
        $('.loc-temp').text(response.main.temp + ' °F');
        $('.loc-condition').text(response.weather[0].description);

    });
}

getLocation();
