import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="icons">
                    <li><a href="/contact" className="icon alt fa-wechat"><span className="label">Wechat</span></a></li>
                    <li><a href="/contact" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; 2019</li><li>Sourcing</li>
                </ul>
            </section>
        )
    }
}

export default Footer
