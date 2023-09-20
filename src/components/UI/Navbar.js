import "./home.css";
import star from "../../assets/Star 1.png";
import arrow from "../../assets/arrow1.png";
import Hamburger from "../../assets/hamburger menu.png";
import Banner from "./Banner";
import cross from "../../assets/cross.png";
import Navigation from "./NavItems";
import { useState } from "react";
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <>
      <div className="nav-container">
        <div className="navbar">
          <div className="nav-title">
            <p className="nav-main-title">ShopKart</p>
            {!isMobileMenuOpen ? (
              <img
                src={Hamburger}
                alt="Star"
                className="hamburger-icon"
                onClick={toggleMobileMenu}
              />
            ) : (
              <img
                src={cross}
                alt="cross"
                className="hamburger-icon"
                onClick={toggleMobileMenu}
              />
            )}

            {isMobileMenuOpen && (
              <div className="mobile-menu">
                <Navigation />
              </div>
            )}
            <div className="nav-title-right">
              <p>WishList&nbsp;(0)</p>
              <p>BAG&nbsp;(0)</p>
            </div>
          </div>
          <div className="nav-border">
            <hr />

            <img src={star} alt="Star" className="star-image" />
          </div>
          <div className="nav-items">
            <Navigation />
          </div>
        </div>

        <Banner />
        <div className="banner-border-bottom">
          <hr />
          <img src={star} alt="Star" className="ban-bot-star" />
        </div>
        <div className="see-more">
          <p>See More</p>
          <span>
            <img src={arrow} alt="arrow" />
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
