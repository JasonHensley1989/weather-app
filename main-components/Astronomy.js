import React, {useState} from 'react';
import axios from 'axios';
import AstronomyCard from '../components/card-component/AstronomyCard';

const Astronomy = () => {

  const [astronomyData, setAstronomyData] = useState();
  const [userLocation, setUserLocation] = useState('');

  const apiKey = 'b739f9dce98a4420b36175641221102';

  const baseUrl = `http://api.weatherapi.com/v1/astronomy.json?key=${apiKey}&q=${userLocation}&aqi=no`;

  const handleChange = (e) => {
    setUserLocation(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(baseUrl)
      .then((info) => {
        setAstronomyData(info.data);
        console.log(astronomyData);
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
      
      <h1>Astronomy</h1>
      { astronomyData === [] || astronomyData === undefined ? <div></div> : 
        <div>
      <AstronomyCard  
        cityName={astronomyData.location.name} 
        stateName={astronomyData.location.region} 
        sunrise={astronomyData.astronomy.astro.sunrise}
        sunset={astronomyData.astronomy.astro.sunset} 
        sunrise={astronomyData.astronomy.astro.sunrise}
        moonrise={astronomyData.astronomy.astro.moonrise} 
        moonset={astronomyData.astronomy.astro.moonset}
        moon_phase={astronomyData.astronomy.astro.moon_phase} 
        moon_illumination={astronomyData.astronomy.astro.moon_illumination}
       />
    </div>
}
    </div>
  )
}

export default Astronomy;
