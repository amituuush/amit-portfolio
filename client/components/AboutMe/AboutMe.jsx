import React from 'react'
import sass from './about-me.scss'

var AboutMe = React.createClass({
    render: function() {
        return (
            <section className="about-me-section">
                <ul className="about-me-container">
                    <li className="about-me-item">
                        <h3>About me</h3>
                        <p>After graduating from UC Davis with a bachelor's in Economics, I worked in finance and soon realized I needed more creativity in my work. I was then exposed to coding and realized I found my niche. I love the way it allows me to organize large amounts of information in my head, and I love the way it challenges me every day.</p>
                        <p>I recently graduated from <a href="https://www.thinkful.com/" target="_blank">Thinkful</a>'s coding bootcamp and have been looking to work for a fun and exciting company to continue my endless growth as a software developer.</p>
                    </li>
                    <li className="about-me-item"><img src="img/amit-canyoning.jpg" /></li>
                </ul>
            </section>
        )
    }
});

module.exports = AboutMe;
