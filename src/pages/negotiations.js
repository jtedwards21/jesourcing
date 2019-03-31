import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'


const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Sourcing - Negotiations</title>
            <meta name="description" content="Negotiations" />
        </Helmet>

        <section id="one" className="main style1">
             <div className="grid-wrapper">
                 <div className="col-12">
                     <header className="major">
                        <h1>Negotiations, Shipping, and Storage</h1>
                     </header>
                    <p></p>
                  </div>
               </div>
           </section>

    </Layout>
)

export default Generic
