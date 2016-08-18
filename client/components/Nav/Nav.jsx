import React from 'react'
import sass from './nav.scss'

var Nav = React.createClass({
    render: function() {
        return (
            <nav className="">
                <div onClick={() => {this.props.handleMenuToggle()}} className="menu-bars">
                    <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
                </div>
                <ul className={this.props.menuShow ? 'menu-show' : 'menu-hide'}>
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
