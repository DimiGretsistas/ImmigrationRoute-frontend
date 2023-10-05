import React from 'react';
import germanyAustralia from '../../assets/aus-germany.jpg'

function AustraliaJobSeekerVisaPage() {
    return (
        <div className="usa-jobseeker-visa-documents">
            <h2>Persons holding an Australian passport may apply for their residence permit at the local immigration office (Ausländerbehörde) after arrival in Germany and without having obtained a visa prior to travelling to Germany.</h2>
            <h3>  Please keep in mind that you need to register your new residence (Anmeldung) with the authorities (Meldebehörde) within 2 weeks of having moved to Germany.</h3>

            <img className='germany-Australia' src={germanyAustralia} />

            <p className="further-info">You also need to apply for your residence permit at the local immigration office (Ausländerbehörde) within the first 90 days of your stay in Germany. We strongly recommend contacting the local immigration office as soon as possible after your arrival in Germany in order to secure a timely appointment.</p>


            <p className='additional-info'>
                <span className="please-note">PLEASE NOTE</span> You may only take up employment once you have been issued a residence permit explicitly authorizing such employment.
                You may also choose to apply for a visa prior to travel, effectively permitting employment from the first day of visa validity.
            </p>
        </div>
    );
}

export default AustraliaJobSeekerVisaPage;
