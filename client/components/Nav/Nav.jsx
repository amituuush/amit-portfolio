import React from 'react'
import sass from './nav.scss'

var Nav = React.createClass({
    render: function() {
        return (
            <nav className="">
                <div onClick={() => {this.props.handleMenuToggle()}} className="menu-bars">
                    <i className={this.props.menuShow ? 'fa fa-times fa-2x' : 'fa fa-bars fa-2x' } aria-hidden="true"></i>
                </div>
                <img src="img/amit-logo.png" />
                <ul className={this.props.menuShow ? 'menu-show' : 'menu-hide'}>
                    <a href="#home" onClick={() => {this.props.handleMenuToggle()}}><li>Home</li></a>
                    <a href="#portfolio" onClick={() => {this.props.handleMenuToggle()}}><li>Portfolio</li></a>
                    <a href="#about-me" onClick={() => {this.props.handleMenuToggle()}}><li>About Me</li></a>
                    <a href="#contact" onClick={() => {this.props.handleMenuToggle()}}><li>Contact</li></a>
                    <a href="https://www.linkedin.com/in/amitranan" target="_blank">
                        <li>LinkedIn</li>
                    </a>
                    <a href="./img/amit-ranan-resume.pdf" onClick={() => {this.props.handleMenuToggle()}}><li>Resume</li></a>
                </ul>
            </nav>
        )
    }
});

module.exports = Nav;
