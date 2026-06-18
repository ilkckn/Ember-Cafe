import "./Gallery.css";
import { useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import Ritual from "./Ritual";
import Treats from "./Treats";
import Experience from "./Experience";
import FindYourTable from "./FindYourTable";

const Gallery = () => {
  const navigate = useNavigate();
  
  return (
    <section className="gallery-container">
      <div className="container">
        <div className="header">
          <p>visual journey</p>
          <div className="main-header">
            <h1>Capturing the</h1>
            <h1>Soul of Ember</h1>
          </div>
          <p>
            Step into our world of hand-roasted aromas and warm terracotta
            walls. Every corner tells a story of artisanal passion.
          </p>
          <button className="explore" onClick={() => navigate("/story")}>
            explore
            <FaAngleDown />
          </button>
        </div>
      </div>

      <div className="ritual-component">
        <Ritual />
      </div>
      <div className="treat-component">
        <Treats />
      </div>
      <div className="experience-component">
        <Experience />
      </div>
      <div className="find-your-table-component">
        <FindYourTable />
      </div>
    </section>
  );
};

export default Gallery;
