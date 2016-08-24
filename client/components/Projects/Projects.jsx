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
                        <div className="projects-item-content item-content-gomocha">
                            <h3>GoMocha</h3>
                            <p>GoMocha is a geolocation food and drink ordering application that uses the Google Maps API to track how long it will take the customer to arrive at the shop. The frontend is built entirely in React, while using webpack as a module bundler and SASS.</p>
                            <p>The backend is built in Express and uses MongoDB as a database. It is currently deployed on Heroku.</p>
                            <a href="https://gomocha.herokuapp.com/" target="_blank"><button>View</button></a>
                            <a href="https://github.com/amituuush/gomocha" target="_blank"><button>Repo</button></a>
                        </div>
                    </div>
                    <div className="projects-item">
                        <div className="projects-item-content item-content-cellbreaker">
                            <h3>CellBreaker</h3>
                            <p>CellBreaker is a web app for a cell phone contract breaking service. I was responsible for designing the landing page and the site's education section.</p>
                        </div>
                        <div className="projects-item-image">
                            <img src="img/cellbreaker.jpg" />
                        </div>
                    </div>
                    <div className="projects-item">
                        <div className="projects-item-image">
                            <img src="img/bird-strike.jpg" />
                        </div>
                        <div className="projects-item-content item-content-bird-strike">
                            <h3>Bird Strike</h3>
                            <a name="about-me"><p>Bird Strike is an online game I built in JavaScript on HTML canvas. It uses gulp as a build system and uses SASS. This is the first complete web app I created aside from basic to do list and quiz apps.</p></a>
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
