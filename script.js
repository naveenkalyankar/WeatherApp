const inputType = document.getElementById("inputType");
const searchbtn = document.getElementById("searchbtn");
const images = document.getElementById("images");
const degree = document.getElementById("degree");
const lightrain = document.getElementById("lightrain")
const humidity = document.getElementById("percentage1");
const wind_speed = document.getElementById("percentage2");

const location_not_found = document.getElementById("not_found");
const weather_body = document.getElementById("weather_body");


async function checkWeather(city) {
    const api_key = "010249369704f8166d6507666053855f"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weather_data = await fetch(`${url}`)
        .then(response => response.json());

    // console.log(weather_data);
   

    if (weather_data.cod === `404`) {
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        // console.log("error");
        return;
    }
    console.log();
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";

    degree.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    lightrain.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}km/h`;

    switch (weather_data.weather[0].main) {
        case 'Clouds':
            images.src = "./assets/cloud.jpeg";
            break;

        case 'Clear':
            images.src = "./assets/clear.jpeg";
            break;

        case 'Rain':
            images.src = "./assets/rain.jpeg";
            break;

        case 'Snow':
            images.src = "./assets/snowy.png";
            break;

        case 'Thunderstrom':
            images.src = "./assets/thunderstrom.jpeg";
            break;

        case 'Mist':
            images.src = "./assets/mist.png";
            break;

        case 'Haze':
                images.src = "./assets/haze.png";
                break;


    }
}



searchbtn.addEventListener('click', () => {
    checkWeather(inputType.value);
});




