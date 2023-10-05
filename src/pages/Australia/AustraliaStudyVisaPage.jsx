import React from "react";

function AustraliaStudyVisaPage() {
    return (
        <div className="aus-study-visa-documents">
            <h1>German Study Visa Australia</h1>
            <h2>Please note that all copies of your documents have to be:</h2>
            <span>
                <p>In DIN A4 size</p>
                <p>Complete and readable</p>
                <p>Not stapled</p>
            </span>
            <div className='aus-study-visa'>
                <h3>Required Documents:</h3>
                <ul>
                    <li>Completed application form. Please fill out the online application form, print it out, sign it and submit it along with the other documents. Please ensure that the barcode is printed in high quality.</li>
                    <li>recent passport photograph (35 x 45 mm, front facial view, white background)</li>
                    <li>your national passport (validity of which has to exceed your stay by at least three months) - original plus 1 copy of the data page</li>
                    <li>proof of visa status in Australia (if applicable)</li>
                    <li>Admission Letter from a University in Germany or conditional Acceptance Letter</li>
                    <li>Proof of Language proficiency in which the course will be conducted</li>
                    <li>Proof of means of subsistence: Evidence that you have sufficient funds to support yourself while living in Germany (minimum of 934.00 EUR per month) will be needed for your visa application.</li>
                    <li>Evidence of health/travel insurance valid in Germany</li>
                    <li>prepaid registered mail envelope with your address (if you request return by mail). Please note that the German Missions will not be held responsible for any loss or damage of passports due to postal or courier service delivery.</li>
                    <li>visa fee: € 75 by credit card (VISA or MasterCard) or equivalent in cash (AU$). Other payment methods (e.g. with smart watch, mobile phone) not accepted.</li>
                </ul>
            </div>
            <p className="further-info">For further and detailed information regarding every single document, please click <a className="here-btn" href="https://australien.diplo.de/au-en/service/01-visa/student-visa/2073728">HERE</a></p>
            <p className="additional-info">
                <span className="please-note">PLEASE NOTE:</span> If you intend to study in Germany, to enroll in a German language course or conduct scientific research, you need to apply for a visa.
                Australian citizens should apply for a student visa / residence permit after entering Germany at the local immigration authority. This also applies to citizens of Canada, Israel, Japan, New Zealand, Korea, the United Kingdom, and the United States of America. Only in exceptional circumstances should citizens of these countries apply at the German Consulate General in Sydney before entering Germany.
            </p>

        </div>
    );
}

export default AustraliaStudyVisaPage;