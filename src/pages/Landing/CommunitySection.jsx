import "./CommunitySection.css";

const CommunitySection = () => {
  return (
    <section className="community-section-container">
      <div className="container">
        <div className="com-left">
          <div className="image">
            <img src="/landing/community.png" alt="" />
          </div>
          <div className="tag">
            <p>Est.1994</p>
            <p>Growing together with our community.</p>
          </div>
        </div>
        <div className="com-right">
          <h2>At the Heart of Community</h2>
          <h2>A Fire Within</h2>
          <p>
            Ember Cafe is more than just a coffee shop; it's a meeting point
            where ideas flourish, friendships strengthen, and time slows down.
          </p>
          <p>
            By combining traditional roasting methods with modern presentations,
            we reveal the hidden aromas within every bean. For us, coffee is a
            craft, and hospitality is an art.
          </p>
          <div className="numbers">
            <div className="arabica-beans">
              <p>100%</p>
              <span>arabica beans</span>
            </div>
            <div className="custom-roasts">
              <p>24+</p>
              <span>custom roasts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
