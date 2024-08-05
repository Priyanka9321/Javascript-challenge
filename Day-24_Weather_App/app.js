const apiKey = "6685faf716a7f4b64ca8034c64565ca5"; // OpenWeatherMap API key

const weatherIcons = {
  clear: "https://openweathermap.org/img/wn/01d.png",
  clouds: "https://openweathermap.org/img/wn/02d.png",
  rain: "https://openweathermap.org/img/wn/09d.png",
  default: "https://openweathermap.org/img/wn/10d.png",
};

document.getElementById("search-btn").addEventListener("click", () => {
  const city = document.getElementById("city-input").value.trim();
  if (city) {
    fetchWeatherData(city);
  } else {
    alert("Please enter a city name.");
  }
});

async function fetchWeatherData(city) {
  try {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    if (!weatherResponse.ok) throw new Error("Weather data not found");
    const weatherData = await weatherResponse.json();

    const { name, main, weather } = weatherData;
    document.getElementById("city-name").textContent = name;
    document.getElementById("temperature").textContent = `Temperature: ${main.temp}°C`;

    const weatherCondition = weather[0].description;
    const weatherIcon = weatherIcons[weather[0].main.toLowerCase()] || weatherIcons.default;
    document.getElementById("weather-condition").innerHTML = `
      Condition: ${weatherCondition} <img src="${weatherIcon}" class="weather-icon" alt="${weatherCondition}">
    `;

    fetchForecastData(city);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Error fetching weather data. Please try again.");
  }
}

async function fetchForecastData(city) {
  try {
    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    );
    if (!forecastResponse.ok) throw new Error("Forecast data not found");
    const forecastData = await forecastResponse.json();

    const forecastContainer = document.querySelector(".forecast");
    forecastContainer.innerHTML = ""; // Clear previous forecast

    forecastData.list.filter((_, index) => index % 8 === 0).forEach(forecast => {
      const { dt, main, weather } = forecast;
      const forecastElement = document.createElement("div");
      const weatherCondition = weather[0].description;
      const weatherIcon = weatherIcons[weather[0].main.toLowerCase()] || weatherIcons.default;

      forecastElement.innerHTML = `
        <p>Date: ${new Date(dt * 1000).toLocaleDateString()}</p>
        <p>Temperature: ${main.temp}°C</p>
        <p>Condition: ${weatherCondition} <img src="${weatherIcon}" class="weather-icon" alt="${weatherCondition}"></p>
      `;
      forecastContainer.appendChild(forecastElement);
    });
  } catch (error) {
    console.error("Error fetching forecast data:", error);
    alert("Error fetching forecast data. Please try again.");
  }
}
