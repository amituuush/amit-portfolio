import React from 'react'
import sass from './contact.scss'

var Contact = React.createClass({
    render: function() {
        return (
            <section className="contact-section">
                <h2>Contact</h2>
                <ul className="contact-container">
                    <li className="contact-item">
                        <h3>Call me</h3>
                        <p>Pleaaassseeeee</p>
                    </li>
                    <li className="contact-item">
                        <h3>Email me</h3>
                        <p>now.</p>
                    </li>
                </ul>
            </section>
        )
    }
});

module.exports = Contact;
