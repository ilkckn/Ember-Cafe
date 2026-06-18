import { useNavigate } from "react-router-dom";
import "./Serenity.css";
import { MdArrowRightAlt } from "react-icons/md";

const Serenity = () => {
  const navigate = useNavigate();

  return (
    <section className="serenity-container">
      <div className="container">
        <div className="header">
          <h1>Corner of Serenity</h1>
          <div className="par-view">
            <p>Moments from the atmosphere we designed for you</p>
            <p onClick={() => navigate("/gallery")}>
              view all <MdArrowRightAlt />
            </p>
          </div>
        </div>

        <div className="boxes">
          <div className="boxes-left">
            <img src="/landing/serenity-cafe.png" alt="" />
          </div>

          <div className="boxes-right">
            <div className="image">
              <img src="/landing/serenity-coffee-grinder.jpg" alt="" />
            </div>
            <div className="image">
              <img src="/landing/cafe-armchair.jpg" alt="" />
            </div>
            <div className="image">
              <img src="/landing/coffee-machine.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Serenity;
