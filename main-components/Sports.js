import React, {useState} from 'react';
import axios from 'axios';
import SportsCard from '../components/card-component/SportsCard';

const Sports = () => {

  const [sportsData, setSportsData] = useState([]);
  const [userLocation, setUserLocation] = useState('');

  const apiKey = 'b739f9dce98a4420b36175641221102';

  const baseUrl = `http://api.weatherapi.com/v1/sports.json?key=${apiKey}&q=${userLocation}&aqi=no`;

  const handleChange = (e) => {
    setUserLocation(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(baseUrl)
      .then((info) => {
        setSportsData(info.data.football);
        console.log(sportsData);
      })
      .catch((err) => {
        console.log("NOOOOO!!!!", err.message);
      });
    }
    
   const footballInfo =  sportsData.map((game, index) => {
      return (
        <SportsCard
          stadium={game.stadium}
          key={index}
        />
      )
   }) 
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className='location-input'  onChange={handleChange}/>
        <button className='button-search'>Search</button>
      </form>
      <br/>
      
      <h1>{footballInfo}</h1>
      { sportsData === [] || sportsData === undefined ? <div></div> : 
        <div>
      
    </div>
}
    </div>
  )
}

export default Sports;
