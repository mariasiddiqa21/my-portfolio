import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import foodImg from "../assets/foodapp.png";
import portfolioImg from "../assets/portfolio.png";
import djangoImg from "../assets/django.png";
import reactContactImg from "../assets/contactreact.png";


const projectsData = [
  {
    title: "Food App UI",
    desc: "A modern and responsive food application UI with clean design, menu sections and user-friendly layout.",
    tech: ["React", "CSS", "UI/UX"],
    img: foodImg,
    live: "#",
    code: "https://github.com/mariasiddiqa21/resturant-UI",
  },

  {
    title: "Portfolio Website",
    desc: "Personal portfolio website to showcase my skills, projects and experience with a modern UI design.",
    tech: ["React", "CSS"],
    img: portfolioImg,
    live: "#",
    code: "https://github.com/mariasiddiqa21/my-portfolio",
  },

  {
    title: "Contact Book (Django)",
    desc: "A full stack contact management system built with Django where users can add, update and delete contacts.",
    tech: ["Django", "Python", "SQLite"],
    img: djangoImg,
    live: "#",
    code: "https://github.com/mariasiddiqa21/django-contactbook",
  },

  {
    title: "Contact Book (React + Python)",
    desc: "A contact book application with React frontend and Python backend allowing real-time data handling and API integration.",
    tech: ["React", "Python", "API"],
    img: reactContactImg,
    live: "#",
    code: "https://github.com/mariasiddiqa21/backend-contactbook",
  },
];


export default function Projects() {
  return (
    <section id="projects" className="projects-section">

      <h2>My Projects</h2>
      <p>A showcase of my recent work across web development, mobile apps, and design</p>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>

            {/* Image */}
            <img src={project.img} alt={project.title} />

            {/* Content */}
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              {/* Tech stack */}
              <div className="tech-tags">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a
    href={project.live}
    target="_blank"
    rel="noreferrer"
    className="btn live"
  >
    <FiExternalLink />
  </a>

  <a
    href={project.code}
    target="_blank"
    rel="noreferrer"
    className="btn github"
  >
    <FaGithub />
  </a>
</div>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
