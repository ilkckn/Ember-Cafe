import { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { RiMenu5Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleReSize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleReSize);
    return () => window.removeEventListener("resize", handleReSize);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div
        className={`menu-overlay ${isMenuOpen ? "visibility" : ""}`}
        onClick={handleClose}
      ></div>
      <section className="navbar-container">
        <div className="container">
          <nav>
            <div className="logo">
              <img src="/logo/logo.png" alt="logo" />
              <h1>ember cafe</h1>
            </div>
            <div className="links">
              <ul>
                <li>
                  <NavLink to="/" onClick={scrollToTop}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/menu" onClick={scrollToTop}>
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/story" onClick={scrollToTop}>
                    Story
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/gallery" onClick={scrollToTop}>
                    Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" onClick={scrollToTop}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="reserve-btn-mobileIcon">
              <RiMenu5Line onClick={toggleMobileMenu} />
              <button>reserve</button>
            </div>

            <div className="mobile-menu-container">
              {isMenuOpen && (
                <div className="mobile-menu">
                  <div className="menu-close">
                    <IoMdClose onClick={handleClose} />
                  </div>
                  <div className="logo-links">
                    <div className="mobile-logo">
                      <h1>ember cafe</h1>
                    </div>
                    <div className="mobile-links">
                      <ul>
                        <li>
                          <NavLink to="/" onClick={handleClose}>
                            Home
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/menu" onClick={handleClose}>
                            Menu
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/story" onClick={handleClose}>
                            Story
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/gallery" onClick={handleClose}>
                            Gallery
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/contact" onClick={handleClose}>
                            Contact
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="all-rights-logo">
                    <img src="/logo/logo.png" alt="logo" />
                    <p>© 2025 Ember Cafe</p>
                    <p>Crafted by MCCreative Studio</p>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
