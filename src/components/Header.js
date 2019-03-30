import React from 'react'
import { Link } from 'gatsby'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className=""></span>
                    <h1>Sourcing</h1>
                    <p>We help you source components outside of your home country
                    <br />though a number of programs</p>
                    <ul className="actions">
                        <li><Link to="/about" className="button scrolly">About</Link></li>
                        <li><Link to="#services" className="button scrolly">Services</Link></li>
                        <li><Link to="/cases" className="button scrolly">Case Studies</Link></li>
                        <li><Link to="/contact" className="button scrolly">Contact</Link></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
