import { FaUtensils, FaCut, FaCalendarCheck, FaWhatsapp } from "react-icons/fa";

const services = [
  {
    icon: <FaUtensils aria-hidden="true" />,
    title: "Restaurant and café websites",
    text: "Menu with prices, photos, opening hours and a map, so people can decide before they walk in.",
  },
  {
    icon: <FaCut aria-hidden="true" />,
    title: "Salon and studio websites",
    text: "Service list, price list, gallery and a simple way to ask for an appointment.",
  },
  {
    icon: <FaCalendarCheck aria-hidden="true" />,
    title: "Booking and enquiry forms",
    text: "A form that sends the details straight to your email, so you stop losing enquiries in DMs.",
  },
  {
    icon: <FaWhatsapp aria-hidden="true" />,
    title: "WhatsApp and Google Maps",
    text: "One-tap buttons to message you or get directions, on every page.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section section-tint">
      <div className="container">
        <div className="section-head">
          <h2>What I build for local businesses</h2>
          <p>
            If your restaurant, salon or café has no website, or has one that is
            hard to use on a phone, this is what I can fix.
          </p>
        </div>

        <div className="service-grid">
          {services.map((s) => (
            <div className="service" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
