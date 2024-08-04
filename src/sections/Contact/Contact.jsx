import styles from './ContactStyles.module.css';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';

function Contact() {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [statusMessage, setStatusMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            setStatusMessage('Please enter a valid email address.');
            return;
        }

        // Basic sanitization to prevent injection attacks
        const sanitize = (str) => {
            return str.replace(/<[^>]*>/g, ''); // Remove HTML tags
        };

        const sanitizedFormData = {
            name: sanitize(formData.name),
            email: sanitize(formData.email),
            message: sanitize(formData.message),
        };

        // Update form with sanitized data
        Object.keys(sanitizedFormData).forEach(key => {
            const input = form.current.querySelector(`[name=${key}]`);
            if (input) {
                input.value = sanitizedFormData[key];
            }
        });

        emailjs.sendForm(
            'service_wcp44mn',
            'template_bin0s1p',
            form.current,
            'aUvnpvzZBNvzKGtQD'
        ).then((result) => {
            console.log(result.text);
            setStatusMessage('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        }).catch((error) => {
            console.error(error.text);
            setStatusMessage('There was an error sending your message.');
        });

        setTimeout(() => {
            setStatusMessage('');
        }, 5000);
    };

    return (
        <section id='contact' className={styles.container}>
            <h1 className='sectionTitle'>Contact</h1>
            {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
            <form ref={form} onSubmit={sendEmail}>
                <div className='formGroup'>
                    <label htmlFor="name" hidden>
                        Name
                    </label>
                    <input type="text" name="name" id="name" placeholder='Name' value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className='formGroup'>
                    <label htmlFor="email" hidden>
                        Email
                    </label>
                    <input type="text" name="email" id="email" value={formData.email} onChange={handleInputChange} placeholder='Email' required />
                </div>
                <div className='formGroup'>
                    <label htmlFor="message" hidden>
                        Message
                    </label>
                    <textarea name="message" id="message" placeholder='Message' value={formData.message} onChange={handleInputChange} required></textarea>
                </div>
                <input type="submit" className='hover btn' value='Submit' />
            </form>
        </section>
    );
}

export default Contact;
