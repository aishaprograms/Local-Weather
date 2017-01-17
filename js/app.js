function convertCtoF(C) {
    var Fah = parseInt(C) * 9 / 5 + 32;
    return Math.round(Fah);
}

function addWeatherIcon(description) {
    var locIcon = $('<i>');
    var iconClass;
    switch (description) {
        case 'clear sky':
            iconClass = "wi wi-day-sunny";
            break;
        case 'few clouds':
            iconClass = "wi wi-day-cloudy";
            break;
        case 'scattered clouds':
            iconClass = "wi wi-cloud";
            break;
        case 'broken clouds':
            iconClass = "wi wi-cloudy";
            break;
        case 'shower rain':
            iconClass = "wi wi-rain";
            break;
        case 'rain':
            iconClass = "wi wi-day-showers";
            break;
        case 'thunderstorm':
            iconClass = "wi wi-thunderstorm";
            break;
        case 'snow':
            iconClass = "wi wi-snow";
            break;
        case 'mist':
            iconClass = "wi wi-dust";
            break;
        default:
            iconClass = "wi wi-cloud";
    }
    locIcon.addClass(iconClass);
    return locIcon;
}

function getWeather(position) {
    var query = '?lat=' + position.coords.latitude + '&lon=' +
        position.coords.longitude;
    // API Key
    var APIKey = '41e58cef7150f773438a28a98fe5aa79';

    //the URL to query the database
    var queryURL = 'https://api.openweathermap.org/data/2.5/weather' + query +
        '&units=metric&appid=' + APIKey;

    $.ajax({ url: queryURL, method: 'GET' }).done(function(response) {
        $('.loc-name').text(response.name);
        var Fah = convertCtoF(response.main.temp);
        $('.loc-temp').text(response.main.temp + ' °C / ' + Fah + ' °F');
        $('.loc-condition').text(response.weather[0].description);
        var locIcon = addWeatherIcon(response.weather[0].description);
        $('.loc-icon').html(locIcon);
    });
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getWeather);
    } else {
        console.log('Geolocation is not supported by this browser.');
    }
}
getLocation();
