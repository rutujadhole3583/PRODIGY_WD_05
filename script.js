const apiKey = "1b27ab762431b7263c1aa736c8239c59";

async function getWeather() {

    const city = document.getElementById("cityInput").value;

    if(city === ""){
        alert("Please enter a city name");
        return;
    }

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("city").innerText =
            data.name + ", " + data.sys.country;

        document.getElementById("temperature").innerText =
            "🌡 Temperature: " + data.main.temp + " °C";

        document.getElementById("condition").innerText =
            "☁ Condition: " + data.weather[0].description;

        document.getElementById("humidity").innerText =
            "💧 Humidity: " + data.main.humidity + "%";

        document.getElementById("wind").innerText =
            "💨 Wind Speed: " + data.wind.speed + " m/s";

    } catch(error) {
        alert("City not found!");
    }
}