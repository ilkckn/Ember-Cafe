import "./Contact.css";
import { TiArrowRight } from "react-icons/ti";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
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
          <form>
            <div className="name">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="subject">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="General Inquiry" />
            </div>
            <div className="message">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="How can I help you?"></textarea>
            </div>
            <button type="submit">Send Message</button>
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
