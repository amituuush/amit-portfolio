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
                        <img src="img/amit-canyoning.jpg" />
                        <p>I'm a front end React developer with over 2 years of experience developing responsive and functional SPA's. I have working knowledge of Node.js, Express, MongoDB, and Mongoose.js. I also have 2 years of UI/UX development experience at startups, one of which was in the startup accelerator, 500 Startups. You can check out my design portfolio <a href="https://www.behance.net/rananamit20cb" target="_blank">here</a>. I'm passionate about the constantly evolving world of tech, and love working on personal projects and learning new technologies to build beautiful and intuitive user experiences.</p>

                        <p>Before coding, I worked in economic analyses at the U.S. Department of Labor and in commercial banking. I believe my blend of business/marketing and development skills make me a unique developer, and allow me to translate a company's strategic goals into functional design.</p><br />

                        <h4>What I’ve worked on</h4>
                        <p>I've built several full-stack single page web applications in React and Redux (see portfolio section for more detail).</p>

                        <p>While I was a UI/UX developer, I designed and developed countless responsive and mobile first interfaces for a team gaming platform application and an app that got people out of their cell phone contracts without paying early termination fees.</p><br />

                        <h4>Side Projects</h4>
                        <p>I'm currently working on a pair programming matching application with a team of 5 developers. The app matches developers using an algorithm based on their indicated preferences so they can pair program together.</p><br />

                        <h4>What I'm really good at</h4>
                        <p>I'm really good at translating a company's goals and vision into functional design.</p><br />

                        <h4>What I’m looking to do next</h4>
                        <p>I'm currently working as a freelance front end React developer for an ecommerce marketing company, and am open to both part-time and full-time opportunities.</p>







                    {/* <p>I'm currently looking to join a fun and passionate company. I enjoy using my development experience to help companies solve business problems. I also have design experience, which you can check out <a href="https://www.behance.net/rananamit20cb" target="_blank">here</a>.</p>
                    <p>I love anything that has to do with the NBA, being outdoors, playing guitar, and my mom's vegan cooking. If you think we'd be a good fit, see my contact information below!</p> */}
                    </li>
                    <a name="contact"></a>
                </ul>
            </section>
        </div>
        )
    }
});

module.exports = AboutMe;
