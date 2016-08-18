import React from 'react'
import sass from './about-site.scss'

var AboutSite = React.createClass({
    render: function() {
        return (
            <section className="about-site-section">
                <h3>About this site</h3>
                <ul className="about-site-container">
                    <li className="about-site-item">
                        <h3>This site has been designed and built by hand in <span className="about-site-highlight">React</span> using <span className="about-site-highlight">Sass</span>, <span className="about-site-highlight">Webpack</span>, and a <span className="about-site-highlight">mobile-first</span> approach.</h3>
                    </li>
                </ul>
            </section>
        )
    }
});

module.exports = AboutSite;
