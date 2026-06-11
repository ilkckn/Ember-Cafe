import { useState } from "react";
import "./Menu.css";
import menuData from "./MenuData.js";
import { IoStarOutline } from "react-icons/io5";
import CuratedSelection from "./CuratedSelection";
import SpecialCakes from "./SpecialCakes.jsx";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("signature-coffee");

  const getItemsByCategory = (categoryId) => {
    return menuData.items.filter((item) => item.category === categoryId);
  };

  const activeData = menuData.categories.find(
    (cat) => cat.id === activeCategory,
  );

  const filteredItems = getItemsByCategory(activeCategory);

  return (
    <section className="menu-container">
      <div className="container">
        <div className="header">
          <p>est. 1994</p>
          <h1>our menu</h1>
          <p>
            A curation of artisanal roasts and hand-crafted delicacies, born
            from the heart of our hearth. Every cup is a story, every bite a
            memory of warmth and inspiration.
          </p>
        </div>

        <div className="filter-menu">
          <div className="filter-btns">
            {menuData.categories.map((category) => (
              <div className="filter" key={category.id}>
                <button
                  className={activeCategory === category.id ? "active" : ""}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label}
                </button>
              </div>
            ))}
          </div>

          <div className="menu">
            <div className="image">
              <img src={activeData?.image} alt={activeData?.label} />
            </div>
            <div className="items">
              <h1>{filteredItems[0]?.type}</h1>
              <p>{activeData?.description}</p>
              <div className="menu-item">
                {filteredItems.map((item) => (
                  <div key={item.id} className="item">
                    <div className="name-price">
                      <p>{item.name}</p>
                      <p>{item.price.toFixed(1)} €</p>
                    </div>
                    <p>{item.description}</p>
                    <div className="tags">
                      {item.tags &&
                        item.tags.length > 0 &&
                        item.tags.map((tag) => (
                          <p key={tag}>
                            {tag === "chef's choice" ? (
                              <>
                                <IoStarOutline className="star" /> Chef Choice
                              </>
                            ) : (
                              tag
                            )}
                          </p>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="curated-selection-component">
        <CuratedSelection />
      </div>

      <div className="special-cakes-component">
        <SpecialCakes />
      </div>
    </section>
  );
};

export default Menu;
