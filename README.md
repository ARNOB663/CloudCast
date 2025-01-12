# CloudCast

A modern, feature-rich Weather App built with **ReactJS**, **TypeScript**, **TanStack Query**, and **ShadCN**. This application provides real-time weather updates, forecasts, and additional functionalities to enhance the user experience.

## Features

- **Current Location Weather**: Automatically fetches and displays the weather based on your current location.
- **Search Any City**: Search for the weather of any city in the world.
- **Forecast Visualization**: Graphical representation of the next 24-hour temperature trends.
- **Search History**: Maintains a history of previously searched cities using **TanStack Query**.
- **Favorite Cities**: Add cities to your favorites list using **mutations** from **TanStack Query**.
- **Dark/Light Mode**: Toggle between dark and light themes for a comfortable user experience.

## Tech Stack

- **ReactJS**: A JavaScript library for building user interfaces.
- **TypeScript**: For type safety and better developer experience.
- **TanStack Query**: For efficient data fetching, caching, and state management.
- **ShadCN**: For a customizable and accessible component library.
- **Weather API**: Used to fetch real-time weather data and forecasts.

## Deployment

Access the live version of the app:  
[CloudCast Deployment](https://fabulous-fenglisu-81646e.netlify.app/) 

## Installation

1. Clone the repository:
   ```bash
   git@github.com:ARNOB663/CloudCast.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add your Weather API key:
   - Create a `.env` file in the project root.
   - Add your API key:
     ```env
     VITE_OPENWEATHER_API_KEY=your_api_key_here
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

- **Current Location**: Upon opening the app, it fetches your location-based weather.
- **Search City**: Use the search bar to find weather details for any city.
- **24-hour Temperature Graph**: Visualize the temperature trends in an interactive graph.
- **Favorites**: Mark cities as favorites for quick access.
- **Dark/Light Mode**: Switch themes using the toggle button in the header.

## Components

### Main Components:

- `WeatherDisplay`: Shows weather details for the current location or searched city.
- `ForecastGraph`: Displays a graphical representation of the temperature trend for the next 24 hours.
- `SearchBar`: Allows users to search for a city.
- `Favorites`: Manages and displays the list of favorite cities.


## API Integration

- **Endpoint**: The app integrates with a Weather API to fetch real-time data.
- **Data Fetching**: Uses TanStack Query for efficient caching and state management.
- **Mutations**: For updating favorites and search history.


## Acknowledgments

- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TanStack Query](https://tanstack.com/query/latest)
- [ShadCN](https://shadcn.dev/)
- [Weather API](https://www.weatherapi.com/)
