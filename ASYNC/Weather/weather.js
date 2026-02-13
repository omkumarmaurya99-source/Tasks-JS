async function getWeather() {
  const city = document.getElementById("city").value.trim();
  const output = document.getElementById("output");

  if (!city) {
    output.textContent = "Please enter a city name";
    return;
  }

  try {
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
    );
    const geoData = await geoRes.json();

    if (!geoData.results) {
      output.textContent = "City not found";
      return;
    }

    const { latitude, longitude, name, country } = geoData.results[0];

    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherRes.json();

    const temp = weatherData.current_weather.temperature;
    const wind = weatherData.current_weather.windspeed;

    output.textContent =
`📍 ${name}, ${country}
🌡 Temperature: ${temp}°C
🌬 Wind Speed: ${wind} km/h`;

  } catch {
    output.textContent = "Error fetching weather data";
  }
}

function handleEnter(event) {
  if (event.key === "Enter") {
    getWeather();
  }
}

window.onload = () => {
  document.getElementById("city").focus();
};
