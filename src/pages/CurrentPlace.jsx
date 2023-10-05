import React from 'react';
import { Link } from 'react-router-dom';
import map from '../assets/map-3.png'

function CurrentPlace() {
  const countries = [
    { name: 'Pakistan', path: '/pak' },
    { name: 'India', path: '/ind' },
    { name: 'Sri Lanka', path: '/sriLanka' },
    { name: 'USA', path: '/usa' },
    { name: 'Australia', path: '/aus' },
    { name: 'Germany', path: '/ger' }
  ];

  return (
    <div className="currently-living-in-container">
      <h3>When seeking a German visa, it is essential to schedule an appointment at the closest German Embassy within your region. Please select your current country of residence from the options below.</h3>
      <img className='map' src={map} />

      <div className="country-buttons">
        {countries.map((country, index) => (
          <Link to={country.path} key={index} className="country-button">
            <button className="current-button">{country.name}</button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CurrentPlace;
