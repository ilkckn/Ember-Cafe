import "./Philosophy.css";
import { FaFire } from "react-icons/fa";
import { RiLeafFill } from "react-icons/ri";
import { TbFlaskFilled } from "react-icons/tb";

const Philosophy = () => {
  return (
    <section className="philosophy-container">
      <h1>ember</h1>
      <div className="header">
        <p>our philosophy</p>
        <h1>Artisanal Roasting: The Slow Flame</h1>
      </div>
      <div className="content">
        <div className="image">
          <img src="/story/philosophy.png" alt="" />
        </div>
        <div className="info">
          <h2>small batch excellence</h2>
          <p>
            We never rush the roast. Our "Slow Flame" process allows the unique
            terroir of every bean to blossom. From the highlands of Ethiopia to
            the volcanic soils of Guatemala, we treat every harvest like a
            precious artifact.
          </p>
          <div className="tags">
            <p>
              <FaFire />
              temperature controlled
            </p>
            <p>
              <RiLeafFill />
              ethically sourced
            </p>
            <p>
              <TbFlaskFilled />
              tasted by roastmasters
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
