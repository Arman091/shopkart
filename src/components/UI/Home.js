import "./home.css";
import Vector1 from "../../assets/Vector (1).png";
import fbimage from "../../assets/fb.png";
import linkedin from "../../assets/linked.png";
import twitter from "../../assets/twitter.png";
import insta from "../../assets/insta.png";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <>
      <div className="header">
        <div className="header-left">
          <img src={Vector1} alt="[not_found]" />
          <p style={{ marginLeft: "12px" }}>Free Delivery</p>
          <div className="vertical-line"></div>
          <p className="return-policy">Return Policy</p>
        </div>
        <div className="header-right">
          <div className="header-1-right">
            <p>Login</p>
            <p>Follow Us</p>
          </div>
          <div className="header-2-right">
            <img src={fbimage} alt="[not-found]" />
            <img src={linkedin} alt="[not-found]" />
            <img src={twitter} alt="[not-found]" />
            <img src={insta} alt="[not-found]" />
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};
export default Home;
