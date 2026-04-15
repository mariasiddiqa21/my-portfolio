import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2zykl7b",     // 🔥 replace
        "template_oh5zuqi",    // 🔥 replace
        form.current,
        "vw3VmCYzS5nDTfDHV"      // 🔥 replace
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          form.current.reset(); // clear form
        },
        (error) => {
          alert("Failed to send ❌");
          console.log(error);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Get In Touch</h2>

      <p className="subtitle">
        Have a project in mind or want to collaborate? I'd love to hear from you!
      </p>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <h3>Let's Talk</h3>

          <p className="desc">
            
            Whether you have a question, want to start a project, or simply want to connect, feel free to reach out. I'm always open to discussing new projects and opportunities.
          </p>

          <div className="contact-item">
            <div className="icon-box"><FaEnvelope /></div>
            <div>
              <h4>Email</h4>
              <p>mariasiddiqua21@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon-box"><FaPhone /></div>
            <div>
              <h4>Phone</h4>
              <p>+92 336 4111054</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon-box"><FaMapMarkerAlt /></div>
            <div>
              <h4>Location</h4>
              <p>Lahore, Pakistan</p>
            </div>
          </div>


          <div className="working-hours-container">
        <div className="working-hours"> 
          <h3>Working Hours</h3> 
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p> 
          <p>Weekend: Available for urgent projects</p> 
          </div> 
          </div>
          </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-right">

          <form ref={form} onSubmit={sendEmail} className="contact-form">

            <label>Name</label>
            <input type="text" name="name" placeholder="Your name" required />

            <label>Email</label>
            <input type="email" name="email" placeholder="your.email@example.com" required />

            <label>Subject</label>
            <input type="text" name="subject" placeholder="How can I help?" required />

            <label>Message</label>
            <textarea name="message" placeholder="Tell me about your project..." rows="5" required></textarea>

            <button type="submit">
              <FaPaperPlane /> Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}
