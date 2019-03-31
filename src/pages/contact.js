import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'


const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <section id="one" className="main style1">
             <div className="grid-wrapper">
                 <div className="col-12">
                     <header className="major">
                        <h1>Contact</h1>
                     </header>
                     <p>Please feel free to contact me to receive a free consultation about your product.</p>
                  </div>
               </div>
           </section>

    </Layout>
)

export default Generic
