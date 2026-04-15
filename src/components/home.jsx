import React from "react";
import "./Home.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <section id="home" className="home">

      {/* Background Blobs */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <div className="home-content">
        <h4>Hello, I'm</h4>
        <h1 className="name">Maria Siddiqa.</h1>
        <h2>Full Stack Developer & Creative Designer</h2>

        <p>
          I create modern, responsive and user-friendly web applications.
        </p>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://github.com/mariasiddiqa21"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/maria-siddiqa/"><FaLinkedin /></a>
          <a href="mailto:mariasiddiqua21@gmail.com"><FaEnvelope /></a>
        </div>

        {/* Buttons */}
        <div className="home-buttons">
          <a href="#contact" className="btn primary">Get In Touch</a>
          <a href="/cv.pdf" download className="btn secondary">Download CV</a>
        </div>
      </div>

    </section>
  );
}
