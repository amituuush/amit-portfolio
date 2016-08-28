import React from 'react'
import sass from './about-me.scss'

var AboutMe = React.createClass({
    render: function() {
        return (
            <section className="about-me-section">
                <ul className="about-me-container">
                    <li className="about-me-item">
                        <h3>About me</h3>
                        <p>I graduated from UC Davis with a bachelor's in Economics, and proceeded to work in commercial banking. I soon realized I needed more creativity in my work. I picked up coding, and immediately knew it was for me. I love the way it allows me to organize large amounts of information in my head, and I love the logical puzzle challenges it provides.</p>
                        <p>I recently graduated from <a href="https://www.thinkful.com/" target="_blank">Thinkful</a>'s coding bootcamp and am working as a freelance developer. I enjoy using my development experience to help companies solve business problems. I also have some design experience, which you can check out <a href="https://www.behance.net/rananamit20cb" target="_blank">here</a>.</p>
                        <p>If you like my work and are interested in working together, see my contact information below!</p>
                    </li>
                    <li className="about-me-item"><img src="img/amit-canyoning.jpg" /></li>
                    <a name="contact"></a>
                </ul>
            </section>
        )
    }
});

module.exports = AboutMe;
