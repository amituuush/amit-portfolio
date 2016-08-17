import React from 'react'
import sass from './about-site.scss'

var AboutSite = React.createClass({
    render: function() {
        return (
            <section className="about-site-section">
                <h2>About this site</h2>
                <ul className="about-site-container">
                    <li className="about-site-item">
                        <h3></h3>
                        <p>This site it built in React</p>
                    </li>
                    <li className="about-site-item">
                        <h3></h3>
                        <p>Yaaaay</p>
                    </li>
                </ul>
            </section>
        )
    }
});

module.exports = AboutSite;
