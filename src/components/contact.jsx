import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { EMAIL, PHONE_DISPLAY, WHATSAPP_LINK } from "../site";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState({ type: "idle", text: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ type: "sending", text: "Sending your message..." });

    emailjs
      .sendForm(
        "service_2zykl7b",
        "template_oh5zuqi",
        form.current,
        "vw3VmCYzS5nDTfDHV"
      )
      .then(
        () => {
          setStatus({
            type: "success",
            text: "Message sent. I'll reply by email soon.",
          });
          form.current.reset();
        },
        (error) => {
          console.log(error);
          setStatus({
            type: "error",
            text: "The message did not send. Try again, or message me on WhatsApp.",
          });
        }
      );
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-head">
          <h2>Tell me about your business</h2>
          <p>
            Write a few lines about what you need, or message me on WhatsApp.
            I reply to every message.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <FaWhatsapp aria-hidden="true" /> Message me on WhatsApp
            </a>

            <ul className="contact-list">
              <li>
                <FaEnvelope aria-hidden="true" />
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>
                <FaPhone aria-hidden="true" />
                <span>{PHONE_DISPLAY}</span>
              </li>
              <li>
                <FaMapMarkerAlt aria-hidden="true" />
                <span>Lahore, Pakistan</span>
              </li>
            </ul>

            <p className="hours">
              Monday to Friday, 9 am to 6 pm. Weekends for urgent projects.
            </p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" required />

            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required />

            <label htmlFor="subject">Business name and type</label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="For example: Gulberg Café"
              required
            />

            <label htmlFor="message">What do you need?</label>
            <textarea id="message" name="message" rows="5" required />

            <button
              type="submit"
              className="btn btn-primary"
              disabled={status.type === "sending"}
            >
              <FaPaperPlane aria-hidden="true" /> Send message
            </button>

            <p
              className={`form-status ${status.type}`}
              role="status"
              aria-live="polite"
            >
              {status.text}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
