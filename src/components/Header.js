import React from 'react'
import { Link } from 'gatsby'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-cloud"></span>
                    <h1>Hi, I'm <strong>Photon</strong>, another fine<br />
                    little freebie from <a href="http://html5up.net">HTML5 UP</a>.</h1>
                    <p>Accumsan feugiat mi commodo erat lorem ipsum, sed magna<br />
                    lobortis feugiat sapien sed etiam volutpat accumsan.</p>
                    <ul className="actions">
                        <li><Link to="/about" className="button scrolly">About</Link></li>
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
