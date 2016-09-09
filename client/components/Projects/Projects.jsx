import React from 'react'
import sass from './projects.scss'

var Projects = React.createClass({
    render: function() {
        return (
            <div className="projects-wrap">
            <section className="projects-section">
                <h3 className="projects-title">Portfolio</h3>
                <div className="projects-container">
                    <div className="projects-item">
                        <div className="projects-item-image">
                            <img src="img/gomocha.jpg" />
                        </div>
                        <div className="projects-item-content item-content-gomocha">
                            <h3>GoMocha</h3>
                            <p>GoMocha is a geolocation food and drink ordering application that calculates how long it will take the customer to arrive at the coffee shop for seamless mobile and web ordering. The idea is the order will be ready as soon as the customer arrives. GoMocha is like my child.</p>
                            <p><span>Technologies:</span> React, Node.js, Express, MongoDB, Mongoose, Google Maps API, Heroku, Travis CI, Webpack, SASS</p>
                            <a href="https://gomocha.herokuapp.com/" target="_blank"><button>Demo</button></a>
                            <a href="https://github.com/amituuush/gomocha" target="_blank"><button>Repo</button></a>
                        </div>
                    </div>
                    <div className="projects-item">
                        <div className="projects-item-image">
                            <img src="img/bird-strike.jpg" />
                        </div>
                        <div className="projects-item-content item-content-bird-strike">
                            <h3>Bird Strike</h3>
                            <p>Bird Strike is an online game I built on HTML Canvas. I don't see myself as a video game developer, but I definitely had a great time building this one.
                            </p>
                            <p><span>Technologies: </span>JavaScript, HTML Canvas, Gulp, SASS</p>
                            <a href="http://amituuush.github.io/bird-strike/" target="_blank"><button>Demo</button></a>
                            <a name="technical-expertise"></a>
                            <a href="https://github.com/amituuush/bird-strike" target="_blank"><button>Repo</button></a>

                        </div>
                    </div>
                    <div className="projects-item">
                        <div className="projects-item-image">
                            <img src="img/todo-list.png" />
                        </div>
                        <div className="projects-item-content item-content-todo-list">
                            <h3>My To Do List</h3>
                            <p>This is a to do list application I built when I was harnessing my React skills. My mom uses it sometimes!</p>
                            <p><span>Technologies: </span>React, Redux, Node.js, Express, Travis CI, LESS</p>
                            <a href="http://amituuush.github.io/todo-list/public/" target="_blank"><button>Demo</button></a>
                            <a name="technical-expertise"></a>
                            <a href="https://github.com/amituuush/todo-list" target="_blank"><button>Repo</button></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        )
    }
});

module.exports = Projects;
