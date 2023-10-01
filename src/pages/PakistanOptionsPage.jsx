import React from 'react';
import { Link } from 'react-router-dom';

function PakistanOptionsPage() {
  const visaOptions = [
    { name: 'Tourist Visa', link: 'pakistan-to-germany/tourist' },
    { name: 'Work Visa', link: '/pakistan-to-germany/work' },
    { name: 'Student Visa', link: '/pakistan-to-germany/student' },
    { name: 'Family Reunion Visa', link: '/pakistan-to-germany/family-reunion' },
  ];

  return (
    <div className="visa-options-container">
      <h1>Applying for a German Visa from Pakistan</h1>
      <p>
        Are you living in Pakistan and are planning to move to Germany for work, study or any other reason? Then choose
        the box which meets your current case the most and find out all the required documents needed for the type of visa oyu are eligible for.
      </p>
      <div className="visa-buttons">
        {visaOptions.map((option, index) => (
          <Link key={index}
            to={option.link}
            style={{ textDecoration: 'none' }}>
            <button className="visa-option-button">{option.name}</button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PakistanOptionsPage;
