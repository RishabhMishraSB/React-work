import React from 'react';
import './Nav.css'
import {Link} from 'react-router-dom'
function Navbody() {

    return (
        <div className='container'>
           <Link to='/login'>
            <button id='login'>Login</button>
            </Link>
            <span></span>
            <Link to='/register'>
            <button id='register'>Register</button>
            </Link>
            <span></span>
            <input type='text' id='search' placeholder='Search..'></input>
          
            <br></br>
            <div id='content'>
              <h1>Explore the World!</h1>
              <h4>Camping experience!</h4>
              <h5>Lets See!</h5>
              <Link to='/Carousel'>
              <button id='home-btn'>Explore</button>
              </Link>
            </div>
            
        </div>
        
    );
}

export default Navbody;