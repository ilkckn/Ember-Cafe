import "./Ritual.css";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { PiTractor } from "react-icons/pi";

const Ritual = () => {
  return (
    <section className="ritual-container">
      <div className="left">
        <div className="image">
          <img src="/gallery/ritual.png" alt="" />
          
        </div>
        <div className="tag">
          <p>"The perfect pull"</p>
          <p>pressure · temp · time</p>
        </div>
      </div>
      <div className="right">
        <p>our ritual</p>
        <h1>The Alchemy of the Roast</h1>
        <p>
          Every morning before the first sunrise touches the Ember Cafe floor,
          our roasters are at work. We believe coffee is a living thing,
          requiring patience and a keen ear for the 'first crack'.
        </p>
        <div className="roasts">
          <div className="roast">
            <MdOutlineLocalFireDepartment />
            <div className="text">
              <p>small batch roasting</p>
              <p>Ensuring peak flavor profile and consistency.</p>
            </div>
          </div>
          <div className="roast">
            <PiTractor />
            <div className="text">
              <p>Ethical Sourcing</p>
              <p>Direct trade partnerships with sustainable farms.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ritual;
