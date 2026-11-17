import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { EMAIL, GITHUB, LINKEDIN, WHATSAPP_LINK } from "../site";

function SiteMock() {
  return (
    <div className="mock" aria-hidden="true">
      <div className="mock-frame">
      <div className="mock-bar">
        <span />
        <span />
        <span />
        <div className="mock-url">saffrontable.example</div>
      </div>
      <div className="mock-body">
        <div className="mock-nav">
          <strong>Saffron Table</strong>
          <span>Menu</span>
          <span>Book</span>
          <span>Find us</span>
        </div>
        <div className="mock-hero">
          <h3>Slow-cooked karahi, fast-moving Fridays.</h3>
          <div className="mock-actions">
            <span className="mock-btn">Order on WhatsApp</span>
            <span className="mock-btn ghost">See menu</span>
          </div>
        </div>
        <ul className="mock-menu">
          <li>
            <span>Chicken karahi</span>
            <span>Rs 1,450</span>
          </li>
          <li>
            <span>Garlic naan</span>
            <span>Rs 120</span>
          </li>
          <li>
            <span>Doodh patti chai</span>
            <span>Rs 180</span>
          </li>
        </ul>
        <div className="mock-footer">
          <span>Open today until 11 pm</span>
          <span>Gulberg, Lahore</span>
        </div>
      </div>
      </div>
      <p className="mock-note">Sample design with a made-up business name</p>
    </div>
  );
}

export default function Home() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">Maria Siddiqa, web developer in Lahore</p>
          <h1>Websites for restaurants, salons and cafés.</h1>
          <p className="hero-lead">
            Your menu, prices, opening hours, bookings and WhatsApp button on
            one fast site that looks right on every phone. Customers find you
            on Google, check the menu and message you in one tap.
          </p>

          <div className="hero-actions">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <FaWhatsapp aria-hidden="true" /> Message me on WhatsApp
            </a>
            <a href="#projects" className="btn btn-outline">
              See my work
            </a>
          </div>

          <div className="hero-meta">
            <a href="/cv.pdf" download className="text-link">
              Download CV
            </a>
            <div className="social-row">
              <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a href={`mailto:${EMAIL}`} aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <SiteMock />
      </div>
    </section>
  );
}
