import React from "react";
import "./skills.css";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaMobileAlt,
} from "react-icons/fa";

import { SiMongodb, SiExpress, SiFlutter, SiTailwindcss } from "react-icons/si";

const skillsData = [
  {
    title: "Frontend Development",
    icon: <FaReact color="#61DBFB" />,
    tech: [
      { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
      { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
      { name: "JavaScript", icon: <FaJs color="#f0db4f" /> },
      { name: "React", icon: <FaReact color="#61DBFB" /> },
      { name: "Tailwind", icon: <SiTailwindcss color="#38BDF8" /> },
    ],
  },
  {
    title: "Backend Development",
    icon: <FaNodeJs color="#3C873A" />,
    tech: [
      { name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
      { name: "Express", icon: <SiExpress color="#000000" /> },
      { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
    ],
  },
  {
    title: "Web App Development",
    icon: <FaReact color="#61DBFB" />,
    tech: [
      { name: "React Apps", icon: <FaReact color="#61DBFB" /> },
      { name: "REST APIs", icon: <FaNodeJs color="#3C873A" /> },
      { name: "Full Stack", icon: <FaJs color="#f0db4f" /> },
    ],
  },
  {
    title: "Mobile App Development",
    icon: <FaMobileAlt color="#4f46e5" />,
    tech: [
      { name: "Flutter", icon: <SiFlutter color="#02569B" /> },
      { name: "APIs", icon: <FaNodeJs color="#3C873A" /> },
      { name: "UI Design", icon: <FaReact color="#61DBFB" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills & Expertise</h2>
      <p>A comprehensive toolkit for building modern digital experiences</p>

      {/* 🔥 NEW SKILL SUMMARY BOXES */}
      <div className="skills-summary">
        <div className="summary-box">Frontend Development</div>
        <div className="summary-box">Backend Development</div>
        <div className="summary-box">Full Stack Development</div>
        <div className="summary-box">UI/UX Design</div>
      </div>

      {/* EXISTING GRID */}
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>

            <div className="skill-header">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
            </div>

            <div className="tech-list">
              {skill.tech.map((t, i) => (
                <div className="tech-box" key={i}>
                  <div className="tech-icon">{t.icon}</div>
                  <span>{t.name}</span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
