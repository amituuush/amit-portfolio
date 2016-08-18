import React from 'react'
import sass from './projects.scss'

var Projects = React.createClass({
    render: function() {
        return (
            <section className="projects-section">
                <a name="portfolio"><h3 className="projects-title">My work</h3></a>
                <ul className="projects-container">
                    <li className="projects-item">
                        <img src="img/gomocha.jpg" />
                        <h3>GoMocha</h3>
                        <p>Geolocation coffee order application built in React and Node.</p>
                        <a href="https://gomocha.herokuapp.com/" target="_blank"><button>View</button></a>
                        <a href="https://github.com/amituuush/gomocha" target="_blank"><button>Repo</button></a>
                    </li>
                    <li className="projects-item">
                        <img src="img/cellbreaker.jpg" />
                            <h3>CellBreaker</h3>
                            <p>Web app for cell phone contract breaking service.</p>
                    </li>
                    <li className="projects-item">
                        <img src="img/bird-strike.jpg" />
                            <h3>Bird Strike</h3>
                            <p>Online game built in JavaScript on HTML canvas.</p>
                            <a href="http://amituuush.github.io/bird-strike/" target="_blank"><button>View</button></a>
                            <a href="https://github.com/amituuush/bird-strike" target="_blank"><button>Repo</button></a>
                    </li>
                </ul>
            </section>
        )
    }
});

module.exports = Projects;
