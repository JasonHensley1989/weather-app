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
    <div className='three-day-forecast'>
      <section>Tomorrow</section>
      <section>Day After Tomorrow</section>
      <section>3 days out</section>
    </div>
  </div>
  )
};

export default CurrentWeatherCard;
