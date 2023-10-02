import React from 'react';
import { Link } from 'react-router-dom';
import map from '../assets/map-3.png'

function CurrentPlace() {
  const countries = [
    { name: 'Pakistan', path: '/pak' },
    { name: 'India', path: '/ind' },
    { name: 'Sri Lanka', path: '/sriLanka' },
    { name: 'USA', path: '/usa' },
    { name: 'New Zealand', path: '/newZealand' },
    { name: 'Germany', path: '/ger' }
  ];

  return (
    <div className="currently-living-in-container">
      <h2>When applying for a german visa, you will need to book an appointemnt at the nearest German Embassy in your jurisdiction. Please choose below the country you are currently residing in.</h2>
      <img className='map' src={map} />

      <div className="country-buttons">
        {countries.map((country, index) => (
          <Link to={country.path} key={index} className="country-button">
            <button>{country.name}</button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CurrentPlace;
