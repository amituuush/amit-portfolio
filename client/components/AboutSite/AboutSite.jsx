import React from 'react'
import sass from './about-site.scss'

var AboutSite = React.createClass({
    render: function() {
        return (
            <div className="about-site-wrap">
            <section className="about-site-section">
                <h3>About This Site</h3>
                <ul className="about-site-container">
                    <li className="about-site-item">
                        <h3 id="about-site-content">This responsive site has been designed, developed, and maintained by me. It's built in <span className="about-site-highlight">React</span> using <span className="about-site-highlight">Sass</span> as a CSS extension language, and <span className="about-site-highlight">Webpack</span> as a module bundler.
                        </h3>
                    </li>
                </ul>
                <div className="about-site-image-container">
                    <img src="img/amit-logo.png" />
                </div>
            </section>
        </div>
        )
    }
});

module.exports = AboutSite;
