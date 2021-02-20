import React from "react"
import Layout from "../components/layout"

export default () => (
   <Layout
        pageMeta={{
            title: "Contact"
        }}
    >
       <div class="container">
            <h1 class="header">CONTACT US </h1>

            <h2 class="subheader">EMAIL US </h2>
            <div class="text">
                <p> You can reach the content board heads at the following emails:</p>
                <p><a align="center" href = "mailto:art@theharvardadvocate.com">art@theharvardadvocate.com</a> || <a  href="mailto:features@theharvardadvocate.com ">features@theharvardadvocate.com </a> || <a  href="mailto:fiction@theharvardadvocate.com ">fiction@theharvardadvocate.com </a>|| <a  href="mailto:poetry@theharvardadvocate.com ">poetry@theharvardadvocate.com </a></p>

                <p>To arrange a subscription, visit the <u><a href="/subscribe">Subscribe</a></u> page or email us at <a href = "mailto:subscribe@theharvardadvocate.com"> subscribe@theharvardadvocate.com</a>. All other inquiries can be sent to <a href = "mailto:president@theharvardadvocate.com">president@theharvardadvocate.com</a>.</p>
            </div>

            <h2 class="subheader">SEE AN ERROR? </h2>
            <div class="text">
                <p>To contact the webmaster or report a technical issue, email <a href="mailto:tech@theharvardadvocate.com">tech@theharvardadvocate.com</a>.</p>
            </div>

            <h2 class="subheader">DONATE </h2>
            <div class="text">
                <p>Thank you for considering your donation to <i>The Harvard Advocate</i>. We would love to hear more from you if you are arranging a donation – visit our <u><a href="/donate">Donate</a></u> page or contact us at <a href = "mailto:president@theharvardadvocate.com">president@theharvardadvocate.com</a> to let us know more details. </p>
            </div>

            <h2 class="subheader">LOCATION </h2>
            <div class="text">
                <p>We are located at 21 South Street, Cambridge, Massachusetts 02138. We are in the building most weekdays in the afternoon. Alumni members are always welcome to stop by.</p>
            </div>
            <br/>

            {/* <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe width=100% height=500 id="gmap_canvas" src="https://maps.google.com/maps?q=21 South St, Cambridge, MA&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
                <style>.mapouter{text-align:right;height:100%;width:500;}.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:500;}</style>
            </div> */}

        </div>
   </Layout>
)
