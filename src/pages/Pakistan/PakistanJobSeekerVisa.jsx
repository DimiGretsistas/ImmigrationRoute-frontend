import React from 'react';

function PakistanJobSeekerVisaPage() {
    return (
        <div className="pakistan-jobseeker-visa-documents">
            <h1>German Job Seeker Visa Pakistan</h1>
            <h2>Please note that all copies of your documents have to be:</h2>
            <span>
                <p>In DIN A4 size</p>
                <p>Complete and readable</p>
                <p>Not stapled</p>
            </span>
            <div className='pak-jobseeker-visa'>
                <h3>Required Documents:</h3>
                <ul>
                    <li>Application form</li>
                    <li>Passport Copy</li>
                    <li>ID Card Copy</li>
                    <li>Applications declarations</li>
                    <li>Appointment confirmation</li>
                    <li>Written explanation about any previous visa refusals</li>
                    <li>Curriculum vitae</li>
                    <li>Proof of job seeking preparation (job offer applications, job interview invitations, etc.)</li>
                    <li>Proof of sufficient financial means for living expenses before finding a job (At least 1.027€/monthly in blocked account)</li>
                    <li>Income proof and bank statements of the last 6 months of yourself or of your sponsor in Pakistan (only for Embassy Islamabad)</li>
                    <li>Proof of sufficient financial means for a return ticket</li>
                    <li>Academic Diplomas including transcripts</li>
                    <li>Proof of academic diploma’s recognition (ANABIN OR ZAB)</li>
                    <li>Health Insurance valid for the complete duration of stay in Germany</li>
                    <li>Visa Fee in the amount of €75, to be paid in PKR</li>
                </ul>
            </div>
            <p className='further-info'>
                For further and detailed information regarding every single document, please click <a href="https://pakistan.diplo.de/blob/2583220/838a74f80ad58de4340f2cd27ddd9c7a/jobseeker-data.pdf">HERE</a>.
            </p>
            <p className='additional-info'>
                <span className="please-note">PLEASE NOTE:</span> You also have to provide all original documents (including all of your passports). They will be returned to you on the same day (except the passport you intend to travel on which stays with the Embassy during the processing time of your visa application). Please also bring a pen.
            </p>

        </div>
    );
}

export default PakistanJobSeekerVisaPage;
