# Project Overview

## Project Links
- [https://git.generalassemb.ly/jasonhensley1989/			project-2-react]()
- [jasonhensley1989.github.io]()
- [https://codesandbox.io/s/react-check-api-forked-1hptg]()

## Project Description

A weather application components: nav, 3day weather container 3 cards, astronomy component, sports, and weather history.
Route to forecast, current weather, sports, etc...

## API

I chose weather api, it has good documentation, multiple categories


```
{data: {{
"location": {
"name": "Toledo",
"region": "Ohio",
"country": "USA",
"lat": 41.64,
"lon": -83.51,
"tz_id": "America/New_York",
"localtime_epoch": 1644602877,
"localtime": "2022-02-11 13:07"
},
"current": {
"last_updated_epoch": 1644598800,
"last_updated": "2022-02-11 12:00",
"temp_c": 3.3,
"temp_f": 37.9,
"is_day": 1,
"condition": {
"text": "Light rain",
"icon": "//cdn.weatherapi.com/weather/64x64/day/296.png",
"code": 1183
},
"wind_mph": 16.1,
"wind_kph": 25.9,
"wind_degree": 220,
"wind_dir": "SW",
"pressure_mb": 1002,
"pressure_in": 29.6,
"precip_mm": 0.6,
"precip_in": 0.02,
"humidity": 82,
"cloud": 100,
"feelslike_c": -2.4,
"feelslike_f": 27.7,
"vis_km": 16,
"vis_miles": 9,
"uv": 1,
"gust_mph": 30.9,
"gust_kph": 49.7
}
}} }
```
<!-- working version of api, click button 2x https://codesandbox.io/s/react-check-api-forked-1hptg -->

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [https://res.cloudinary.com/dthpryqyl/image/upload/v1644614198/1024_LAYOUT_e6lqe9.png]()

-[https://res.cloudinary.com/dthpryqyl/image/upload/v1644614198/Blank_diagram_1_efiqx4.png]()

- [https://res.cloudinary.com/dthpryqyl/image/upload/v1644617531/react_architecture_layout_mlfbgc.png]()

#### MVP EXAMPLE
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Routes | H | 2hr | 1.5hr | hr |
| Nav-c| H | 1hr | 1hr |
| Footer-c | H | 1hr | hr |
| API Implementation | H | 4hr | hr |
| Main Forecast-c | H | 4hr | 4hr |  
| Form to submit zip | H | 1hr|  1hr | 
| react-strap | H | 4hr|  hr |
| responsive | M | 1hr | hr|
| Astronomy -c| L | 3hrs|  hr | 

- 21 Hours Total

#### PostMVP EXAMPLE

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Dropdown cards | H | 3hr | hr |
| Images/Icons on weather conditons | H | 3hr | hr |

- 6hrs Total

- Add localStorage or firebase for storage

## Additional Libraries
ReactStrap, Axios

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
