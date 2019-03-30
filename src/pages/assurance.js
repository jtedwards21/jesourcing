import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'


const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Sourcing - Assurance</title>
            <meta name="description" content="Assurance" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Quality Assurance and Regulatory Compliance</h1>
                    </header>
                    <span className="image main"><img src="" alt="" /></span>
                    <p>We offer a variety of services that help to assure the quality of products and adherence to manufacturing regulations.</p>
                    <p>Pre-shipment Inspection</p>
                    <p>On-site confirmation that factory is producing the products as stated. We can also confirm that the factory has the stated production capacity, number of employees, business partners and working conditions.</p>
                    <p>Third Party 100% Inspection</p>
                    <p>All buyers have concerns about their Asian supplier’s ability to achieve goals for quality and lead time. For some products, spot inspections or inspections performed by the supplier may not be enough to fulfill customer requirements. For these reasons, we provide services for 100% inspection.</p>
                    <p>In this scenario, components or goods can be shipped to our warehouse in China where inspection, assembly, packing or other requirements can be taken care of using local labor operating under western management.</p>
                    <p>This sort of consolidation also allows for pre-emptive management of quality control issues before the product is shipped from China. Freight is further consolidated here in order to save on costs. Our facilities and processes are ISO compliant.</p>
                    <p>Quality Assurance Planning and Implementation Consultation</p>
                    <p>Through quality assurance planning our team of experts will create a plan to reduce defects in your supply chain. Our team works to develop a plan that is suitable for your product and then works with the supplier to implement it on the factory floor. The process pays for itself as the savings on defective parts and reworking outpace our initial consultation fee. Typical projects start at 6,500 USD.</p>
                    <p>Import Compliance Planning and Implementation</p>
                    <p>Together with our customers we first work to outline goals for your supply chain. Typical projects start at 3,500 USD.</p>
              </div>
            </section>
        </div>

    </Layout>
)

export default Generic
