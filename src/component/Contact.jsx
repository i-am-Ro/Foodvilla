import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact FoodVilla 📞</h1>
      <p>Have a question or feedback? We'd love to hear from you!</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <p>
          <strong>Email:</strong> support@foodvilla.com
        </p>
        <p>
          <strong>Phone:</strong> +91 98765 43210
        </p>
        <p>
          <strong>Address:</strong> FoodVilla HQ, Street 21, Bengaluru, India
        </p>
      </div>
    </div>
  );
};

export default Contact;
