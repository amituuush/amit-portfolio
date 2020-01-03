import React from 'react'
import sass from './cover.scss'

var Cover = React.createClass({
    render: function () {
        return (
            <section className="cover-section">
                <a name="home"></a>
                <div className="cover-left">
                    <img src="img/amit-circle-pic.png" />
                </div>
                <div className="cover-right">
                    <h1>Amit Ranan</h1>
                    <a name="portfolio"></a>
                    <h2>Software Engineer at <a href="https://www.therealreal.com/" target="_blank">The RealReal</a> with 3 years experience building web apps in Ruby/Ruby on Rails, Elixir/Phoenix, JavaScript/React/Redux, Node.js/Express</h2>JavaScript/React/Redux/Node/Elixir/Phoenix.
                {/* <a href="./img/amit_ranan_resume.pdf" target="_blank"><button>Resume</button></a> */}
                </div>
            </section >
        )
    }
});

module.exports = Cover;
