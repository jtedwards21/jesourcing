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

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>About Us</h1>
                    </header>
                    <span className="image main"><img src="" alt="" /></span>
                    <p>After working with both buyers and Chinese manufacturers for several years and through visiting and working with customers it became clear that many projects being sourced to China ended in failure because buyers selected the wrong partners for sourcing, logistics and inspections.</p>
                    <p>I now offer professional services through partnerships with reliable suppliers and sourcing teams. Through supply chain management and related services I now help companies source products and save money.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic
