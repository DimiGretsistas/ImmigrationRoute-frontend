import React from 'react';

function ResultPage() {
  return (
    <div className="result-container">
      <div className="text-container">
        <h1>Results Page</h1>
        <p>
          Here are the results :
          
        </p>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          Learn more
        </a>
      </div>
      <div className="info-container">
        <h2>Additional Information</h2>
        <ul>
          <li>Info 1: .</li>
          <li>Info 2: .</li>
          <li>Info 3: .</li>
        </ul>
      </div>
    </div>
  );
}

export default ResultPage;