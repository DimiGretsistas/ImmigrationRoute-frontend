import React from 'react';

function PurposeOfStayPage() {
  return (
    <div className="purpose-of-stay-container">
      <div className="text-container">
        <h1>Purpose of Stay in Germany</h1>
        <p>
          If you plan to visit Germany and require a visa, it's important to
          specify the purpose of your stay. Germany offers various types of
          visas depending on your intended activities, such as tourism, work,
          study, or family reunion. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nulla facilisi. Nulla eget metus quis libero
          pharetra mattis.
        </p>
        <a
          href="https://example.com/germany-visa-info"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More about Visa Types
        </a>
      </div>
      <div className="info-container">
        <h2>Common Visa Categories</h2>
        <ul className="button-list">
          <li>
            <button className="visa-button">Tourist Visa (Schengen Visa)</button>
          </li>
          <li>
            <button className="visa-button">Work Visa</button>
          </li>
          <li>
            <button className="visa-button">Student Visa</button>
          </li>
          <li>
            <button className="visa-button">Family Reunion Visa</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PurposeOfStayPage;
