import React from 'react'
import sass from './projects.scss'

var Projects = React.createClass({
    render: function() {
        return (
            <section className="projects-section">
                <h3 className="projects-title">Portfolio</h3>
                <div className="projects-container">
                    <div className="projects-item">
                        <div className="projects-item-image">
                            <img src="img/gomocha.jpg" />
                        </div>
                        <div className="projects-item-content">
                            <h3>GoMocha</h3>
                            <p>Geolocation coffee order application built in React and Node.</p>
                            <a href="https://gomocha.herokuapp.com/" target="_blank"><button>View</button></a>
                            <a href="https://github.com/amituuush/gomocha" target="_blank"><button>Repo</button></a>
                        </div>
                    </div>
                    <div className="projects-item">
                        <div className="projects-item-content">
                            <h3>CellBreaker</h3>
                            <p>Web app for cell phone contract breaking service.</p>
                        </div>
                        <div className="projects-item-image">
                            <img src="img/cellbreaker.jpg" />
                        </div>
                    </div>
                    <div className="projects-item">
                        <div className="projects-item-image">
                            <img src="img/bird-strike.jpg" />
                        </div>
                        <div className="projects-item-content">
                            <h3>Bird Strike</h3>
                            <a name="about-me"><p>Online game built in JavaScript on HTML canvas.</p></a>
                            <a href="http://amituuush.github.io/bird-strike/" target="_blank"><button>View</button></a>
                            <a href="https://github.com/amituuush/bird-strike" target="_blank"><button>Repo</button></a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
});

module.exports = Projects;
