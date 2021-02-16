const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
// console.log(city.textContent);

// Get City
function getCity() {
  if (localStorage.getItem('city') === null) {
    city.textContent = '[Enter City]';
  } else {
    city.textContent = localStorage.getItem('city');
  }
}

// Set City
function setCity(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.code === 'Enter') {
      if (city.textContent == '') {
        city.textContent = localStorage.getItem('city');
      }
      localStorage.setItem('city', e.target.innerText);
      getWeather();
      city.blur();
    }
  } else if (city.textContent == '') {
    city.textContent = localStorage.getItem('city');
  } else {
    localStorage.setItem('city', e.target.innerText);
    getWeather();
  }
}

city.addEventListener('click', () => {
  if(city.textContent == '[Enter City]'){
    localStorage.setItem('city', '[Enter City]');
  }
  city.innerText = '';
});

city.addEventListener('keypress', setCity);
city.addEventListener('blur', setCity);

getCity();

// function setCity(event) {
//   if (event.code === 'Enter') {
//     getWeather();
//     city.blur();
//   }
// }

async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=f61a61c4ba631867eeab1afc85576e06&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 
  if(data.cod == '404') {
    // console.log('nun city');
    temperature.textContent = `${data.message}`;
    humidity.textContent = ``; // humidity
    wind.textContent = ``; // humidity
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.remove();
    weatherDescription.textContent = '';
    // weatherDescription.style.minWidth = '0';
    document.addEventListener('DOMContentLoaded', getWeather);
    city.addEventListener('keypress', setCity);
  } else {
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`); // icon
    temperature.textContent = `t: ${data.main.temp}°C`; // temp
    humidity.textContent = `h: ${data.main.humidity}%`; // humidity
    wind.textContent = `wind s: ${data.wind.speed} m/s`; // humidity
    weatherDescription.textContent = data.weather[0].description; // broken clouds
    document.addEventListener('DOMContentLoaded', getWeather);
    city.addEventListener('keypress', setCity);
  }
}
getWeather();

