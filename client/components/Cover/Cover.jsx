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
                    <a name="portfolio"><h2>Banker turned frontend developer. Recent Thinkful coding bootcamp grad. B.A. in economics from UC Davis. 500 Startups Batch 13.</h2></a>
                </div>
            </section>
        )
    }
});

module.exports = Cover;
