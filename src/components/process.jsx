const steps = [
  {
    title: "You tell me about your business",
    text: "Send your menu or service list, photos, opening hours and any colors or logo you already use.",
  },
  {
    title: "I design a first version",
    text: "You get a link to a working page you can open on your own phone.",
  },
  {
    title: "We fix what you want changed",
    text: "Tell me what to adjust. I update the site until you are happy with it.",
  },
  {
    title: "I launch it and hand it over",
    text: "Your site goes live on your own link, and I show you how to update prices and hours.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <div className="section-head">
          <h2>How working with me goes</h2>
          <p>Four steps, and you see the site before it goes live.</p>
        </div>

        <ol className="steps">
          {steps.map((s) => (
            <li key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
