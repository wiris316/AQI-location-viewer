# AQI Location Viewer

## Project Overview: 
The application integrates the WAQI (World Air Quality Index) API to offer real-time air quality monitoring across 1,000+ city-level data points. It provides users with real-time Air Quality Index (AQI) information for their current location and enables them to search for other cities to view their respective AQI data. Utilizing the AQICN scale, the application categorizes AQI levels into color-coded indicators, providing standardized air quality assessments. 

<p align="center">
 <img src="https://github.com/wiris316/AQI-location-viewer/assets/124114572/14c961d9-9fd3-49e7-8783-693f15d4646e" width="600"/>
</p>

| Category                            | Description                                                                                             |
|-------------------------------------|---------------------------------------------------------------------------------------------------------|
| Good (Green)                        | Indicates low levels of air pollution with minimal health risks.                                        |
| Moderate (Yellow)                   | Suggests moderate levels of air pollution that may pose health concerns for sensitive individuals.      |
| Unhealthy for Sensitive Groups (Orange) | Indicates elevated levels of pollutants that may affect individuals with respiratory or cardiovascular conditions, children, and the elderly. |
| Unhealthy (Red)                     | Signifies high levels of pollution that can have adverse health effects on the general population, with increased risks of respiratory and cardiovascular issues. |
| Very Unhealthy (Purple)             | Indicates severe air pollution levels that may cause significant health problems for everyone, with increased risks of respiratory and cardiovascular diseases. |
| Hazardous (Maroon)                  | Represents extremely high levels of pollution that pose immediate and severe health risks, requiring immediate action to mitigate exposure. |




## Key Features
- **Current Location AQI Display:** The application fetches and displays the AQI for the user's current location, providing instant access to local air quality information.
- **City Selection:** Users can search for and select other cities to view their respective AQI levels, allowing for easy comparison and assessment of air quality across different locations.
- **Color-Coded Categorization:** The AQI data is categorized according to the AQICN scale, with color-coded indicators representing different levels of air pollution. This visual representation helps users quickly interpret and gauge air quality conditions.

<p align="center">
<img src="https://github.com/wiris316/AQI-location-viewer/assets/124114572/60e91022-278a-44a1-b8c7-0468f3c2db30" width="700"/>
</p>

<div align="center">
 
![Typescript](https://img.shields.io/badge/Typescript-%23007ACC.svg?style=for-the-badge&logo=Typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white)
![SCSS](https://img.shields.io/badge/_-SCSS-C6538C.svg?style=for-the-badge)

</div>

## Prerequisites
To run this application, you will need to obtain an API token from <a href="https://aqicn.org/api/" target="_blank">here</a>. Create a ".env" file in the root directory and add the API token in the following format. 
```
AQI_TOKEN="YOUR_TOKEN_HERE"
``` 

## Getting Started
```
# Clone the repository
gh repo clone your-username/AQI-location-viewer

# Navigate to the project directory
cd AQI-location-viewer

# Install the dependencies
npm install

# Start the development server
npm start
```

