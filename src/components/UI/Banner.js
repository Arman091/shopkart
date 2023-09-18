import "./Banner.css";
import star3 from "../../assets/Star 3.png";
import modal from "../../assets/boymodal.png";
function Banner() {
  return (
    <>
      <div className="banner-container">
        <div className="banner-star">
          <img src={star3} alt="modal" />
        </div>
        <div className="banner-modal">
          <img src={modal} alt="modal" />
          <div className="image-overlay-background"></div>
          <div className="image-overlay"></div>
        </div>
      </div>
    </>
  );
}

export default Banner;
