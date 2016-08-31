import React from 'react'
import sass from './about-site.scss'

var AboutSite = React.createClass({
    render: function() {
        return (
            <section className="about-site-section">
                <h3>About this site</h3>
                <ul className="about-site-container">
                    <li className="about-site-item">
                        <h3>This responsive site has been designed, developed, and maintained by me. It's built in <span className="about-site-highlight">React</span> using <span className="about-site-highlight">Sass</span> as a CSS extention language, and <span className="about-site-highlight">Webpack</span> as a module bundler.
                        </h3>
                    </li>
                </ul>
            </section>
        )
    }
});

module.exports = AboutSite;
