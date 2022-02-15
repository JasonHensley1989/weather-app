import React from "react";

const AstronomyCard = ({ cityName, stateName, sunrise, sunset, moonrise, moonset, moon_phase, moon_illumination}) => {
    return (
        <div className="astronomy-card">
            <h2>{cityName}{stateName}</h2>
            <p>Sunrise:{sunrise} Sunset:{sunset}</p> 
            <p>Moonrise:{moonrise} Moonset:{moonset}</p> 
            <p>Moon Phase:{moon_phase} Moon Illumination:{moon_illumination}</p>
        </div>
    )
};

export default AstronomyCard;