import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'


const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Sourcing - Supplier Identification and Quotation Services</title>
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
                    <p>For your reference, we’ve provided three basic prices that match project specifications by difficulty or size of the project to be undertaken:</p>
                    <p>Easy Projects: USD 850</p>
                    <p>This encompasses projects that involve a small order of a pre-made product, purchased at the wholesale or retail level. Turnaround for such a project is typically relatively fast, coming to completion within a few weeks time.</p>
                    <p>Normal Projects: USD 1,250</p>
                    <p>This encompasses projects that include medium or large orders of products that are still “off the shelf”, products that are not custom-made. These projects will be purchased directly from the manufacturer and have a turn-around of a few weeks.</p>
                    <p>Difficult Projects: USD 3,250</p>
                    <p>‘Difficult’ projects would include those which are highly customized. These are sourced factory-direct and can be completed in two months time.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic
