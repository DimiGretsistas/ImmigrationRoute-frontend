import React from 'react';
import { Link } from 'react-router-dom';
import Kiel from '../../assets/kiel.jpeg'
function GermanyOptionsPage() {
    const visaOptions = [
        { name: 'I am already working in Germany', link: '/in-germany/work' },
        { name: 'My family is already in Germany', link: '/in-germany/family-reunion' },
        { name: 'I am already studying in Germany', link: '/in-germany/student' },
        { name: 'I am seeking a job while in Germany', link: '/in-germany/jobseeker' },
    ];

    return (
        <div className="visa-options-container">
            <h1>Applying for a Residence Permit while in Germany</h1>
            <p>
                Are you already in Germany and are looking to renew the duration of your stay(visa)? Then choose
                the purpose of your stay in Germany and find out more specific information regarding the application steps and documents.
            </p>
            <img className='kiel' src={Kiel} />

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

export default GermanyOptionsPage;
