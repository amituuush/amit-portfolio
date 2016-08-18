import React from 'react'
import sass from './contact.scss'

var Contact = React.createClass({
    render: function() {
        return (
            <section className="contact-section">
                <h2>Contact</h2>
                <ul className="contact-container">
                    <li className="contact-item">
                        <i className="fa fa-mobile fa-5x" aria-hidden="true"></i>
                        <a href="tel:8186069556">(818) 606-9556</a>
                    </li>
                    <li className="contact-item">
                        <i className="fa fa-envelope-o fa-3x" aria-hidden="true"></i>
                        <a href="mailto: ranan.amit@gmail.com">ranan.amit@gmail.com</a>
                    </li>
                    <li className="contact-item">
                        GitHub, LinkedIn
                    </li>
                </ul>
            </section>
        )
    }
});

module.exports = Contact;
