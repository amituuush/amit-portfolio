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
                        <p>I'm a front end engineer with over 2.5 years of experience developing responsive and functional SPA's. I have also built several full-stack apps with React/Redux, Node/Express and MongoDB/Mongoose. I have 2 years of UI/UX development experience at startups, one of which was in the startup accelerator, 500 Startups. You can check out my design portfolio <a href="https://www.behance.net/rananamit20cb" target="_blank">here</a>. I'm also up to date on the latest and great technologies in the JavaScript ecosystem (ES6, RESTful API's, Webpack, SASS/LESS, Mocha, Jasmine).</p> 
                        <p>I'm passionate about the constantly evolving world of tech, and love working on personal projects and learning new technologies to build beautiful and intuitive user experiences.</p>

                        <p>Before coding, I worked in economic analyses at the U.S. Department of Labor and in commercial banking at MUFG Union Bank. I believe my blend of business/marketing and development skills make me a unique developer, and allow me to translate a company's strategic goals into functional design.</p><br />

                        <h4>What I’ve worked on</h4>
                        <p>I've built several full-stack single page web applications in React/Redux, Node/Express, MongoDB/Mongoose (see portfolio section for more detail).</p>

                        <p>While I was a UI/UX developer, I designed and developed a responsive and mobile first team gaming application and an app that got people out of their cell phone contracts without paying early termination fees.</p><br />

                        <h4>Side Projects</h4>
                        <p>I'm currently working on making GoMocha a commercially viable product!</p><br />

                        <h4>What I'm really good at</h4>
                        <p>I'm really good at translating a company's goals and vision into functional design.</p><br />

                        <h4>What I’m looking to do next</h4>
                        <p>I'm currently working as a front end engineer for an ecommerce marketing company, and am open to both part-time, full-time, and contract based opportunities.</p>
                        <p>I love anything that has to do with the NBA, being outdoors, playing guitar, and my mom's vegan cooking. If you think we'd be a good fit, shoot me an email!</p>
                    {/* <p>I'm currently looking to join a fun and passionate company. I enjoy using my development experience to help companies solve business problems. I also have design experience, which you can check out <a href="https://www.behance.net/rananamit20cb" target="_blank">here</a>.</p>
                     */}
                    </li>
                    <a name="contact"></a>
                </ul>
            </section>
        </div>
        )
    }
});

module.exports = AboutMe;
