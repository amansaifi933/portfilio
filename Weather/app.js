const inputBox = document.querySelector('.input-box');
const searchBtn = document.querySelector('#searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('#humidity');
const wind_speed = document.querySelector('#wind-speed');
 async function checkWeather(city){
      const api_key ="6e4fc076638b37e13f3fc1361442b547";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    
        temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
        description.innerHTML =`${weather_data.weather[0].description}`;
        humidity.innerHTML =`${weather_data.main.humidity}%`;
        wind_speed.innerHTML=`${weather_data.wind.speed}km/h`;
        
        const weather_data = await fetch(`${url}`).then(response => response.json());  
        console.log(weather_data);  

}

searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});













