import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Astronomy from '../main-components/Astronomy';
import Sports from '../main-components/Sports';
import WeatherHistory from '../main-components/WeatherHistory';
import Home from '../main-components/Home';


const RoutesData = () => {
  return (
    <Routes>
        <Route exact path='/home'  element={<Home />}/>
        <Route path='/sports'  element={<Sports />}/>
        <Route path='/weatherhistory'  element={<WeatherHistory />}/>
        <Route path='/astronomy'  element={<Astronomy />}/>
    </Routes>
  )
};

export default RoutesData;
