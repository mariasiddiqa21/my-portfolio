import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_LINK } from "../site";

const links = [
  { href: "#projects", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  // Shadow under the header once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the menu link for the section currently on screen.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const ids = ["home", ...links.map((l) => l.href.slice(1))];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id === "home" ? "" : entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
      <div className="container header-inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          Maria Siddiqa
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav id="site-nav" className={open ? "site-nav is-open" : "site-nav"}>
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className={isActive ? "is-active" : undefined}
                aria-current={isActive ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            );
          })}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
          >
            <FaWhatsapp aria-hidden="true" /> WhatsApp me
          </a>
        </nav>
      </div>
    </header>
  );
}
