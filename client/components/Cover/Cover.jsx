import React from 'react'
import sass from './cover.scss'

var Cover = React.createClass({
    render: function() {
        return (
            <section className="cover-section">
                <a name="home"><div className="cover-left">
                    <img src="img/amit-circle-pic.png" />
                </div></a>
                <div className="cover-right">
                    <h1>Hi, I'm Amit,</h1>
                    <h2>a front end developer.</h2>
                </div>
            </section>
        )
    }
});

module.exports = Cover;
