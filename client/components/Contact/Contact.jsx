import React from 'react'
import sass from './contact.scss'

var Contact = React.createClass({
    render: function() {
        return (
            <section className="contact-section">
                <div className="contact-container">
                    <p>Feel free to email me at:</p>
                    <div className="contact-item">
                        <a href="mailto: ranan.amit@gmail.com" className="contact-email">ranan.amit@gmail.com</a>
                    </div>
                    <div className="icons-container">
                        <div className="contact-icons">
                            <a href="https://github.com/amituuush" target="_blank"><i className="fa fa-github fa-3x" aria-hidden="true"></i></a>
                        </div>
                        <div className="contact-icons">
                            <a href="https://www.linkedin.com/in/amitranan" target="_blank"><i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a>
                        </div>
                        <div className="contact-icons">
                            <a href="https://www.facebook.com/amit.ranan" target="_blank"><i className="fa fa-facebook-official fa-3x" aria-hidden="true"></i></a>
                        </div>
                        <div className="contact-icons">
                            <a href="https://www.behance.net/rananamit20cb" target="_blank"><i className="fa fa-behance fa-3x" aria-hidden="true"></i></a>
                        </div>
                        <div className="contact-icons">
                            <a href="https://medium.com/@amituuush" target="_blank"><i className="fa fa-medium fa-3x" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
});

module.exports = Contact;
