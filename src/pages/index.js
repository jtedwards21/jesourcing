import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';
import { Link } from 'gatsby'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

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
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
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
                                <h2>The Purchasing Process</h2>
                            </header>
                            <h3>Step 1: Development of Specifications</h3>
                            <button>Learn More</button>
                            <h3>Step 2: Supplier Assessment</h3>
                            <button>Learn More</button>
                            <h3>Step 3: Procurement of Samples</h3>
                            <button>Learn More</button>
                            <h3>Step 4: Negotiation</h3>
                            <button>Learn More</button>
                            <h3>Step 5: Payment</h3>
                            <button>Learn More</button>
                            <h3>Step 6: Manufacturing</h3>
                            <button>Learn More</button>
                            <h3>Step 7: Shipping and Customs</h3>
                            <button>Learn More</button>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Basic Services</h2>
                            </header>
                            <p>We tailor our services to suit product and customer requirements.</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>Supplier Identification and Quotations</h3>
                            <p>In depth information about a range of different suppliers for your product</p>
                            <ul className="actions">
                                <li><Link to="/identification" className="button">More</Link></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Quality Assurance</h3>
                            <p>We offer a range of services including pre-shipment and 100% product inspections.</p>
                            <ul className="actions">
                                <li><Link to="/assurance" className="button">More</Link></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>Negotiation, Payments and Shipping</h3>
                            <p>Our services can guarantee the security of your payments, and can place holds on funds until suppliers have delivered compliant goods.</p>
                            <ul className="actions">
                                <li><Link to="/process" className="button">More</Link></li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Ipsum feugiat consequat?</h2>
                        </header>
                        <p>Sed lacus nascetur ac ante amet sapien.</p>
                        <ul className="actions uniform">
                            <li><a href="#" className="button special">Sign Up</a></li>
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;
