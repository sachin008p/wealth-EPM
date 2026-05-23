import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="luxury-footer epm-overlap-panel">
        <div className="luxury-footer-top-line"></div>

        <div className="luxury-footer-container">
          <div className="luxury-footer-grid">

            {/* Brand Column */}
            <div className="luxury-footer-brand">
              <div className="luxury-footer-logo-wrap">
                <img
                  src="https://epmwealth.com/wp-content/uploads/2023/06/logo-emp.png"
                  alt="EPM Wealth"
                  className="luxury-footer-logo"
                />
              </div>

              <h2 className="luxury-footer-brand-title">
                <span>EPM</span> Wealth
              </h2>

              <p className="luxury-footer-tagline">
                INSIGHT WITH INTEGRITY
              </p>

              <p className="luxury-footer-description">
                IRDAI, AMFI, BSE, NSE &amp; MCX registered wealth management
                firm.
              </p>

              <div className="luxury-footer-badges">
                <span>AMFI 100255</span>
                <span>BSE 1197501</span>
                <span>IRDAI</span>
              </div>

              <div className="luxury-footer-socials">
                <a
                  href="https://www.instagram.com/epm_wealth/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.youtube.com/@epmwealth101"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube />
                </a>

                <a
                  href="https://www.linkedin.com/company/epm-wealth/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://www.facebook.com/epmwealthadvisor"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://wa.me/919899939333"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            {/* Connect With Us */}
            <div className="luxury-footer-column">
              <h3>CONNECT WITH US</h3>

              <a
                href="https://www.instagram.com/epm_wealth/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>

              <a
                href="https://www.youtube.com/@epmwealth101"
                target="_blank"
                rel="noreferrer"
              >
                YouTube
              </a>

              <a
                href="https://www.linkedin.com/company/epm-wealth/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://www.facebook.com/epmwealthadvisor"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </div>

            {/* Office Address */}
            <div className="luxury-footer-column">
              <h3>OFFICE ADDRESS</h3>

              <p>
                612-A, 6th Floor, Wave Silver Tower,
                Sector-18, Noida, Uttar Pradesh 201301
              </p>

              <a href="tel:+9101204264717">
                +91 0120 426 4717
              </a>

              <a href="tel:+919899939333">
                +91 98999 39333
              </a>

              <a href="mailto:info@epmwealth.com">
                info@epmwealth.com
              </a>
            </div>

          </div>
        </div>

        <div className="epm-footer-bottom-line"></div>

        <div className="epm-footer-bottom">
          <p>
            © 2026 EPM Wealth. All Rights Reserved.
          </p>

          <div className="epm-footer-links">
            <a href="/privacy-policy">
              Privacy Policy
            </a>

            <a href="/disclaimer">
              Disclaimer
            </a>

            <a href="/regulatory-information">
              Regulatory Information
            </a>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/919899939333"
        target="_blank"
        rel="noopener noreferrer"
        className="epm-whatsapp-float"
      >
        <span className="wa-shine"></span>
        <FaWhatsapp />
      </a>
    </>
  );
};

export default Footer;