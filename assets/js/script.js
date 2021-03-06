//Api Key c25a148c5ababbe5c65b4d14f9f97672
//https://api.openweathermap.org/data/2.5/weather?q=california&appid=c25a148c5ababbe5c65b4d14f9f97672

let weatherBox = $(".weather")

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
        const {lon} = data.coord;
        const {lat} = data.coord;


        console.log(name, icon, temp, humidity, speed, lon, lat)
        document.querySelector(".city").innerText = name ;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".temperature").innerText = "Temp: " + temp + " °F";
        document.querySelector(".wind").innerText = "Wind: " + speed + " MPH";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + " %";

        weatherBox.removeClass("hide");

        localStorage.setItem("name", name)
        
     
        fetch (
            `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=c25a148c5ababbe5c65b4d14f9f97672`
        ) 
            .then ((response) => response.json())
            .then ((data) => console.log(data));
            
    },
       uviWeather: function (data) {
            const {uvi} = data.current;
            document.querySelector(".uvIndex").innerText = "UV Index: " + uvi;
        },
     
        
        
    

    
    search : function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },


};




document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        weather.search();
    }
})