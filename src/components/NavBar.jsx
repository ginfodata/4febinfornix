import React from 'react';
import {Link} from "react-router-dom";



const NavigationBar = () => {
  
  return (
    <>
    
 
    <div>
 

    <nav className="navbar">
      
      <ul className="nav-list">
         <li>
         <Link to="/home">home</Link>
         </li>
        <li>
        <Link to="/About">about</Link>
        </li>
        <li>
        <Link to="/Services">services</Link>
        </li>
        <li>
        <Link to="/Contact">contact</Link>
        </li>
        <li>
        <Link to="/Login">login</Link>
        </li>
        <li>
        <Link to="/Signup">signup</Link>
        </li>
      </ul>
    </nav>
    </div> 
    </>
  );
};

export default NavigationBar;
