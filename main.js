async function start() {
  const weatherDataPromise = await fetch(
    "https://api.weather.gov/gridpoints/MFL/110,50/forecast"
  );

  const weatherData = await weatherDataPromise.json();
  const ourTemperature = weatherData.properties.periods[0].temperature;
  document.querySelector("#ourTemperature").textContent = ourTemperature;
}

start();


async function getPetsData(){
  const petsPromise = await fetch(
    "https://learnwebcode.github.io/bootcamp-pet-data/pets.json"
  );
  const petsData = await petsPromise.json();
  //console.log(petsData);
  petsData?.map(pet=>{
    console.log(`${pet.name}`);
  })
}

getPetsData();