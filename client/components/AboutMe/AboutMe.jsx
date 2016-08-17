import React from 'react'
import sass from './about-me.scss'

var AboutMe = React.createClass({
    render: function() {
        return (
            <section className="about-me-section">
                <ul className="about-me-container">
                    <li className="about-me-item">
                        <h3>Who I am</h3>
                        <p>I am a really cool guy I swear</p>
                    </li>
                    <li className="about-me-item">
                        <h3>What I do</h3>
                        <p>I put characters together in the right order</p>
                    </li>
                </ul>
            </section>
        )
    }
});

module.exports = AboutMe;
