import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic01 from '../assets/images/pic01.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Sourcing - Supplier Identification and Quotation Services</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h1>Supplier Identification and Quotation Services</h1>
                            </header>
                            <p>Although at first it seems very easy to get a quotation from a supplier through the internet there are many pitfalls and problems that can occur. Our experienced in-house team avoid these problems. After an initial consultation about your project we can give a quotation for supplier research.</p>
                        </div>
                    </div>
                </section>

        <section id="two" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Supplier Research Includes:</h2>
                            </header>
                            <ol>
                                <li>Easy to understand comparison of suppliers’ pricing</li>
                                <li>Ranking of suppliers based on customer criteria, including lead-time, price and quality.</li>
                                <li>Contact Details, including phone, e-mail, web-site, and any relevant catalogues</li>
                                <li>Actual Size, scope and production capabilities of the business</li>
                                <li>English language ability</li>
                            </ol>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style2">
                            <div className="grid-wrapper">
                                <div className="col-12">
                                    <header className="major">
                                        <h2>Basic Pricing Structure</h2>
                                    </header>
                                    <p>Cost: We charge a flat fee for supplier research that ranges from 850 USD to 3250 USD. This total cost depends on the complexity of the research and the price can be quoted after a free initial consultation.</p>
                                    <p>For your reference, we’ve provided three basic prices that match project specifications by difficulty or size of the project to be undertaken:</p>
                                </div>
                                <div className="col-4">
                                  <h4>Easy Projects: USD 850</h4>
                                  <p>This encompasses projects that involve a small order of a pre-made product, purchased at the wholesale or retail level. Turnaround for such a project is typically relatively fast, coming to completion within a few weeks time.</p>
                                </div>
                                <div className="col-4">
                                  <h4>Normal Projects: USD 1,250</h4>
                                  <p>This encompasses projects that include medium or large orders of products that are still “off the shelf”, products that are not custom-made. These projects will be purchased directly from the manufacturer and have a turn-around of a few weeks.</p>
                                </div>
                                <div className="col-4">
                                  <h4>Difficult Projects: USD 3,250</h4>
                                  <p>‘Difficult’ projects would include those which are highly customized. These are sourced factory-direct and can be completed in two months time.</p>
                                </div>
                            </div>
                        </section>

    </Layout>
)

export default Generic
