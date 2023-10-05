import React from "react";

function GermanyFamilyReunionVisaPage() {
    return (
        <div className="ger-family-reunion-visa-documents">
            <h1>German Family Reunion Permit
                (Aufenthaltserlaubnis für Ehepartner und Kinder)
            </h1>
            <h2>Please note that all copies of your documents have to be:</h2>
            <span>
                <p>In DIN A4 size</p>
                <p>Complete and readable</p>
                <p>Not stapled</p>
            </span>
            <div className='ger-family-reunion-visa'>
                <h3>Required Documents:</h3>
                <ul>
                    <li>Application form(for each person who would like to apply for a residence permit.)</li>
                    <li>Valid passport</li>
                    <li>Current biometric passport photo(The photo must be current. It must meet the photo requirements for electronic passports.)</li>
                    <li>To join your spouse: marriage certificate / To join your life partner: partnership certificate /For bringing children together: birth certificates(Under certain circumstances: proof of custody) </li>
                    <li>For all foreign documents: translation, possibly additional apostille or legalization</li>
                    <li>Rental agreement stating the current rent amount</li>
                    <li>Language certificate In principle, a language certificate showing basic German language skills at level A1 must be presented</li>
                    <li>Health insurance( People with statutory health insurance are adequately insured).</li>
                    <li>Evidence of family livelihood: For employees: employment contract, current employment certificate, the last 6 pay slips / For students and trainees: for example, bank statements from the last 6 months / proof of scholarships / blocked account / declarations of commitment / other proof of income, such as from student temporary jobs</li>
                    <li>Proof of primary residence in Berlin: Certificate of registration of the apartment (registration confirmation) or
                        Rental agreement and move-in confirmation from the landlord</li>
                    <li>Family life : Partners/Spouses must live in a shared apartment in Berlin.</li>


                </ul>
            </div>
            <p className="further-info">For further and detailed information regarding every single document, please click <a className="here-btn" href="https://service.berlin.de/dienstleistung/327471/">HERE</a></p>
        </div>
    );
}

export default GermanyFamilyReunionVisaPage;