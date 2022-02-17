import React, {useState} from 'react';
import axios from 'axios';
import CurrentWeatherCard from '../components/card-component/CurrentWeatherCard';


const Home = () => {

  const [weatherData, setWeatherData] = useState();
  const [userLocation, setUserLocation] = useState('');

  const apiKey = 'b739f9dce98a4420b36175641221102';

  const baseUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${userLocation}&aqi=no`;

  const handleChange = (e) => {
    setUserLocation(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(baseUrl)
      .then((info) => {
        setWeatherData(info.data);
        console.log(weatherData);
      })
      .catch((err) => {
        console.log("NOOOOO!!!!", err.message);
      });
    }
    

    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className='location-input'  onChange={handleChange}/>
        <button className='button-search'>Search</button>
      </form>
      <br/>
      
      <h1>Current Weather</h1>
      { weatherData === [] || weatherData === undefined ? <div></div> : 
        <div>
      <CurrentWeatherCard cityName={weatherData.location.name} stateName={weatherData.location.region} currentTime={weatherData.location.localtime} icon={weatherData.current.condition.icon} temp={weatherData.current.temp_f} wind={weatherData.current.wind_mph}/>
    </div>
}
    </div>
  )
}

export default Home;
