import "./Footer.css";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { MdChair } from "react-icons/md";

const Footer = () => {
  return (
    <section className="footer-container">
      <img src="/logo/logo.png" alt="logo" />
      <h1>ember cafe</h1>
      <div className="policy-terms-kit">
        <p>privacy policy</p>
        <p>terms of service</p>
        <p>press kit</p>
      </div>
      <div className="social">
        <FaInstagram />
        <FaTwitter />
        <FaFacebookF />
      </div>
      <p>© 2024 Ember Cafe. Hand-roasted in small batches.</p>
      <div className="reserve-table">
        <p>reserve table</p>
        <MdChair />
      </div>
    </section>
  );
};

export default Footer;
