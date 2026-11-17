import { useLayoutEffect } from "react";

const TARGETS =
  ".section-head, .project, .service, .steps li, .about-photo, .about-copy, .skill-group, .timeline li, .contact-info, .contact-form";

// Fades content in as it scrolls into view. Content stays visible if
// JavaScript is off or the visitor prefers reduced motion.
export function useReveal() {
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const els = Array.from(document.querySelectorAll(TARGETS));
    const timers = [];

    const reset = (el) => {
      el.classList.remove("reveal", "is-visible");
      el.style.removeProperty("--d");
    };

    els.forEach((el) => {
      const siblings = Array.from(el.parentElement.children).filter((c) =>
        c.matches(TARGETS)
      );
      const index = siblings.indexOf(el);
      el.style.setProperty("--d", `${Math.min(index, 5) * 80}ms`);
      el.classList.add("reveal");
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          el.classList.add("is-visible");
          io.unobserve(el);
          // Drop the reveal styles afterwards so hover effects work normally.
          timers.push(setTimeout(() => reset(el), 1200));
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    els.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
      els.forEach(reset);
    };
  }, []);
}
