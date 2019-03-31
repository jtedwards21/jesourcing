import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'


const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Cases - Sourcing</title>
            <meta name="description" content="Case Studies" />
        </Helmet>

        <section id="one" className="main style1">
             <div className="grid-wrapper">
                 <div className="col-12">
                     <header className="major">
                        <h1>Case Studies</h1>
                     </header>
                    <p></p>
                  </div>
               </div>
           </section>

    </Layout>
)

export default Generic
