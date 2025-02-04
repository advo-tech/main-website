import React from "react"
import Layout from "../components/layout"

export default () => (
    <Layout
        pageMeta={{
            title:"Submit"
        }}
    >
        <div class="container">
            <h1 class="header">SUBMISSION GUIDELINES</h1>
            <div className="center">
                <p><i>The Harvard Advocate</i> accepts submissions of art, fiction, and poetry of any form or length created by members of the Harvard community, as well as outside contributors at our discretion. All submissions are considered anonymously.</p>
            </div>
            <h1 class="header">Winter 2023 Issue</h1>
            <div className='center'>
                
                <p>Our Winter 2023 review period ends on Friday, October 14th, 2022.</p>

                {/* EXAMPLE CLOSED/OPEN SENTENCES. */}
                {/* <p>Submissions for our Fall 2022 issue is now closed. Winter Submissions will open October.</p> */}
                {/* <p>Our Fall 2022 review period ends on Friday, June 24th, 2022.</p> */}
            </div>
            <div className='center'>
            </div>
            <p></p>
            <p></p>
            <div class="center">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdHCYzDkX4ZAuip4NwjCeWXODfQSrheQDGEcgFApdhLrF35sg/viewform?usp=sf_link" class="btn btn-primary btn-150th">FICTION</a>
            </div>
            <ul>
            <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>We have no minimum or maximum word counts, but the work we publish tends to be between 700 and 7000 words.</span></li>
            <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Please include a cover letter and brief third-person biographical statement with your submission.</span></li>
            <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Attach your work as a Microsoft Word file. (Please consider double-spacing and using 12-point Times New Roman font with standard margins.)</span></li>
            <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Because submissions are considered anonymously, please make sure your name is not anywhere in the document.</span></li>
            <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Simultaneous submissions are accepted, but please let us know immediately if your work is accepted elsewhere.</span></li>
            </ul>
            <div class="center">
                Click <a href="https://docs.google.com/forms/d/e/1FAIpQLSdHCYzDkX4ZAuip4NwjCeWXODfQSrheQDGEcgFApdhLrF35sg/viewform?usp=sf_link">here</a> to upload your submission or you can email it to: <a  href="mailto:fiction@theharvardadvocate.com ">fiction@theharvardadvocate.com </a>
            </div>
            <p></p>
            <div class="center">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfMcuyiu8TM0AUSnOjCvUvA59lWIfVYgvJ-8uX_RgIRjKuypA/viewform?usp=sf_link" class="btn btn-primary btn-150th">POETRY</a>
            </div>
            <ul>
            <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>We have no minimum or maximum word counts.</span></li>
            <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>If you&rsquo;d like to, you may include a message to the editor with your submission. In this message you can describe your work, if you like, or give any background necessary to understand it.</span></li>
            <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Attach your work as a Microsoft Word file or PDF file. Word files are the preferred format, but either is acceptable. </span></li>
            <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Because submissions are considered anonymously, please make sure your name is not anywhere in the document.</span></li>
            <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Simultaneous submissions are accepted, but please let us know immediately if your work is accepted elsewhere.</span></li>
            <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>We primarily read and publish various styles of written poetry, but illustrated forms of poetry (like poetry comics)&mdash;along with other nontraditional poetic formats&mdash;can be submitted as well. </span></li>
            </ul>
            <div class="center">
                Click <a href="https://docs.google.com/forms/d/e/1FAIpQLSfMcuyiu8TM0AUSnOjCvUvA59lWIfVYgvJ-8uX_RgIRjKuypA/viewform?usp=sf_link">here</a> to upload your submission or you can email it to: <a  href="mailto:poetry@theharvardadvocate.com ">poetry@theharvardadvocate.com </a>
            </div>
            <p></p>
            <div class="center">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSef_QSgKgXlagI-MPmkXclEfr-Cpi025ulL4sf3wFs8RKtuMA/viewform?usp=sf_link" class="btn btn-primary btn-150th">ART</a>
            </div>
            <div class="center">
                Click <a href="https://docs.google.com/forms/d/e/1FAIpQLSef_QSgKgXlagI-MPmkXclEfr-Cpi025ulL4sf3wFs8RKtuMA/viewform?usp=sf_link">here</a> to upload your submission or you can email it to: <a  href="mailto:art@theharvardadvocate.com ">art@theharvardadvocate.com </a>
            </div>
        </div>
    </Layout>
)
