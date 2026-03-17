import '../styles/Footer.css';
import { Phone, Mail, GitHub, Instagram, Favorite, LinkedIn } from '@mui/icons-material';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h3>About CreativeStore</h3>
          <p>
            Your one-stop destination for quality products that stand the test of time. 
            We're committed to delivering exceptional shopping experiences with care and creativity.
          </p>
        </div>

        {/* Social Links */}
        <div className="footer-section social">
          <h3>Follow Me</h3>
          <div className="social-links">
            <a href="https://github.com/KingNeutron27" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHub className="social-icon" />
            </a>
            <a href="https://linkedin.com/in/kingsley-esedebe-b12777325" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedIn className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="social-icon" />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <div className="contact-item">
              <Phone className="contact-icon" />
              <span>+234 814 165 6446</span>
            </div>
            <div className="contact-item">
              <Mail className="contact-icon" />
              <span>kingsleyesedebe@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2025 CreativeStore. All rights reserved. 
          Made with <Favorite className="heart-icon" /> by Kingsley
        </p>
      </div>
    </footer>
  );
}

export default Footer;