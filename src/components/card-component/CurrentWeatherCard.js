import React from 'react';

const CurrentWeatherCard = ({ cityName, stateName, currentTime, icon, temp, wind }) => {
  return (
  <div>
    <div className='current-weather'>
        <h2>{cityName}, {stateName}</h2>
        {/* put in clock? */}
        <h3>{currentTime}</h3>
        <img src={icon}/>
        <p>Current Temperature:{temp} Wind: {wind}</p>
    </div>
  </div>
  )
};

export default CurrentWeatherCard;
