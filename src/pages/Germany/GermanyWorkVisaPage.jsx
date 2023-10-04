import React from "react";

function GermanyWorkVisaPage() {
    return (
        <div className="ger-work-visa-documents">
            <h1>German Work Permit for University Degree Holders
                (Aufenthaltserlaubnis für Fachkräfte mit akademischer Ausbildung
                )
            </h1>
            <h2>Please note that all copies of your documents have to be:</h2>
            <span>
                <p>In DIN A4 size</p>
                <p>Complete and readable</p>
                <p>Not stapled</p>
            </span>
            <div className='ger-work-visa'>
                <h3>Required Documents:</h3>
                <ul>
                    <li>Valid passport</li>
                    <li>1 recent biometric photo(35mm x 45mm, frontal shot with a neutral facial expression and closed mouth looking straight into the camera, light background)</li>
                    <li>Employment contract (original)</li>
                    <li>Proof of qualification as a specialist with academic training: a German university degree, university certificate or
                        a recognized foreign university degree, assessment in the Anabin database or
                        a foreign university degree that is comparable to a German university degree, individual and fee-based assessment by the ZAB </li>
                    <li>Declaration of employment form (completed)</li>
                    <li>Form application for a residence permit (completed)</li>
                    <li>Rental agreement or purchase agreement stating the living space and the monthly rental costs (original)</li>
                    <li>Employment certificate (only if the residence permit is extended)</li>
                    <li>Certificate from the employer about the duration of the unterminated employment relationship (not older than 14 days)</li>
                    <li>Proof of net earnings for the first 2 and last 2 months</li>
                    <li>Proof of your health insurance: electronic health card with photo & current confirmation of health insurance</li>
                    <li>Proof of primary residence in Berlin: Certificate of registration of the apartment (registration confirmation) or
                        Rental agreement and move-in confirmation from the landlord</li>
                    <li>Pre-approval from the Federal Employment Agency (Not needed if you are eligible for a blue card type of permit. See link below!) </li>


                </ul>
            </div>
            <p>PLEASE NOTE: In case you have all of the above documents and a salary over 58.400€ or a salary over 45,552€ in a "MINT" profession, then you might be eligible for the Blue card type of permit. Please click <a href="https://servihttps://service.berlin.de/dienstleistung/324659/en/ce.berlin.de/dienstleistung/329328/">HERE</a> for futher information about it  </p>

            <p>For further and detailed information regarding every single document, please click <a href="https://service.berlin.de/dienstleistung/329328/">HERE</a></p>
        </div>
    );
}

export default GermanyWorkVisaPage;