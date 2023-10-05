import React from "react";

function PakistanWorkVisaPage() {
    return (
        <div className="pak-work-visa-documents">
            <h1>German Work Visa Pakistan</h1>
            <h2>Please note that all copies of your documents have to be:</h2>
            <span>
                <p>In DIN A4 size</p>
                <p>Complete and readable</p>
                <p>Not stapled</p>
            </span>
            <div className='pak-work-visa'>
                <h3>Required Documents:</h3>
                <ul>
                    <li>Application Form</li>
                    <li>Passport Copy</li>
                    <li>ID Card copy</li>
                    <li>Application declarations</li>
                    <li>Appointment confirmation</li>
                    <li>Written explanation for past visa refusals</li>
                    <li>Curriculum vitae</li>
                    <li> Declaration regarding a contract of employment form - completed and signed by your employer</li>
                    <li> Employment contract - signed by you and your employer, where necessary with updated joining date</li>
                    <li>Detailed job description by your employer (e.g. job offer) </li>
                    <li> Pre-approval (only if applicable, not mandatory)</li>
                    <li>Academic diplomas including transcripts - both attested by the HEC</li>
                    <li>Proof of your academic diplomas recognition: ANABIN printouts or ZAB </li>
                    <li> Travel health insurance - valid from intended date of travel untill begin of employment </li>
                    <li>Visa Fee in the amount of 75 EUR, to be paid in PKR Completeness of application</li>


                </ul>
            </div>
            <p className="further-info">For further and detailed information regarding every single document, please click <a className="here-btn" href="https://pakistan.diplo.de/blob/2582906/b20245606d8283b822cad5129bb55710/skilled-worker-holding-a-university-degree-data.pdf">HERE</a></p>

            <p className="additional-info">
                <span className="please-note">PLEASE NOTE:</span> In case you have all of the above documents and a salary over 58.400€ or a salary over 45,552€ in a "MINT" profession, then you might be eligible for the Blue card type of visa. Please click <a className="here-btn" href="https://pakistan.diplo.de/pk-en/service/-/2593356">HERE</a> for further information about it. Additionally, please note that the German Missions reserve the right to ask for additional documents or the verification of certificates, for which additional fees would be charged.
            </p>

        </div>
    );
}

export default PakistanWorkVisaPage;