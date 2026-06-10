import CommunitySection from "./CommunitySection";
import Highlights from "./Highlights";
import "./Landing.css";
import Serenity from "./Serenity";
import VisitUs from "./VisitUs";

const Landing = () => {
  return (
    <section className="landing-container">
      <div className="container">
        <div className="hero">
          <div className="hero-left">
            <p className="small-header">hand-roasted in small batches</p>
            <div className="main-header">
              <h1>a warm welcome</h1>
              <h1>a sip of serenity</h1>
            </div>
            <p>
              From the first light of day to the quiet of evening, we surround
              you with the unique aroma of our freshly roasted beans. At Ember
              Cafe, every cup tells a story.
            </p>
            <div className="btns">
              <button>explore menu</button>
              <button>our story</button>
            </div>
          </div>
          <div className="hero-right">
            <div className="image">
              <img src="/landing/hero.png" alt="" />
            </div>
          </div>
        </div>

        <div className="community-section-component">
          <CommunitySection />
        </div>
        <div className="highlights-component">
          <Highlights />
        </div>
        <div className="serenity-component">
          <Serenity />
        </div>
        <div className="visit-us-component">
          <VisitUs />
        </div>
      </div>
    </section>
  );
};

export default Landing;
