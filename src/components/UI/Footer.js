import "./Footer.css";
import ellipse from "../../assets/Ellipse 1.png";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-left">
            <h3>News Letter</h3>
            <p>Get news about articles and updates in your inbox.</p>
          </div>
          <div className="footer-right">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Message" />
          </div>
        </div>
        <h1>GET IN TOUCH</h1>
        <div className="ellipse">
          <img src={ellipse} alt="ellipese" />
          <p>SEND</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright 2022 All Right Reserved By SG</p>
      </div>
    </div>
  );
}

export default Footer;
