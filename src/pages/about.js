import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'


const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Sourcing - About Us</title>
            <meta name="description" content="About" />
        </Helmet>
    
        <section id="one" className="main style1">
            <div className="grid-wrapper">
                <div className="col-6">
                    <header className="major">
                        <h2>About Us</h2>
                    </header>
                    <p>After working with both buyers and Chinese manufacturers for several years and through visiting and working with customers it became clear that many projects being sourced to China ended in failure because buyers selected the wrong partners for sourcing, logistics and inspections.</p>
                    <p>I now offer professional services through partnerships with reliable suppliers and sourcing teams. Through supply chain management and related services I now help companies source products and save money.</p>
                    <span className="image main"><img src="" alt="" /></span>
                    <div className="col-6">
                        <span className="image fit"><img src={pic01} alt="" /></span>
                    </div>
                </div>
             </div>
         </section>
    
    </Layout>
)

export default Generic
