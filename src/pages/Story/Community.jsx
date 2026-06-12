import "./Community.css";
import { BsStars } from "react-icons/bs";

const Community = () => {
  return (
    <section className="community-container">
      <div className="header">
        <div className="header-left">
          <p>the community</p>
          <h1>Gather: A Place for</h1>
          <h1>Everyone</h1>
        </div>
        <div className="header-right">
          <p>
            Ember is more than a destination; it's a sanctuary for creators,
            dreamers, and early morning thinkers.
          </p>
        </div>
      </div>
      <div className="content">
        <div className="content-left">
          <img src="/story/community-left.png" alt="" />
          <div className="content-left-overlay">
            <p>The Creator's Den</p>
            <p>A space designed for focus and inspiration.</p>
          </div>
        </div>
        <div className="content-right">
          <div className="right-top">
            <button>art of pour</button>
            <img src="/story/community-right-top.png" alt="" />
          </div>
          <div className="right-bottom">
            <div className="right-bottom-left">
              <img src="/story/community-right-bottom.png" alt="" />
            </div>
            <div className="right-bottom-content">
              <BsStars />
              <p>Hand-roasted</p>
              <p>small batches only</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;