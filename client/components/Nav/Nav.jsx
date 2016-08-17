import React from 'react'
import sass from './nav.scss'

var Nav = React.createClass({
    render: function() {
        return (
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                    <li>LinkedIn</li>
                    <li>Resume</li>
                </ul>
            </nav>
        )
    }
});

module.exports = Nav;
