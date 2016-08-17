import React from 'react'
import sass from './cover.scss'

var Cover = React.createClass({
    render: function() {
        return (
            <section className="cover-section">
                <div className="cover-left">
                    <img src="img/amit-circle-pic.png" />
                </div>
                <div className="cover-right">
                    <h1>Amit Ranan</h1>
                    <h2>Frontend Developer</h2>
                </div>
            </section>
        )
    }
});

module.exports = Cover;
