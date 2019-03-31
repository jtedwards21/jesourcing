import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';
import { Link } from 'gatsby'


import qualitypic from '../assets/images/index/quality01.jpg'
import researchpic from '../assets/images/index/research02.jpg'
import storagepic from '../assets/images/index/storage01.jpg'
import teampic from '../assets/images/index/team01.jpg'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Gatsby Starter - Photon";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Our Team of Sourcing Professionals</h2>
                            </header>
                            <p>Our team of dedicated sourcing professionals can help you to implement convenient solutions to sourcing problems in China.</p>
                            <p>Our staff is made up of a team of sourcing professionals who can help our customers to find and manage suppliers in China. Our professional team is based in Eastern China, just outside of Shanghai.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={teampic} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="process" className="main style5">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>The Purchasing Process</h2>
                            </header>
                        </div>
                        <div className="col-6">
                            <ul className="alt">
                                <li className="process-list-item"><span>
                                  <h4>Step 1: Development of Specifications</h4>
                                  <Link to="/process/#two"><button>Learn More</button></Link>
                                </span></li>
                                <li className="process-list-item"><span>
                                  <h4>Step 2: Supplier Assessment</h4>
                                  <Link to="/process/#three"><button>Learn More</button></Link>
                                </span></li>
                                <li className="process-list-item"><span>
                                  <h4>Step 3: Procurement of Samples</h4>
                                  <Link to="/process/#four"><button>Learn More</button></Link>
                                </span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                          <ul className="alt">
                            <li className="process-list-item"><span>
                              <h4>Step 4: Negotiation</h4>
                              <Link to="/process/#five"><button>Learn More</button></Link>
                            </span></li>
                            <li className="process-list-item"><span>
                              <h4>Step 5: Payment</h4>
                              <Link to="/process/#six"><button>Learn More</button></Link>
                            </span></li>
                            <li className="process-list-item"><span>
                              <h4>Step 6: Manufacturing and Shipping</h4>
                              <Link to="/process/#seven"><button>Learn More</button></Link>
                            </span></li>
                          </ul>
                        </div>
                    </div>
                </section>

                <section id="services" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Our Services</h2>
                            </header>
                            <p>We tailor our services to suit product and customer requirements.</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={researchpic} alt="" /></span>
                            <h3>Supplier Identification and Quotations</h3>
                            <p>Our professional team can makes it easy to find a good supplier in China. We help customers to get accurate quotes from manufacturers and to make an in-depth comparison of services.</p>
                            <ul className="actions">
                                <li><Link to="/identification" className="button">More</Link></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={qualitypic} alt="" /></span>
                            <h3>Quality Assurance and Regulatory Compliance</h3>
                            <p>We offer a range of services including pre-shipment and 100% product inspections.</p>
                            <ul className="actions">
                                <li><Link to="/assurance" className="button">More</Link></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={storagepic} alt="" /></span>
                            <h3>Negotiation, Payments and Shipping</h3>
                            <p>Our services can guarantee the security of your payments, and can place holds on funds until suppliers have delivered compliant goods.</p>
                            <ul className="actions">
                                <li><Link to="/negotiations" className="button">More</Link></li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section id="four" className="main style5 special">
                    <div className="container">
                        <header className="major">
                            <h2>Want to learn more?</h2>
                        </header>
                        <p>Contact us for a free consulatation about your project today.</p>
                        <ul className="actions uniform">
                            <li><Link to="/contact" className="button">Contact Us</Link></li>
                        </ul>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;
