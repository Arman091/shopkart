import "./home.css";
import star from "../../assets/Star 1.png";
import Banner from "./Banner";
function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div className="navbar">
          <div className="nav-title">
            <p className="nav-main-title">ShopKart</p>

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
            <p>Home</p>
            <p>About</p>
            <p>Our Products</p>
            <p>Contact US</p>
          </div>
        </div>

        <Banner />
        <div className="banner-border-bottom">
          <hr />
          <img src={star} alt="Star" className="ban-bot-star" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
