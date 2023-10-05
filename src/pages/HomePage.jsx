import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Berlin from '../assets/berlin-3.jpg'
function HomePage() {

  return (
    <div>
      <h1 className="hello-title">Welcome to ImmigrationRoute!</h1>
      <h2 className='hello-subtitle'> With just four simple clicks, you can discover the visa type you qualify for in Germany.  </h2>
      <p> Once you have signed up or logged in, you'll gain access to explore your visa eligibility and learn about the necessary documents for your specific visa category.</p>
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