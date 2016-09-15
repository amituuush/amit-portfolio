import React from 'react'
import sass from './about-me.scss'

var AboutMe = React.createClass({
    render: function() {
        return (
            <div className="about-me-wrap">
            <section className="about-me-section">
                <ul className="about-me-container">
                    <li className="about-me-item">
                        <h3>About Me</h3>
                        <p>I graduated from UC Davis with a bachelor's in Economics, and proceeded to work in commercial banking. I soon realized I needed more creativity in my work. I picked up coding and graduated from <a href="https://www.thinkful.com/" target="_blank">Thinkful</a>'s coding bootcamp. I love the way it allows me to organize complex information in my head, and I love the logical puzzle challenges it provides. More recently, I've been working on a coffee and food ordering application that tells the coffee shop the arrival time of the user using geolocation.</p>
                        <p>I'm currently looking to join a fun and passionate company. I enjoy using my development experience to help companies solve business problems. I also have design experience, which you can check out <a href="https://www.behance.net/rananamit20cb" target="_blank">here</a>.</p>
                        <p>I love anything that has to do with the NBA, being outdoors, playing guitar, and my mom's vegan cooking. If you think we'd be a good fit, see my contact information below!</p>
                    </li>
                    <li className="about-me-item"><img src="img/amit-canyoning.jpg" /></li>
                    <a name="contact"></a>
                </ul>
            </section>
        </div>
        )
    }
});

module.exports = AboutMe;
