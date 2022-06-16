//Api Key c25a148c5ababbe5c65b4d14f9f97672
//https://api.openweathermap.org/data/2.5/weather?q=california&appid=c25a148c5ababbe5c65b4d14f9f97672

let weather = {
    websiteApi: "c25a148c5ababbe5c65b4d14f9f97672",

    fetchWeather: function (city) {
        fetch (
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=imperial&appid=" 
            + this.websiteApi
        ) 
            .then ((response) => response.json())
            .then ((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, temp, humidity, speed)
        document.querySelector(".city").innerText = name ;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".temperature").innerText = temp + " °F";
        document.querySelector(".wind").innerText = speed + " MPH";
        document.querySelector(".humidity").innerText = humidity + " %";
    },
    search : function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }

};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
})


