import React from 'react';
import { Link } from 'react-router-dom';

function CurrentlyLivingInPage() {
  return (
    <div className="currently-living-in-container">

      <div className="country-buttons">
        <Link to="/pak" className="country-button">
          <button>Pakistan</button>
        </Link>

        <Link to="/ind" className="country-button">
          <button>India</button>
        </Link>
        
        <Link to="/col" className="country-button">
          <button>Columbia</button>
        </Link>
      </div>
    </div>
  );
}

export default CurrentlyLivingInPage;
