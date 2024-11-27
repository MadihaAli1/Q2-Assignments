import '../../styles/contact-styles/styles.css';

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p className="contact-description">
                We would love to hear from you! Whether you have a question, want to book an appointment, or share feedback, feel free to reach out to us.
            </p>
            <div className="contact-details">
                <p><strong>Phone:</strong> 0321-9988776</p>
                <p><strong>Email:</strong> contact@beautysalon.com</p>
                <p><strong>Address:</strong> 123 Beauty St, Karachi</p>
            </div>
            <div className="contact-form">
                <form method="post">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" name="message" required></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;