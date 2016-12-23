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
                    <h2>Front end <span>React</span> developer with 2.5 years of experience. B.A. in Economics from UC Davis. <a href="http://500.co/" target="_blank">500 Startups</a> Batch 13.</h2>
                </div>
            </section>
        )
    }
});

module.exports = Cover;
