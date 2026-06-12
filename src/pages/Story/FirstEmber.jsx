import "./FirstEmber.css";

const FirstEmber = () => {
  return (
    <section className="first-ember-container">
      <div className="left-content">
        <p>origins</p>
        <div className="image">
          <img src="/story/first-ember.png" alt="" />
        </div>
      </div>
      <div className="right-content">
        <p>01. the genesis</p>
        <h1>the first ember</h1>
        <div className="desc">
          <p>
            It began in a small, terracotta-walled corner of the city. In 1994,
            our founder sought more than just a caffeine kick; he sought a
            sanctuary where the smell of roasting beans felt like coming home.
          </p>
          <p>
            We started with a single, hand-operated roaster and a dream to bring
            artisanal, slow-flame quality to our neighborhood. Every cup served
            since then has carried that original spark of passion.
          </p>
        </div>
        <div className="tag">
          <p>
            "A cafe isn't just about coffee; it's about the fire that fuels the
            human spirit."
          </p>
        </div>
      </div>
    </section>
  );
};

export default FirstEmber;
