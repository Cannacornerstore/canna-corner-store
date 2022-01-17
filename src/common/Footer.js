import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import EventIcon from '@mui/icons-material/Event';
import TextsmsIcon from '@mui/icons-material/Textsms';
import ExternalLink from "./ExternalLink";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer-title">Check Us Out!</div>

      <div className="footer-nav">
        <div className="footer-nav-item">
          <div className="footer-nav-item-title">Follow Us</div>
          <nav>
            <div className="social-icons">
              <ExternalLink 
                src="https://www.instagram.com/canacornerstore/"
                text={<InstagramIcon fontSize="large" />} 
              />

              <ExternalLink 
                src="https://www.eventbrite.com/o/canna-corner-store-33920991365"
                text={<EventIcon fontSize="large" />} 
              />
            </div>
          </nav>
        </div>

        <div className="footer-nav-item">
          <div className="footer-nav-item-title">Contact Us</div>
          <div className="footer-nav-item-2-col">
            <TextsmsIcon />
            <p>646-474-7807</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
