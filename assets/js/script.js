//Api Key c25a148c5ababbe5c65b4d14f9f97672

let weather = {
    websiteApi: "c25a148c5ababbe5c65b4d14f9f97672",

    fetchWeather: function (city) {
        fetch (
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&appid=" 
            + this.websiteApi
        ) 
            .then ((response) => response.json())
            .then ((data) => console.log(data));
    },
    displayWeather: function(data) {

    }
};


