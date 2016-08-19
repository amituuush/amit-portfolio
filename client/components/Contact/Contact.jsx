import React from 'react'
import sass from './contact.scss'

var Contact = React.createClass({
    render: function() {
        return (
            <section className="contact-section">
                <a name="contact"><h3>Contact</h3></a>
                <div className="contact-container">
                    <div className="contact-item">
                        <a href="tel:8186069556">
                            <i className="fa fa-mobile fa-3x" aria-hidden="true"></i>
                            <div className="contact-phone">(818) 606-9556</div>
                        </a>
                    </div>
                    <div className="contact-item">
                        <a href="mailto: ranan.amit@gmail.com">
                            <i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
                            <div className="contact-email">ranan.amit@gmail.com</div>
                        </a>
                    </div>
                    <div className="contact-item">
                        <a href="https://www.linkedin.com/in/amitranan" target="_blank"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                    </div>
                    <div className="contact-item">
                        <a href="https://github.com/amituuush" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
                    </div>
                </div>
            </section>
        )
    }
});

module.exports = Contact;
