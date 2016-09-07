import React from 'react'
import sass from './tech-skills.scss'

var TechSkills = React.createClass({
    render: function() {
        return (
            <section className="tech-skills-section">
                <h3 className="tech-skills-title">Technical Expertise</h3>
                <ul className="tech-skills-container">
                    <div className="tech-skills-item-container">
                        <li className="tech-skills-item">
                            <h3>Professional Skillset</h3>
                            <p>HTML5</p>
                            <p>CSS3</p>
                            <p>JavaScript</p>
                            <p>React</p>
                            <a name="about-me"></a>
                        </li>
                        <li className="tech-skills-item">
                            <h3>Other Notables</h3>
                            <p>Redux</p>
                            <p>SASS/LESS</p>
                            <p>Compass/Bourbon</p>
                            <p>jQuery</p>
                        </li>
                    </div>
                    <div className="tech-skills-item-container">
                        <li className="tech-skills-item tech-skills-tools">
                            <h3>Tools</h3>
                            <p>Photoshop & Sketch</p>
                            <p>Webpack/Gulp</p>
                            <p>Atom</p>
                            <p>Babel</p>
                        </li>
                        <li className="tech-skills-item">
                            <h3>Working Knowledge</h3>
                            <p>Node.js</p>
                            <p>Express</p>
                            <p>MongoDB</p>
                            <p>Mongoose</p>
                        </li>
                    </div>
                </ul>
            </section>
        )
    }
});

module.exports = TechSkills;
