import React from 'react'
import sass from './app.scss'
import Nav from '../Nav/Nav'
import Cover from '../Cover/Cover'
import Projects from '../Projects/Projects'

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Nav />
                <Cover />
                <Projects />
                <Cover />
            </div>
        )
    }
});

module.exports = App;
