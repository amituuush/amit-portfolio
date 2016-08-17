import React from 'react'
import sass from './app.scss'
import Nav from '../Nav/Nav'
import Cover from '../Cover/Cover'
import Projects from '../Projects/Projects'
import AboutMe from '../AboutMe/AboutMe'
import Footer from '../Footer/Footer'
import AboutSite from '../AboutSite/AboutSite'
import Contact from '../Contact/Contact'

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Nav />
                <Cover />
                <Projects />
                <AboutMe />
                <AboutSite />
                <Contact />
                <Footer />
            </div>
        )
    }
});

module.exports = App;
