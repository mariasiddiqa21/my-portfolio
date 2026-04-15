import React from "react";
import "./Experience.css";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="experience-section">

      <h2>Experience & Education</h2>
      <p className="subtitle">
        My professional journey and academic background
      </p>

      <div className="timeline">

        {/* 1️⃣ Kodesinc */}
        <div className="timeline-item">
          <div className="timeline-icon">
            <FaBriefcase />
          </div>

          <div className="timeline-content">
            <h3>Full Stack Developer</h3>
            <span className="company">Kodesinc</span>
            <span className="date">Present (on-site)</span>

            <p>
              Working as a full stack developer building scalable web applications
              with modern technologies and clean UI/UX.
            </p>
          </div>
        </div>

        {/* 2️⃣ Kodexbyte */}
        <div className="timeline-item">
          <div className="timeline-icon">
            <FaBriefcase />
          </div>

          <div className="timeline-content">
            <h3>Web Developer</h3>
            <span className="company">Kodexbyte</span>
            <span className="date">Present (remote)</span>

            <p>
              Developed responsive websites and worked on frontend and backend
              integration for real-world projects.
            </p>
          </div>
        </div>

        {/* 3️⃣ Education */}
        <div className="timeline-item">
          <div className="timeline-icon edu">
            <FaGraduationCap />
          </div>

          <div className="timeline-content">
            <h3>BS Computer Science</h3>
            <span className="company">NUML University</span>
            <span className="date">2024 - 2028</span>

            <p>
              Currently pursuing BSCS with focus on software development,
              data structures and modern technologies.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
