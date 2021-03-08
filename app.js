// Init storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
// Init UI
const ui = new UI();

// Init populate location 
const popLoc = new PopulateLocation;

// Get Country on DOM load
document.addEventListener('DOMContentLoaded', popLoc.createCountry(weatherLocation.country));

// Get City on DOM load
document.addEventListener('DOMContentLoaded', popLoc.createCity(weatherLocation.country));

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);
let defaultCountry = 'AU'
popLoc.createCity(defaultCountry);

// Change location event
//Change the country 
document.getElementById('country-btn').addEventListener('click', (e) => {
  const country = document.getElementById('country').value;
  popLoc.createCity(country);
  
});

// Change the weather location, save in local storage and display the weather 
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  
  const country = document.getElementById('country').value;
  const city = document.getElementById('city').value;

  // Change location
  weather.changeLocation(city, country);

  // Set location in LS
  storage.setLocationData(city, country);

  // Get and display weather
  location.reload(); // restart the browser and display weather 
  createCity(country);
  getWeather();

  // Close modal - jquery
  $('#locModal').modal('hide');

});

popLoc.createCity(weatherLocation.country);

function getWeather(){
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}

