import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiFlutter, SiTailwindcss } from "react-icons/si";

const groups = [
  {
    title: "Front end",
    note: "What visitors see and tap",
    items: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Back end",
    note: "Forms, data and APIs",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    title: "Mobile and tools",
    note: "Apps and everyday workflow",
    items: [
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "GitHub", icon: <FaGithub /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head">
          <h2>Tools I use</h2>
        </div>

        <div className="skill-grid">
          {groups.map((g) => (
            <div className="skill-group" key={g.title}>
              <h3>{g.title}</h3>
              <p className="skill-note">{g.note}</p>
              <ul>
                {g.items.map((i) => (
                  <li key={i.name}>
                    {i.icon}
                    <span>{i.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
