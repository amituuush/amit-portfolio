import React from 'react'
import sass from './footer.scss'

var Footer = React.createClass({
    render: function () {
        return (
            <section className="footer-section">
                <ul className="footer-container">
                    <li className="footer-item">
                        <h3>Disclaimer</h3>
                        <p>This website is to be used by prospective employers or parties with legitimate business interests. Some of the material on this website is owned by their respective trademarked entities. ﻿   Amit Ranan © 2018</p>
                    </li>
                </ul>
            </section>
        )
    }
});

module.exports = Footer;
