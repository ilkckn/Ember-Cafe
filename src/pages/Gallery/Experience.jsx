import "./Experience.css";
import { FaWifi, FaPaw, FaLeaf } from "react-icons/fa";

const Experience = () => {
  return (
    <section className="experience-container">
      <div className="content">
        <p>the experience</p>
        <h1>designed for stillness</h1>
        <p>
          Our space is more than a cafe. It's a living hearth a sanctuary from
          the rush. We've balanced the grounding warmth of terracotta with airy,
          open layouts to create a place where you can breathe, create, and
          connect.
        </p>
        <div className="tags">
          <div className="tag">
            <FaWifi />
            <p>HIGH SPEED CONNECTIVITY</p>
          </div>
          <div className="tag">
            <FaPaw />
            <p>PET FRIENDLY GARDEN</p>
          </div>
          <div className="tag">
            <FaLeaf />
            <p>ZERO WASTE PROGRAM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
