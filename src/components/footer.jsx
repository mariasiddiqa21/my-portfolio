import React from "react";
import "./footer.css";
import { FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT - BRAND */}
        <div className="footer-brand">
          <h3>Portfolio</h3>
          <p>
            Building digital experiences that make a difference.
            Let's create something amazing together.
          </p>

          {/* Buttons */}
          <div className="footer-buttons">
            <a href="https://github.com/mariasiddiqa21" target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>

            <a href="mailto:mariasiddiqua21@gmail.com">
              <FaEnvelope /> Email
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* SERVICES */}
        <div className="footer-links">
          <h4>Services</h4>
          <a href="https://www.w3schools.com/whatis/">Web Development</a>
          <a href="https://developer.android.com/">Mobile Apps</a>
          <a href="https://www.figma.com/ui-design/">UI/UX Design</a>
          <a href="https://www.upwork.com/">Consulting</a>
        </div>

        {/* RESOURCES */}
        <div className="footer-links">
          <h4>Resources</h4>
          <a href="https://medium.com/">Blog</a>
          <a href="https://substack.com/">Newsletter</a>
          <a href="https://www.privacypolicygenerator.info/">Privacy Policy</a>
          <a href="https://www.termsandconditionsgenerator.com/">Terms of Service</a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © 2026 Maria. All rights reserved.
      </div>

    </footer>
  );
}

