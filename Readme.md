Weather Tracker App 🌦️

        A modern and responsive weather application that provides real-time weather data for any city or the user's current location. Built with HTML, CSS, JavaScript, and the OpenWeatherMap API.

Understanding Build : 
        
        Each function is mentioned what it does for a better understanding of how the project was built . People cloning these repo will know how the functionailities are working on each function being executed .

Running the Project Locally 🛠️

Prerequisites
        
         A modern web browser (Chrome, Firefox, Safari, etc.).

        An API key from OpenWeatherMap.

Steps: 

        Clone the Repository:

        Add Your API Key:

        Open the script.js file.

        Replace 'f98c6d20c863b1338c0d4c91c231a9be' with your OpenWeatherMap API key or its ok if you use this api key too for testing

        Run the App:

            Open the index.html file in your browser.


Approach


    The app was designed with a focus on simplicity and usability. The interface is clean and intuitive, making it easy for users to access weather information.

    The app uses the browser's Geolocation API to automatically fetch the user's location and display local weather data. This provides a personalized experience for users.

    The app fetches real-time weather data and forecasts from the OpenWeatherMap API using Axios. This ensures that users always see the most up-to-date information.

    The app is fully responsive, with media queries ensuring that it looks great on all devices, from desktops to mobile phones.

    A toggle button allows users to switch between Celsius and Fahrenheit, enhancing the app's usability for a global audience.


Challenges Faced


    Handling API Errors:

        Challenge: The app needed to handle errors gracefully, such as when a city is not found or the API request fails.

        Solution: Implemented error handling in the fetchWeather function to display user-friendly error messages.

    Geolocation Permissions:

        Challenge: Users might deny location access, breaking the app's functionality.

        Solution: Added a fallback mechanism that prompts users to manually enter a city if location access is denied.

    Responsive Hourly Forecast:

        Challenge: Displaying the hourly forecast in a scrollable horizontal layout while ensuring it looks good on all screen sizes.

        Solution: Used CSS Flexbox and media queries to create a responsive and scrollable hourly forecast section.

    Temperature Unit Conversion:

        Challenge: Dynamically converting temperatures between Celsius and Fahrenheit without making additional API calls.

        olution: Implemented a conversion function that updates the displayed temperatures when the unit is toggled.


Features ✨

1. Real-Time Weather Data:

        Get current weather conditions, including temperature, humidity, and weather description.

        Displays weather icons for better visualization.

2. Hourly Forecast:

        View the weather forecast for the next 24 hours in 3-hour intervals.

3. Geolocation Support:

        Automatically detects the user's location and displays local weather data.

4. Temperature Unit Toggle:

        Switch between Celsius and Fahrenheit with a single click.

5. Responsive Design:

        Works seamlessly on all devices, from desktops to mobile phones.

6. Modern UI:

        Sleek and clean design with a blurred glass effect and smooth animations.


Technologies Used 🛠️

1.Frontend:

        HTML5

        CSS3 (with Flexbox and Media Queries)

        JavaScript (ES6)

2. APIs:

        OpenWeatherMap API for weather data.

3. Tools:

        Axios for HTTP requests.

        Geolocation API for detecting user location.


Help Taken From codeium to write the readme.md file 