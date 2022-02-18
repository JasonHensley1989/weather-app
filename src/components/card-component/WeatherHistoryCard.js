import React from 'react';

const WeatherHistoryCard = ({ date, humidity, temp, visibility, condition, icon}) => {
  return (
  <div>
    <div className='current-weather'>
        <h2>{date}</h2>
        {/* put in clock? */}
        <h3>Temperature: {temp} f </h3>
        <h3>{condition}</h3>
        <img src={icon}/>
        <br/>
        <p>Visibility: {visibility} Humdity: {humidity}</p>
    </div>
    
      
    
  </div>
  )
};

export default WeatherHistoryCard;
