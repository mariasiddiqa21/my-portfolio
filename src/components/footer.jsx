import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { EMAIL, GITHUB, LINKEDIN, WHATSAPP_LINK } from "../site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">Maria Siddiqa</p>
          <p className="footer-text">
            Websites for restaurants, salons and cafés in Lahore.
          </p>
        </div>

        <nav className="footer-links" aria-label="Footer">
          <a href="#projects">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="social-row">
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={`mailto:${EMAIL}`} aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        © 2026 Maria Siddiqa. All rights reserved.
      </div>
    </footer>
  );
}
