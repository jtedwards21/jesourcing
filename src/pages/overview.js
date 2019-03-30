import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'


const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Sourcing - Overview</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Overview</h1>
                    </header>
                    <span className="image main"><img src="" alt="" /></span>
                    <p>Factory Audit</p>
                    <p>On-site review of the supplier’s facility and quality control system to confirm the likelihood they can produce the product you wish to order. We review the qualifications of the supplier to see what standards they operate at. We assess them based on standards such as ISO9001, TS16949 and ISO14001.</p>
                    <p>Cost: 425 USD (all inclusive)</p>
                    <p>Sourcing Team</p>
                    <p>Our staff is made up of a team of sourcing professionals who can help our customers to find and manage suppliers in China. Our professional team is based in Eastern China, just outside of Shanghai.</p>
                    <p>For project review, we charge a small upfront fee. This allows for the creation of a strategy that helps us work together with our clients to achieve their desired goals. Once we have developed a strategy, we are able give a quotation for further services. With our sourcing team, fees are discussed upfront. We do not take a commission on your products as we desire a high degree of transparency in our dealings with customers.</p>
                    <p>Supplier Identification and Price Research</p>
                    <p>Our professional team can makes it easy to find a good supplier in China. We help customers to get accurate quotes from manufacturers and to make an in-depth comparison of services. </p>
                    <p>Cost: We charge a flat fee for supplier research that ranges from 850 USD to 3250 USD. This total cost depends on the complexity of the research and the price can be quoted during the product review.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic
