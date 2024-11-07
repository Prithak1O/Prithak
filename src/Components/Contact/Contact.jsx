import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');

        const formData = new FormData(event.target);
        
        // Validate inputs
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        if (!name || !email || !message) {
            setError('Please enter your details.');
            return;
        }

        formData.append("access_key", "9028bc06-659c-4d6a-af27-be2f8d7bded6");
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            setSuccess('Your message was successfully sent!');
            event.target.reset();

            // Clear success message after 5 seconds
            setTimeout(() => {
                setSuccess('');
            }, 5000);
        } else {
            setError('Failed to submit form, please try again.');
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I would adore hearing from you! Please contact me directly or use the form if you have any questions, comments, or inquiries. I'm grateful.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <p>prithakacharya23@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <p>Ph No : +977 9849048162</p>
                        </div>
                        <div className="contact-detail">
                            <p>Biratnagar-3, Nepal</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' />
                    
                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder='Enter your Email' name='email' />
                    
                    <label htmlFor="message">Write Your Message here</label>
                    <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
                    
                    {error && <p className="error-message">{error}</p>}
                    {success && <p className="success-message">{success}</p>}

                    <button className="contact-submit" type='submit'>Submit Now</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
