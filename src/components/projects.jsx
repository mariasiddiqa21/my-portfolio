import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import foodImg from "../assets/foodapp.png";
import portfolioImg from "../assets/portfolio.png";
import djangoImg from "../assets/django.png";
import reactContactImg from "../assets/contactreact.png";

// Add a `live` URL to any project and a "View live site" button appears.
const projectsData = [
  {
    title: "Restaurant website",
    kind: "Menu and ordering layout",
    desc: "A restaurant site with menu sections, dish cards and a clear order button, built to read well on a phone.",
    tech: ["React", "CSS", "UI design"],
    img: foodImg,
    live: "",
    code: "https://github.com/mariasiddiqa21/resturant-UI",
  },
  {
    title: "Contact book (React + Python)",
    kind: "Full stack app",
    desc: "A React front end connected to a Python API. Add, search and edit contacts with data saved on the server.",
    tech: ["React", "Python", "API"],
    img: reactContactImg,
    live: "",
    code: "https://github.com/mariasiddiqa21/backend-contactbook",
  },
  {
    title: "Contact book (Django)",
    kind: "Full stack app",
    desc: "A Django app where users add, update and delete contacts, with a SQLite database behind it.",
    tech: ["Django", "Python", "SQLite"],
    img: djangoImg,
    live: "",
    code: "https://github.com/mariasiddiqa21/django-contactbook",
  },
  {
    title: "This portfolio",
    kind: "Personal site",
    desc: "The site you are on, built with React and Vite and hosted on Netlify.",
    tech: ["React", "Vite", "CSS"],
    img: portfolioImg,
    live: "",
    code: "https://github.com/mariasiddiqa21/my-portfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <h2>Selected work</h2>
          <p>
            Websites and apps I have built. Each card links to the code, and to
            the live site where there is one.
          </p>
        </div>

        <div className="project-grid">
          {projectsData.map((p) => (
            <article className="project" key={p.title}>
              <div className="project-shot">
                <img src={p.img} alt={`${p.title} screenshot`} loading="lazy" />
              </div>
              <div className="project-body">
                <p className="project-kind">{p.kind}</p>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <ul className="tags">
                  {p.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer">
                      <FiExternalLink aria-hidden="true" /> View live site
                    </a>
                  )}
                  <a href={p.code} target="_blank" rel="noreferrer">
                    <FaGithub aria-hidden="true" /> View code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
