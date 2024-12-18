# Weather App 

This Weather App is a dynamic, responsive web application built using React. It fetches weather data from the OpenWeatherMap API to display current and forecasted weather conditions. Users can search for weather data by city, view hourly weather updates, and see a 5-day forecast.

---

## Demo

Check out the live version of the Weather App here:  
[**Live Demo**](https://weather-app-3a7a.onrender.com)

The backend server is deployed here:  
[**Backend Demo**](https://weather-app-backend-vqus.onrender.com)

---

## Features 

- **_City Search_**: Search for weather details of any city.
- **_Current Weather_**: Displays temperature, weather description, and icon.
- **_Hourly Weather Forecast_**: Shows hourly weather for the selected city.
- **_5-Day Forecast_**: Displays average temperature and weather icons for the next 5 days.
- **_Responsive Design_**: Fully optimized for desktop, tablet, and mobile devices.
- **_Toggle Input_**: Hide or show the search input dynamically.

---

## Technologies Used 

- **_Frontend_**: React, CSS
- **_API_**: [OpenWeatherMap API](https://openweathermap.org/)
- **_Icons_**: Bootstrap Icons (for weather symbols)

---

## Project Structure

```plaintext
Weather-App-New/
├── weather-frontend/   # React frontend code
│   ├── src/            # React components and pages
│   ├── public/         # Static files
│   └── package.json    # Frontend dependencies
├── weather-backend/    # Backend API server
│   ├── server.js       # Backend server entry point
│   └── package.json    # Backend dependencies
└── README.md           # Project documentation
```

---

## Getting Started

To get a local copy of the project up and running, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/ofiralmagor/Weather-App-New.git
   ```
2. Navigate to the frontend directory:
   ```bash
   cd weather-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the frontend development server:
   ```bash
   npm start
   ```
5. To run the backend server:
   - Navigate to the backend directory:
     ```bash
     cd ../weather-backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the backend server:
     ```bash
     npm start
     ```

---


## Usage 

1. **_Search for a City_**:
   - Click the search button to toggle the input field.
   - Enter a city name and press the search icon or hit "Enter".

2. **_View Weather Details_**:
   - The app fetches weather data for the selected city.
   - View current weather conditions, hourly weather updates, and a 5-day forecast.

3. **_Responsive Layout_**:
   - Enjoy a seamless experience on mobile, tablet, and desktop screens.

---

## Backend Setup

This project includes a backend folder (`weather-backend`) to handle API requests or serve additional functionality.

### Steps to Run Backend:
1. Ensure Node.js is installed.
2. Navigate to the `weather-backend` directory.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```

The backend is deployed here:  
[**Backend Demo**](https://weather-app-backend-vqus.onrender.com)


---

## Deployment

This app is deployed using [Render](https://render.com/). For details on how to deploy, refer to their [documentation](https://render.com/docs).

---

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

## Acknowledgments

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [OpenWeatherMap API](https://openweathermap.org/api)
- Thanks to [Bootstrap Icons](https://icons.getbootstrap.com/) for providing free icons.
