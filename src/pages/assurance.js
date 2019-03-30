import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'


const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Sourcing - Assurance</title>
            <meta name="description" content="Assurance" />
        </Helmet>
    
        <section id="one" className="main style1">
             <div className="grid-wrapper">
                 <div className="col-12">
                     <header className="major">
                        <h1>Quality Assurance and Regulatory Compliance</h1>
                     </header>
                    <p>We offer a variety of services that help to assure the quality of products and adherence to manufacturing regulations.</p>
                    <p>On-site confirmation that factory is producing the products as stated. We can also confirm that the factory has the stated production capacity, number of employees, business partners and working conditions.</p>
                  </div>
               </div>
           </section>
    
         <section id="twp" className="main style1">
             <div className="grid-wrapper">
                 <div className="col-6">
                     <header className="major">
                         <h2>Pre-shipment Inspection</h2>
                      </header>
                      <p>We offer a variety of services that help to assure the quality of products and adherence to manufacturing regulations.</p>
                      <p>On-site confirmation that factory is producing the products as stated. We can also confirm that the factory has the stated production capacity, number of employees, business partners and working conditions.</p>
                  </div>
                  <div className="col-6">
                     <span className="image fit"><img src="" alt="" /></span>
                   </div>
               </div>
           </section>
    
            <section id="three" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="icon style1 major fa-code"></span></li>
                                <li><span className="icon style2 major fa-bolt"></span></li>
                                <li><span className="icon style3 major fa-camera-retro"></span></li>
                                <li><span className="icon style4 major fa-cog"></span></li>
                                <li><span className="icon style5 major fa-desktop"></span></li>
                                <li><span className="icon style6 major fa-calendar"></span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Third Party 100% Inspection</h2>
                            </header>
                            <p>All buyers have concerns about their Asian supplier’s ability to achieve goals for quality and lead time. For some products, spot inspections or inspections performed by the supplier may not be enough to fulfill customer requirements. For these reasons, we provide services for 100% inspection.</p>
                            <p>In this scenario, components or goods can be shipped to our warehouse in China where inspection, assembly, packing or other requirements can be taken care of using local labor operating under western management.</p>
                            <p>This sort of consolidation also allows for pre-emptive management of quality control issues before the product is shipped from China. Freight is further consolidated here in order to save on costs. Our facilities and processes are ISO compliant.</p>
                        </div>
                    </div>
                </section>
    
                <section id="four" className="main style1">
             <div className="grid-wrapper">
                 <div className="col-6">
                     <header className="major">
                         <h2>Quality Assurance Planning and Implementation Consultation</h2>
                      </header>
                      <p>Through quality assurance planning our team of experts will create a plan to reduce defects in your supply chain. Our team works to develop a plan that is suitable for your product and then works with the supplier to implement it on the factory floor. The process pays for itself as the savings on defective parts and reworking outpace our initial consultation fee. Typical projects start at 6,500 USD.</p>
                      <p>Import Compliance Planning and Implementation</p>
                      <p>Together with our customers we first work to outline goals for your supply chain. Typical projects start at 3,500 USD.</p></div>
                  <div className="col-6">
                     <span className="image fit"><img src="" alt="" /></span>
                   </div>
               </div>
           </section>


    </Layout>
)

export default Generic
