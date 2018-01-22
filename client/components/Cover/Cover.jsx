import React from 'react'
import sass from './cover.scss'

var Cover = React.createClass({
    render: function() {
        return (
            <section className="cover-section">
                <a name="home"></a>
                <div className="cover-left">
                    <img src="img/amit-circle-pic.png" />
                </div>
                <div className="cover-right">
                    <h1>Amit Ranan</h1>
                    <a name="portfolio"></a>
                    <h2>Passionate and motivated SWE at <a href="https://www.therealreal.com/" target="_blank">The RealReal</a> with 3 years experience building web apps in React/Redux/Node/Elixir/Phoenix and developing web pages.</h2>
                    <a href="./img/amit-ranan-resume.pdf" target="_blank"><button>Resume</button></a>
                </div>
            </section>
        )
    }
});

module.exports = Cover;
