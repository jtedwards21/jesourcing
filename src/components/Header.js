import React from 'react'
import { Link } from 'gatsby'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-cloud"></span>
                    <h1>Sourcing</h1>
                    <p>We help you source components outside of your home country
                    <br />though a number of programs</p>
                    <ul className="actions">
                        <li><Link to="/about" className="button scrolly">About</Link></li>
                        <li><Link to="/overview" className="button scrolly">Overview</Link></li>
                        <li><Link to="/assurance" className="button scrolly">Assurance</Link></li>
                        <li><Link to="/identification" className="button scrolly">Identification</Link></li>
                        <li><Link to="/overview" className="button scrolly">Overview</Link></li>
                        <li><Link to="/cases" className="button scrolly">Case Studies</Link></li>
                        <li><Link to="/contact" className="button scrolly">Contact</Link></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
