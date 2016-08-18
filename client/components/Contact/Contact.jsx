import React from 'react'
import sass from './contact.scss'

var Contact = React.createClass({
    render: function() {
        return (
            <section className="contact-section">
                <a name="contact"><h3>Contact</h3></a>
                <ul className="contact-container">
                    <li className="contact-item">
                        <i className="fa fa-mobile fa-5x" aria-hidden="true"></i>
                        <a href="tel:8186069556" className="contact-phone">(818) 606-9556</a>
                    </li>
                    <li className="contact-item">
                        <i className="fa fa-envelope-o fa-3x" aria-hidden="true"></i>
                        <a href="mailto: ranan.amit@gmail.com" className="contact-email">ranan.amit@gmail.com</a>
                    </li>
                    <li className="contact-item">
                        <a href="https://www.linkedin.com/in/amitranan" target="_blank"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                    </li>
                    <li className="contact-item">
                        <a href="https://github.com/amituuush" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
                    </li>
                </ul>
            </section>
        )
    }
});

module.exports = Contact;
