import React from "react";
import "./Footer.css";

import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { BrowserRouter } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="glass-footer">

        <div className="glass-footer-container">

          {/* Brand Section */}
          <div className="glass-footer-brand">

            <img
              src="https://epmwealth.com/wp-content/uploads/2023/06/logo-emp.png"
              alt="Excelsior Pinnacle Minds"
              className="glass-footer-logo"
              width="120"
              height="50"
            />

            <h2 className="glass-footer-title">
              <span>EXCELSIOR</span>
              <br />
              PINNACLE MINDS PVT. LTD.
            </h2>



            <p className="glass-footer-description">
              IRDAI Reg. No. : ____ | AMFI ARN : ____ | NSE Registration No. : ____ | BSE Registration No. : ____ | MCX Registration No. : ____
            </p>

            <div className="glass-footer-badges">
              <span>AMFI 100255</span>
              <span>BSE 1197501</span>
              <span>IRDAI</span>
              <span>MCX</span>
            </div>

            <div className="glass-footer-socials">
              <a
                href="https://www.instagram.com/epm_wealth/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.youtube.com/@epmwealth101"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>

              <a
                href="https://www.linkedin.com/company/epm-wealth/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.facebook.com/epmwealthadvisor"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>

          
          {/* Connect */}
          <div className="glass-footer-column">
            <h3>Connect</h3>

            <a
              href="https://www.instagram.com/epm_wealth/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram <br />
            </a>

            <a
              href="https://www.youtube.com/@epmwealth101"
              target="_blank"
              rel="noreferrer"
            >
              YouTube <br />
            </a>

            <a
              href="https://www.linkedin.com/company/epm-wealth/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <br />
            </a>

            <a
              href="https://www.facebook.com/epmwealthadvisor"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>

          {/* Contact */}
          <div className="glass-footer-column glass-contact">

            <h3>Office Address</h3>

            <div className="glass-contact-item">
              <FaMapMarkerAlt />
              <p>
                814, 8th Floor, Wave Silver Tower,
                <br />
                Sector-18, Noida,
                <br />
                Uttar Pradesh 201301
              </p>
            </div>

            <div className="glass-contact-item">
              <FaPhoneAlt />
              <a href="tel:+911206662012">
                +91 120 666 2012
              </a>
            </div>

            <div className="glass-contact-item">
              <FaPhoneAlt />
              <a href="tel:+919899939333">
                +91 98999 39333
              </a>
            </div>
            <h4>Email :</h4>
            <div className="glass-contact-item">
              <FaEnvelope />
              <a href="mailto:info@epmwealth.com">
                info@epmwealth.com
              </a>
            </div>

            <div className="glass-contact-item">
              <FaEnvelope />
              <a href="mailto:bdm@epmwealth.com">
                bdm@epmwealth.com
              </a>
            </div>
          </div>

        </div>

        <div className="glass-footer-divider"></div>

       <div className="glass-footer-bottom">
  <p>
    © 2026 Excelsior Pinnacle Minds Pvt. Ltd. All Rights Reserved.
  </p>

  <div className="glass-footer-legal">
    <a href="/privacy-policy">Privacy Policy</a>
    <span className="glass-footer-dot">|</span>
    <a href="/disclaimer">Disclaimer</a>
    <span className="glass-footer-dot">|</span>
    <a href="/regulatory-information">Regulatory Information</a>
  </div>
</div>

      </footer>

      {/* WhatsApp Floating Button */}

      <a
        href="https://wa.me/919899939333"
        target="_blank"
        rel="noopener noreferrer"
        className="glass-whatsapp"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </>
  );
};

export default Footer;