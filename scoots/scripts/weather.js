const currentTemp = document.querySelector('#current-temp');
const maxTemp = document.querySelector('#max-temp');
const humidity = document.querySelector('#humidity');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=86.94&units=imperial&appid=882239ba366a5a3b0949861a5a43fb84';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    maxTemp.innerHTML = `${data.main.temp_max}&deg;F`;
    const iconsrc= `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description.toUpperCase();
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('main', `${data.weather.main}`);
    captionDesc.textContent = `${desc}`;
    humidity.innerHTML = `${data.main.humidity}`;
}

function closeBanner() {
    var banner = document.querySelector('#reminder-banner');
    banner.style.display = 'none';
};