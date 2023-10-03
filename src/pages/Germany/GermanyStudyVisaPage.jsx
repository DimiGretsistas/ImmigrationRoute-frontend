import React from "react";

function GermanyStudyVisaPage() {
    return (
        <div className="ger-study-visa-documents">
            <h1>German Study Permit
                (Aufenthaltserlaubnis zum Studium)
            </h1>
            <h2>Please note that all copies of your documents have to be:</h2>
            <span>
                <p>In DIN A4 size</p>
                <p>Complete and readable</p>
                <p>Not stapled</p>
            </span>
            <div className='aus-study-visa'>
                <h3>Required Documents:</h3>
                <ul>
                    <li>Valid passport</li>
                    <li>1 recent biometric photo</li>
                    <li>35mm x 45mm, frontal shot with a neutral facial expression and closed mouth looking straight into the camera, light background</li>
                    <li>Form “Application for a residence permit” (Only required for first-time application.)</li>
                    <li>Proof of subsistence: when issued for the first time: for example, a blocked account at a German bank for 10,872.00 euros (current value for 2023) / declaration of commitment on an official form / scholarship certificate / notarized declaration from the parents that they will secure their livelihood for the duration of their studies with evidence of parents' income in the last six months
                        in case of extension: bank statements from the last six months.</li>
                    <li>Health insurance</li>
                    <li>Proof of a secure livelihood also includes sufficient health insurance coverage. People with statutory health insurance are adequately insured. </li>
                    <li>Certificate of enrollment or conditional admission</li>
                    <li>Proof of primary residence in Berlin</li>
                    <li>Certificate of registration of the apartment (registration confirmation) OR Rental agreement and move-in confirmation from the landlord</li>
                </ul>
            </div>
            <p>For further and detailed information regarding every single document, please click <a href="https://service.berlin.de/dienstleistung/305244/">HERE</a></p>
        </div>
    );
}

export default GermanyStudyVisaPage;