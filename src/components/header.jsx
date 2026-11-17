import { useState } from "react";
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

  return (
    <header className="site-header">
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
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
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
