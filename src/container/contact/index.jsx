import React from 'react';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './styles.scss';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "e0c74b7a-20d2-4da3-a720-27d41e34f1fc");

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
            Swal.fire({
                title: "Successfully submitted!",
                text: "Message Sent!",
                icon: "success"
            }).then(() => {
                window.location.reload();
            });
        }
    };

    return (
        <div className='contactInfo'>
            <form onSubmit={onSubmit}>
                <div className='input-box'>
                    <label>First Name :</label>
                    <input type='text' className='field' placeholder='Enter your first name' name='firstName' required />
                </div>

                <div className='input-box'>
                    <label>Last Name :</label>
                    <input type='text' className='field' placeholder='Enter your last name' name='lastName' required />
                </div>

                <div className='input-box'>
                    <label>Email ID :</label>
                    <input type='email' className='field' placeholder='Enter your email' name='email' required />
                </div>

                <div className='input-box'>
                    <label>Enter your message :</label>
                    <textarea name='message' className='field-mess' placeholder='Enter your message' required></textarea>
                </div>

                <button type='submit'>Send Message</button>
            </form>
            {/* Social Icons */}
            <div className='social-icons'>
                <a href='https://github.com/' target='_blank' rel='noopener noreferrer' className='icon'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href='https://linkedin.com/' target='_blank' rel='noopener noreferrer' className='icon'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </div>
    );
};

export default Contact;
