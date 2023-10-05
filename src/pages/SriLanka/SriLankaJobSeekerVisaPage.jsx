import React from 'react';

function SriLankaJobSeekerVisaPage() {
    return (
        <div className="sriLanka-jobseeker-visa-documents">
            <h1>German Job Seeker Visa Sri Lanka</h1>
            <h2>Please note that all copies of your documents have to be:</h2>
            <span>
                <p>In DIN A4 size</p>
                <p>Complete and readable</p>
                <p>Not stapled</p>
            </span>
            <div className='sriLanka-jobseeker-visa'>
                <h3>Required Documents:</h3>
                <ul>
                    <li>Filled in application form (national visa) + declaration form (Section 54(2) 8 in conjunction with Section 53 of the Residence Act)</li>
                    <li>3 biometric passport photos (not older than 6 months)</li>
                    <li>Copy of all pages of your passport (A4 size copy)</li>
                    <li>Motivation letter including details about your planned job search (sector, region, intended place in Germany) + CV</li>
                    <li>O/L & A/L examination certificates</li>
                    <li>Academic degree + other experience certificates for future employment in Germany OR vocational training certificate + other experience certificates for future employment in Germany</li>
                    <li>If applicable (regulated profession): “Gleichwertigkeitsbescheid” + “Berufsausübungserlaubnis“ or “Defizitbescheid“</li>
                    <li>If applicable (vocational training certificate + not regulated profession):“Gleichwertigkeitsbescheid” or “Defizitbescheid“</li>
                    <li>If applicable (university degree + not regulated profession): print of ANABIN proofs of recognition or ZAB</li>
                    <li>Proof of means of subsistence: Blocked account (minimum 939 € per month) OR “Verpflichtungserklärung” by a sponsor in Germany. </li>
                    <li>Information regarding your intended first address in Germany (e.g.tenancy agreement or hotel reservation or invitation letter in case ofprivate accommodation)</li>
                    <li>Fee: EUR 75 (to be paid in Rs., by credit card or cash) – no refund in caseof rejection! Conversion into Rs. is made based on the exchange rate at the time of application.</li>
                </ul>
            </div>
            <p className='further-info'>
                For further and detailed information regarding every single document, please click <a className='here-btn' href="https://colombo.diplo.de/blob/2352252/7d8328071539650d9212212e94928efd/job-seeker-data.pdf">HERE</a>.
            </p>
            <p className='additional-info'>
                <span className="please-note">PLEASE NOTE:</span> False or falsified documents will lead to the refusal of the visa and / or further consequences. Incomplete applications may result in refusal. Complete documentation does not guarantee a visa approval. The German Embassy Colombo reserves the right to ask for additional documents and / or call the applicant for additional information or an interview.
            </p>

        </div>
    );
}

export default SriLankaJobSeekerVisaPage;
