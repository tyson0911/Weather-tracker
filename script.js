const apiKey = 'f98c6d20c863b1338c0d4c91c231a9be'; // Replace with your OpenWeatherMap API key
let isCelsius = true; // Track the current unit and it is celsius by default

// Function to fetch weather by city name
function getWeather() {
    const city = document.getElementById('city').value;

    if (!city) {
        alert('Please enter a city');
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetchWeather(currentWeatherUrl, forecastUrl);
}

// Function to fetch weather by coordinates
function getWeatherByCoords(lat, lon) {
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetchWeather(currentWeatherUrl, forecastUrl);
}

// function to fetch and display weather data
function fetchWeather(currentWeatherUrl, forecastUrl) {
    showLoading(true);

    axios.get(currentWeatherUrl)
        .then(response => {
            displayWeather(response.data);
            showLoading(false);
        })
        .catch(error => {
            console.error('Error fetching current weather data:', error);
            alert('Error fetching current weather data. Please try again.');
            showLoading(false);
        });

    axios.get(forecastUrl)
        .then(response => {
            displayHourlyForecast(response.data.list);
        })
        .catch(error => {
            console.error('Error fetching hourly forecast data:', error);
            alert('Error fetching hourly forecast data. Please try again.');
        });
}

//  display weather data
function displayWeather(data) {
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');

    weatherInfoDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';

    if (data.cod === '404') {
        weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
    } else {
        const cityName = data.name;
        const temperature = isCelsius ? Math.round(data.main.temp - 273.15) : Math.round((data.main.temp - 273.15) * 9/5 + 32); // Convert to Celsius or Fahrenheit
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
        const humidity = data.main.humidity;

        const temperatureHTML = `
            <p>${temperature}°${isCelsius ? 'C' : 'F'}</p>
        `;

        const weatherHtml = `
            <p>${cityName}</p>
            <p>${description}</p>
            <p>Humidity: ${humidity}%</p>
        `;

        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTML = weatherHtml;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;

        showImage();
    }
}

// Function to display hourly forecast
function displayHourlyForecast(hourlyData) {
    const hourlyItemsContainer = document.querySelector('.hourly-items-container');
    hourlyItemsContainer.innerHTML = '';

    const next24Hours = hourlyData.slice(0, 8); 

    next24Hours.forEach(item => {
        const dateTime = new Date(item.dt * 1000); 
        const hour = dateTime.getHours();
        const temperature = isCelsius ? Math.round(item.main.temp - 273.15) : Math.round((item.main.temp - 273.15) * 9/5 + 32); // Convert to Celsius or Fahrenheit
        const iconCode = item.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        const hourlyItemHtml = `
            <div class="hourly-item">
                <span>${hour}:00</span>
                <img src="${iconUrl}" alt="Hourly Weather Icon">
                <span>${temperature}°${isCelsius ? 'C' : 'F'}</span>
            </div>
        `;

        hourlyItemsContainer.innerHTML += hourlyItemHtml;
    });
}

// Function to showand hide loading spinner
function showLoading(show) {
    const loadingDiv = document.getElementById('loading');
    loadingDiv.style.display = show ? 'block' : 'none';
}

// Function to show weather icon
function showImage() {
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.style.display = 'block';
}

//Toogling between Celsius and Fahrenheit
function toggleUnit() {
    isCelsius = !isCelsius; 
    const unitToggleButton = document.getElementById('unit-toggle');
    unitToggleButton.textContent = isCelsius ? 'Switch to Fahrenheit' : 'Switch to Celsius';

    const city = document.getElementById('city').value;
    if (city) {
        getWeather();
    } else {
        getLocation();
    }
}

// Function to get location and fetch weather
function getLocation() {
    if (navigator.geolocation) {
        showLoading(true);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                getWeatherByCoords(lat, lon);
            },
            (error) => {
                console.error('Error getting location:', error);
                alert('Unable to retrieve your location. Please enter a city manually.');
                showLoading(false);
            }
        );
    } else {
        alert('Geolocation is not supported by your browser. Please enter a city manually.');
    }
}

window.onload = getLocation;