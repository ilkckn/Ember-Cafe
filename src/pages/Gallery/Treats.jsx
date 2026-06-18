import "./Treats.css";
import { LuLeaf } from "react-icons/lu";

const Treats = () => {
  return (
    <section className="treats-container">
      <div className="header">
        <p>handcrafted treats</p>
        <h1>signature creations</h1>
      </div>

      <div className="treats-content">
        <div className="treat-left">
          <div className="image">
            <img src="/gallery/treat-croissant.jpg" alt="" />
            <div className="text">
              <h2>the golden fold</h2>
              <p>Honey Glazed Artisan Pastry</p>
            </div>
          </div>
          <div className="tag">
            <h2>ember</h2>
            <p>
              "Flavors that linger, moments that stay. Our seasonal menu is a
              love letter to artisanal craftsmanship."
            </p>
          </div>
        </div>

        <div className="treat-right">
          <div className="tag">
            <h2>sustainable sourcing</h2>
            <p>Every bean is tracked from soil to cup.</p>
            <LuLeaf className="leaf-icon" />
          </div>
          <div className="image">
            <img src="/gallery/treat-cake.jpg" alt="" />
            <div className="text">
              <h2>ember noir</h2>
              <p>72% Dark Chocolate & Raspberry</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treats;
