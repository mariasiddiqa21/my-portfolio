import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const items = [
  {
    icon: <FaBriefcase aria-hidden="true" />,
    title: "Full Stack Developer",
    place: "Kodesinc",
    when: "Present, on-site",
    text: "Building web applications with React and a back end, with clean, easy-to-use interfaces.",
  },
  {
    icon: <FaBriefcase aria-hidden="true" />,
    title: "Web Developer",
    place: "Kodexbyte",
    when: "Present, remote",
    text: "Building responsive websites and connecting the front end to the back end on real client projects.",
  },
  {
    icon: <FaGraduationCap aria-hidden="true" />,
    title: "BS Computer Science",
    place: "NUML University",
    when: "2024 to 2028",
    text: "Studying software development, data structures and modern web technologies.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section section-tint">
      <div className="container">
        <div className="section-head">
          <h2>Experience and education</h2>
        </div>

        <ol className="timeline">
          {items.map((i) => (
            <li key={i.title}>
              <span className="timeline-dot">{i.icon}</span>
              <div className="timeline-card">
                <div className="timeline-top">
                  <h3>{i.title}</h3>
                  <span className="timeline-when">{i.when}</span>
                </div>
                <p className="timeline-place">{i.place}</p>
                <p>{i.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
