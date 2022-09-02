import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Image from "../components/image"
export default () => (
   <Layout
        pageMeta={{
            title:"Comp"
        }}
    >
        <div class="container">
            <h1 class="header">COMP THE HARVARD ADVOCATE</h1>
            <p class="text">
                FALL 2022 Comp is underway. Intro Comp meetings are happening Wednesday September 7 and Thursday September 8 at 9pm at 21 South St, and Saturday September 10 at 3pm on Zoom. <a style={{color: 'blue', textDecoration:'underline'}} href="https://bit.ly/AdvoFall2022" target="_blank" rel="noopener noreferrer">Visit here to sign up.</a> For any questions, comments or concerns, contact <a href = "mailto:dionysi@theharvardadvocate.com" style={{color: 'blue', textDecoration:'underline'}} > dionysi@theharvardadvocate.com</a>.
            </p>
            <div style={{height: '20px'}}/>
            <p class="text">
               The Harvard Advocate has been a home for arts and literature at Harvard since 1866, and we're always looking forward to meeting new members through our “comp” process! Across its seven boards, The Advocate welcomes critics, artists, writers, designers, programmers, and dealmakers alike. No previous experience is necessary. You don’t have to be a writer or an artist—as long as you’re interested in what we do, Advo has a place for you. The Advocate holds comps for all seven boards: Art, Features, Fiction, Poetry, Design, Business, and Tech. To learn more about the organization, our boards, and the comp process, visit our <a href = "https://www.instagram.com/harvardadvocate/">Instagram</a>, <a href = "https://www.facebook.com/harvardadvocate">Facebook</a>, or <a href = "https://twitter.com/harvardadvocate?lang=en">Twitter.</a>
            </p>
        </div>
   </Layout>
)
