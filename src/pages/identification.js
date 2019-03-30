import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'


const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Sourcing - Quotation Services</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Supplier Identification and Quotation Services</h1>
                    </header>
                    <span className="image main"><img src="" alt="" /></span>
                    <p>Although at first it seems very easy to get a quotation from a supplier through the internet there are many pitfalls and problems that can occur. Our experienced in-house team avoid these problems. After an initial consultation about your project we can give a quotation for supplier research.</p>
                    <p>Supplier Research Includes:</p>
                    <ol>
                      <li>Easy to understand comparison of suppliers’ pricing</li>
                      <li>Ranking of suppliers based on customer criteria, including lead-time, price and quality.</li>
                      <li>Contact Details, including phone, e-mail, web-site, and any relevant catalogues</li>
                      <li>Actual Size, scope and production capabilities of the business</li>
                      <li>English language ability</li>
                    </ol>
                    <p>Basic Pricing Structure</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic
