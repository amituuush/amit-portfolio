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
                    <h1>Hi, I'm Amit.</h1>
                    <a name="portfolio"></a>
                    <h2>Banker turned front end developer moving to SF. B.A. in economics from UC Davis. <a href="http://500.co/" target="_blank">500 Startups</a> Batch 13.</h2>
                </div>
            </section>
        )
    }
});

module.exports = Cover;
