import "./Banner.css";
import star3 from "../../assets/Star 3.png";
import modal from "../../assets/boymodal.png";
function Banner() {
  return (
    <>
      <div className="banner-container">
        <div className="banner-container-titles">
          <h1>Fresh</h1>

          <svg width="689" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="150" class="svg-text">
              2022
            </text>
          </svg>

          <h1>LOOK</h1>
        </div>
        <div className="banner-right">
          <div className="banner-star">
            <img src={star3} alt="modal" />
          </div>
          <div className="banner-modal">
            <img src={modal} alt="modal" />
            <div className="image-overlay-background"></div>
            <div className="image-overlay"></div>
          </div>
        </div>
      
      </div>
    </>
  );
}

export default Banner;
