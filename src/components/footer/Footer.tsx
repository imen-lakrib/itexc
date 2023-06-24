import "./footer.css";
import { Divider } from "@mui/material";
const Footer = () => {
  return (
    <div className="footer-container">
      <Divider sx={{ margin: "20px 0" }} />

      <div className="footers">
        <div className="footer 1">
          <h4>Help center</h4>
          <ul>
            <li>Frequently Asked Questions</li>
            <li>Driver Training Platform</li>
            <li>Support</li>
          </ul>
        </div>

        <div className="footer 2">
          <h4>Healthy 24</h4>
          <ul>
            <li>C.G.U</li>
            <li>Privacy</li>
            <li>Press</li>
            <li>Partnership</li>
          </ul>
        </div>

        <div className="footer 3">
          <h4>Download the application</h4>
          <div className="play-app-store">
            <img src="/playStore.png" alt="playStore" />
            <img src="/appStore.png" alt="appStore" />
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Healthy 2023 ©</p>
      </div>
    </div>
  );
};

export default Footer;
