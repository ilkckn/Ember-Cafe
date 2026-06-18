import "./CuratedSelection.css";
import { FaAngleRight } from "react-icons/fa6";

const CuratedSelection = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section className="curated-selection-container">
      <div className="header">
        <p>curated selection</p>
        <h1>perfect pairings</h1>
      </div>
      <div className="content">
        <div className="box">
          <div className="image">
            <img src="/menu/curated-croissant.jpg" alt="" />
          </div>
          <div className="info">
            <h2>The Morning Ritual</h2>
            <p>
              Our signature Ember Latte paired with a warm, flaky Heritage
              Croissant. The ultimate start to your day.
            </p>
            <div className="price-detail">
              <p>€ 10.00</p>
              <button onClick={scrollToTop}>
                view details <FaAngleRight />
              </button>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src="/menu/curated-cake.jpg" alt="" />
          </div>
          <div className="info">
            <h2>Midnight Indulgence</h2>
            <p>
              A slice of our decadent Ember Cake served with a single-origin
              Origin Pour-over to balance the richness.
            </p>
            <div className="price-detail">
              <p>€ 16.50</p>
              <button onClick={scrollToTop}>
                view details <FaAngleRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuratedSelection;
