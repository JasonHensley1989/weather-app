import React, {useState} from 'react';
import axios from 'axios';
import WeatherHistoryCard from '../components/card-component/WeatherHistoryCard';


const WeatherHistory = () => {

  const [weatherHistoryData, setWeatherHistoryData] = useState([]);
  const [userLocation, setUserLocation] = useState('');
  

  const apiKey = 'b739f9dce98a4420b36175641221102';

  const baseUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${userLocation}&days=3`;

  const handleChange = (e) => {
    setUserLocation(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(baseUrl)
      .then((info) => {
        setWeatherHistoryData(info.data.forecast.forecastday);
        console.log(weatherHistoryData);
      })
      .catch((err) => {
        console.log("NOOOOO!!!!", err.message);
      });
    }
    
    
    const forecastInfo = weatherHistoryData.map((info, index) => {
      return ( 
        <div> <WeatherHistoryCard date={info.date} key={index} humidity={info.day.avghumidity} temp={info.day.avgtemp_f} visibility={info.day.avgvis_miles} condition={info.day.condition.text} icon={info.day.condition.icon}/> </div>
      )
    })


  return (
    <div>
      <form onSubmit={handleSubmit} className='weather-history-inputs'>
        <input className='location-input'  onChange={handleChange}/><button className='button-search-history'>Search by location</button>
      </form>
      <br/>
      
      <h1>Weather History</h1>
      {/* {  weatherHistoryData === [] || weatherHistoryData === undefined ? <div></div> : forecastInfo} */}
      {forecastInfo}
      
    </div>
  )
}

export default WeatherHistory;
