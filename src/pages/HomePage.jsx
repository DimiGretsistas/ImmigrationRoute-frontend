import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Berlin from '../assets/berlin-3.jpg'
function HomePage() {

  return (
    <div>
      <h1 className="hello-title">Welcome to ImmigrationRoute!</h1>
      <h2 className='hello-subtitle'> Here you can find out the visa type you are eligible for in Germany, only with 4 clicks </h2>
      <p> Once you have signed up and/or log in, you will be able to explore your visa eligibility find out the required documents for your type of visa</p>
      <img className='the-world' src={Berlin} />
      <div className="button-container">
        <Link to='/currentPlace'>
          <button className="start-button">Get Started!</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;