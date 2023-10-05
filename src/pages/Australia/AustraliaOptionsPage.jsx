import React from 'react';
import { Link } from 'react-router-dom';
import Perth from '../../assets/perth.jpeg'

function AustraliaOptionsPage() {
    const visaOptions = [
        { name: 'I am going to work in Germany', link: '/aus-to-germany/work' },
        { name: 'I am bringing my family to Germany', link: '/aus-to-germany/family-reunion' },
        { name: 'I am going to study in Germany', link: '/aus-to-germany/student' },
        { name: 'I am going to seek a job in Germany', link: '/aus-to-germany/jobseeker' },
    ];

    return (
        <div className="visa-options-container">
            <h1>Applying for a German Visa from Australia</h1>
            <p>
            If you are currently residing in Australia and contemplating a move to Germany for employment, education, or any other purpose, kindly select the specific purpose of your intended stay in Germany. This will allow you to explore the various options available for each type of stay.


            </p>
            <img className='perth' src={Perth} />

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

export default AustraliaOptionsPage;
