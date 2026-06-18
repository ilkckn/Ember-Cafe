import "./Contact.css";
import { useState } from "react";
import { TiArrowRight } from "react-icons/ti";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { useEffect } from "react";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [success]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact-container">
      <div className="left-content">
        <p>contact</p>
        <h1>Connect with us</h1>
        <h1>at the heart</h1>
        <div className="visiting-us">
          <p>visiting us?</p>
          <p>123 Artisanal Alley, Roasted District</p>
          <p>Portland, OR 97201</p>
          <button>
            get directions <TiArrowRight />
          </button>
        </div>
      </div>
      <div className="right-content">
        <div className="content">
          <p>Est.1994</p>
          <form onSubmit={handleSubmit}>
            <div className="name">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="subject">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="General Inquiry"
              />
            </div>
            <div className="message">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
            {success && <p className="success">Message sent successfully!</p>}
          </form>
          <span className="line"></span>
          <div className="contact-info">
            <div className="phone">
              <FiPhone />
              <p>Phone: 555-1234</p>
            </div>
            <div className="email">
              <MdOutlineEmail />
              <p>Email: hello@embercafe.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
