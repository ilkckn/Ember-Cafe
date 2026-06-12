import { useState } from "react";
import "./SpecialCakes.css";
import menuData from "./MenuData.js";
import { RiMedalLine } from "react-icons/ri";
import { FiArrowRight,FiArrowLeft } from "react-icons/fi";

const SpecialCakes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const specialCakes = menuData.items.filter(
    (item) => item.category === "special-cakes",
  );

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % specialCakes.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + specialCakes.length) % specialCakes.length,
    );
  };

  const currentCake = specialCakes[currentIndex];
  const nextCake = specialCakes[(currentIndex + 1) % specialCakes.length];

  return (
    <section className="special-cakes-container">
      <div className="header">
        <p>the sweet hearth</p>
        <h1>special cakes</h1>
      </div>
      <div className="special-cakes">
        <div className="cake-left">
          <div className="box-left">
            <img src={currentCake.image} alt={currentCake.name} />
          </div>
          <div className="box-right">
            <p>
              <RiMedalLine />
              {currentCake.type}
            </p>
            <h1>{currentCake.name}</h1>
            <p>{currentCake.description}</p>
            <div className="price-order">
              <p>€ {currentCake.price} / slice</p>
              <button>order now</button>
            </div>
          </div>
        </div>

        <div className="cake-right">
          <div className="name-desc-tags">
            <h1>{nextCake.name}</h1>
            <p>{nextCake.description}</p>
            <div className="tags">
              {nextCake.tags.map((tag) => (
                <p key={tag}>{tag}</p>
              ))}
            </div>
          </div>
          <div className="price-next-prev-btn">
            <p>€ {nextCake.price}</p>
            <div className="next-prev-btns">
              <button onClick={handlePrev}>
                <FiArrowLeft />
              </button>
              <button onClick={handleNext}>
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialCakes;
