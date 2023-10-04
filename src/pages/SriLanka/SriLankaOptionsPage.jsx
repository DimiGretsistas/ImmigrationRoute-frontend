import React from 'react';
import { Link } from 'react-router-dom';
import Colombo from '../../assets/colombo1.jpeg'

function SriLankaOptionsPage() {
    const visaOptions = [
        { name: 'I am going to work in Germany', link: '/sriLanka-to-germany/work' },
        { name: 'I am bringing my family to Germany', link: '/sriLanka-to-germany/family-reunion' },
        { name: 'I am going to study in Germany', link: '/sriLanka-to-germany/student' },
        { name: 'I am going to seek a job in Germany', link: '/sriLanka-to-germany/jobseeker' },
    ];

    return (
        <div className="visa-options-container">
            <h1>Applying for a German Visa from Sri Lanka</h1>
            <p>
                Are you living in Sri Lanka  and are planning to move to Germany for work, study or any other reason? Then choose
                the the purpose of your future stay in Germany and explore your options for each purpose of stay.
            </p>
            <img className='colombo' src={Colombo} />

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

export default SriLankaOptionsPage;
