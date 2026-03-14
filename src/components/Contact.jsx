import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/mojklaqb", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setSubmitted(false), 5000);
            } else {
                alert("Oops! There was a problem submitting your form.");
            }
        } catch (error) {
            alert("Oops! There was a problem submitting your form.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-wrapper flex-container">
                    <div className="contact-info">
                        <h3 className="contact-heading">Let's Connect</h3>
                        <p className="contact-desc">
                            Whether you have a question, a project opportunity, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
                        </p>

                        <div className="contact-details">
                            <div className="contact-detail-item">
                                <span className="contact-icon">📧</span>
                                <a href="mailto:lithenpavansai98@gmail.com">lithenpavansai98@gmail.com</a>
                            </div>
                            <div className="contact-detail-item">
                                <span className="contact-icon">📞</span>
                                <a href="tel:+919290108844">+91 9290108844</a>
                            </div>
                            <div className="contact-detail-item">
                                <span className="contact-icon">📍</span>
                                <span>Andhra Pradesh, India</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container section-glass">
                        {submitted ? (
                            <div className="success-message animate-fade-in" style={{ textAlign: 'center', padding: '2rem' }}>
                                <div className="success-icon" style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Thank You!</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                                    Your message has been sent successfully. I'll get back to you as soon as possible!
                                </p>
                                <button 
                                    onClick={() => setSubmitted(false)} 
                                    className="button-outline"
                                    style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                    ></textarea>
                                </div>

                                <button type="submit" className="button-primary submit-btn" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
