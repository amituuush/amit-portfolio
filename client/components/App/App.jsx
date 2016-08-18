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

    getInitialState: function() {
        return {
            menuShow: false
        }
    },

    _handleMenuToggle: function() {
        this.setState({
            menuShow: !this.state.menuShow
        });
    },

    render: function() {
        return (
            <div>
                <Nav
                    handleMenuToggle={this._handleMenuToggle}
                    menuShow={this.state.menuShow} />
                <Cover />
                <Projects />
                <AboutMe />
                <Contact />
                <AboutSite />
                <Footer />
            </div>
        )
    }
});

module.exports = App;
