import React from "react";

function UsaWorkVisaPage() {
    return (
        <div className="usa-work-visa-documents">
            <h1>German Work Visa USA</h1>
            <h2>Please note that all copies of your documents have to be:</h2>
            <span>
                <p>In DIN A4 size</p>
                <p>Complete and readable</p>
                <p>Not stapled</p>
            </span>
            <div className='usa-work-visa'>
                <h3>Required Documents:</h3>
                <ul>
                    <li>Two (2) fully completed and signed applications including declarations pursuant to Section 54 Residence Act</li>
                    <li>Two (2) recent biometric passport photos </li>
                    <li>Valid and personally signed passport issued within the last 10 years, with at least 2 blank (visa) pages</li>
                    <li>Two (2) uncertified copies of the data page of your valid passport</li>
                    <li>Residence permit in the U.S., e.g. Visa, Green Card, U.S. passport</li>
                    <li>Proof of address, e.g. valid driver's license, utility bill, lease</li>
                    <li>Completed form signed by your employer: Declaration of employment (original with two (2) copies)</li>
                    <li>Proof of qualification University qualification (all pages, original and two (2) copies). If your university degree does not state the courses you studied, please also submit your transcript.</li>
                    <li>Proof of recognition of the qualification: ANABIN printouts or ZAB.</li>
                    <li>Proof of housing in Germany incl. full address (e.g. rental agreement, hotel reservation or invitation letter in case of private accommodation with name, full address and passport copy of the inviting person)</li>
                    <li>Proof of adequate health insurance cover</li>
                    <li>Processing fee: Payable in cash only. Conversion into USD is made based on the exchange rate at the time of the application.</li>

                </ul>
            </div>
            <p className="further-info">For further and detailed information regarding every single document, please click <a className="here-btn" href="https://www.germany.info/blob/2435486/00ddea91c557d5dc8ae7371a9a1cdfd0/skilled-workers-holding-a-university-degree-data.pdf">HERE</a></p>

            <p className="additional-info">
                <span className="please-note">PLEASE NOTE:</span> In case you have all of the above documents and a salary over 58.400€ or a salary over 45,552€ in a "MINT" profession, then you might be eligible for the Blue card type of visa. Please click <a className="here-btn" href="https://www.germany.info/blob/2435484/7a6f62597fa329888121e68d3f0f0511/eu-blue-card-data.pdf">HERE</a> for further information about it.  Additionally, the German Missions reserve the right to ask for additional documents or the verification of certificates, for which additional fees would be charged.
            </p>
            <p>  </p>
        </div>
    );
}

export default UsaWorkVisaPage;