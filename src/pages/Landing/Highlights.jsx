import "./Highlights.css";

const Highlights = () => {
  return (
    <section className="highlights-container">
      <div className="container">
        <div className="header">
          <h1>highlights</h1>
          <span></span>
        </div>

        <div className="boxes">
          <div className="box">
            <div className="image">
              <img src="/landing/coffee.jpg" alt="coffee" />
              <p>signature</p>
            </div>
            <div className="info">
              <div className="name-price">
                <h2>signature coffees</h2>
                <p>2€</p>
              </div>
              <p>
                A unique experience prepared with our specially roasted beans
                and secret recipe.
              </p>
              <div className="tags">
                <p>vegan</p>
                <p>organic</p>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src="/landing/croissant.png" alt="coffee" />
            </div>
            <div className="info">
              <div className="name-price">
                <h2>fresh croissant</h2>
                <p>3€</p>
              </div>
              <p>A buttery, flaky French classic baked fresh every morning.</p>
              <div className="tags">
                <p>freshly baked</p>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src="/landing/cake.jpg" alt="coffee" />
            </div>
            <div className="info">
              <div className="name-price">
                <h2>ember cake</h2>
                <p>3€</p>
              </div>
              <p>
                Our soft, signature cake with dark chocolate and orange zest
                notes.
              </p>
              <div className="tags">
                <p>best seller</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
