import React from "react";
import "./about.css";
import mariaimg from "../assets/mariaimg.jpeg";

// Icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";

const techStack = [
  { icon: <FaHtml5 color="#e34c26" />, name: "HTML" },
  { icon: <FaCss3Alt color="#264de4" />, name: "CSS" },
  { icon: <FaJs color="#f0db4f" />, name: "JavaScript" },
  { icon: <FaReact color="#61DBFB" />, name: "React" },
  { icon: <FaNodeJs color="#3C873A" />, name: "Node.js" },
  { icon: <SiExpress color="#000000" />, name: "Express" },
  { icon: <SiMongodb color="#4DB33D" />, name: "MongoDB" },
  { icon: <FaGithub color="#000" />, name: "GitHub" },
  { icon: <SiTailwindcss color="#38BDF8" />, name: "Tailwind" },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-image">
          <div className="about-image-bg"></div>
          <img src={mariaimg} alt="Maria" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">

          <h2>About Me</h2>

          <p>
            I’m a dedicated Full Stack Developer and Creative Designer with a passion for building modern, responsive and user-friendly web applications.
            I focus on clean code, smooth UI/UX and continuous learning.
          </p>

          {/* 🔥 TECH STACK FIRST */}
          <div className="tech-section">
            <h3>Tech Stack</h3>

            <div className="slider">
              <div className="slide-track">
                {techStack.concat(techStack).map((tech, index) => (
                  <div className="tech-item" key={index}>
                    <div className="icon">{tech.icon}</div>
                    <p>{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 🔥 STATS AFTER TECH */}
          <div className="stats-section">

            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">30+</div>
              <div className="stat-label">Clients</div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
