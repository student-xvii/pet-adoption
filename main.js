async function start() {
  const weatherDataPromise = await fetch(
    "https://api.weather.gov/gridpoints/MFL/110,50/forecast"
  );

  const weatherData = await weatherDataPromise.json();
  const ourTemperature = weatherData.properties.periods[0].temperature;
  document.querySelector("#ourTemperature").textContent = ourTemperature;
}

start();
