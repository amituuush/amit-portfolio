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
                            <h3>GoMocha Consumer</h3>
                            <p>GoMocha Consumer is a geolocation food and drink ordering application that tells the coffee shop exactly when their customer is going to arrive so their drink is hot and ready on arrival. It does this using the Google Places API Web Service and the Google Maps Distance Matrix API to calculate the time it will take the customer to arrive based on their selected method of transportation. GoMocha is like my child.</p>
                            <p><span>Technologies:</span> React, Node.js, Express, MongoDB, Mongoose, Google Maps API, Heroku, Travis CI, Webpack, SASS</p>
                            <a href="https://gomocha.herokuapp.com/" target="_blank"><button>Demo</button></a>
                            <a href="https://github.com/amituuush/gomocha" target="_blank"><button>Repo</button></a>
                        </div>
                    </div>
                    <div className="projects-item">
                        <div className="projects-item-image">
                            <img src="img/gomocha-ba.png" />
                        </div>
                        <div className="projects-item-content item-content-gomocha-ba">
                            <h3>GoMocha Business Admin</h3>
                            <p>GoMocha Business Admin is the component that receives the orders placed on GoMocha Consumer. This would be the coffee shop interface in a real world setting. GoMocha as a whole is a monolithic app. The consumer and business admin apps both have their own front ends and share the same back end and database.</p>
                            <p><span>Technologies:</span> React, Node.js, Express, MongoDB, Mongoose, Google Maps API, Heroku, Travis CI, Webpack, SASS</p>
                            <a href="https://gomocha.herokuapp.com/admin" target="_blank"><button>Demo</button></a>
                            <a href="https://github.com/amituuush/gomocha" target="_blank"><button>Repo</button></a>
                        </div>
                    </div>
                    <div className="projects-item">
                        <div className="projects-item-image">
                            <img src="img/lyst.png" />
                        </div>
                        <div className="projects-item-content item-content-todo-list">
                            <h3>Lyst</h3>
                        <p>Lyst is a multiple to do list application with priority, due date, and filter settings. The front end is built in React and Redux, and uses LESS as a css pre-processor. The back end is build in Node, Express, and Mongoose, and uses a MongoDB database. Authentication middleware is handled with Passport.</p>
                    <p><span>Technologies: </span>React, Redux, Node.js, Express, MongoDB, Mongoose, Passport, Heroku, Travis CI, LESS</p>
                            <a href="https://lyst-app.herokuapp.com/" target="_blank"><button>Demo</button></a>
                            <a href="https://github.com/amituuush/lyst" target="_blank"><button>Repo</button></a>
                        </div>
                    </div>
                    <div className="projects-item">
                        <div className="projects-item-image">
                            <img src="img/chat-app.png" />
                        </div>
                        <div className="projects-item-content">
                            <h3>Instant Message App</h3>
                        <p>This is a multi-room real-time chat application. I built as a project for a company. I built the front end, while the back end and design were provided to me. </p>
                    <p><span>Technologies: </span>React, Redux, SASS</p>
                            <a href="https://arcane-spire-77903.herokuapp.com/" target="_blank"><button>Demo</button></a>
                            <a href="https://github.com/amituuush/ChatApp" target="_blank"><button>Repo</button></a>
                        </div>
                    </div>
                    <div className="projects-item">
                        <div className="projects-item-image">
                            <img src="img/whether.png" />
                        </div>
                        <div className="projects-item-content item-content-bird-strike">
                            <h3>Whether</h3>
                            <p>Whether is a 5-day weather forecaster built in React/Redux. A user can search by city, and check the temperature, humidity, and pressure for the next 5 days. It uses the Google Maps and OpenWeatherMap API's.
                            </p>
                            <p><span>Technologies: </span>JavaScript, React, Redux, Webpack, Bootstrap</p>
                            <a href="http://whether.herokuapp.com/" target="_blank"><button>Demo</button></a>
                            <a href="https://github.com/amituuush/whether" target="_blank"><button>Repo</button></a>
                        </div>
                    </div>
                    {/* <div className="projects-item">
                        <div className="projects-item-image">
                            <img src="img/whether.png" />
                        </div>
                        <div className="projects-item-content item-content-bird-strike">
                            <h3>Pair Programming Matching App (WIP)</h3>
                            <p>This is a full-stack dating app for developers to find a pair programming partner. I'm currently working on it with a few other developers. I designed the mockups, built out the entire front end including auth and worked on creating back end routes.
                            </p>
                            <p><span>Technologies: </span>JavaScript, React, Redux, Node, Express, Mongoose, MongoDB, Passport, Webpack, Semantic UI React</p>
                            <a href="https://github.com/Thinkful-ReactStudyGroup" target="_blank"><button>Repo</button></a>
                        </div>
                    </div> */}

                    <a name="about-me"></a>
                </div>
            </section>
        </div>
        )
    }
});

module.exports = Projects;
