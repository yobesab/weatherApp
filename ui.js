
/*
* Read from the following site fro more information about the weather fields in API response
* 
* https://openweathermap.org/current#multi
*
* ISO3166 Country Codes are available at the following site: 
*'https://datahub.io/core/country-list/datapackage.json'
*/
// Init populate location 
class UI {
  
  constructor () {
    
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.rain = document.getElementById('w-rain');
    this.clouds = document.getElementById('w-clouds');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint= document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weatherResponse) {

    this.location.textContent = `${weatherResponse.name}, ${weatherResponse.sys.country}`;
    this.desc.textContent = weatherResponse.weather[0].description;
    this.string.textContent = (weatherResponse.main.temp - 273.15).toFixed(1) + '℃';
    this.clouds.textContent = `Clouds: ${weatherResponse.clouds.all} %`;
    this.humidity.textContent = `Relative Humidity: ${weatherResponse.main.humidity} %`;
    this.feelsLike.textContent = `Feels Like: ${(weatherResponse.main.feels_like - 273.15).toFixed(1)} ℃`;
    this.dewpoint.textContent = `Pressure: ${weatherResponse.main.pressure} hPa`;
    this.wind.textContent = `Wind Speed: ${weatherResponse.wind.speed} m/s`;

  }

}