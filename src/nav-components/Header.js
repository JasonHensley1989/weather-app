import React from 'react';
import { 
  Link } from 'react-router-dom';


const Header = () => {
  return(
   <div className='header'>
       <Link className="links" to="/home">Home</Link>
       <Link className="links" to="/astronomy">Astronomy</Link>
       <Link className="links" to="/sports">Sports</Link>
       <Link className="links" to="/weatherhistory">Weather History</Link>
  </div>
  )
};

export default Header;
