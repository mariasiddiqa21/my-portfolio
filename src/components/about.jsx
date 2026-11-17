import mariaimg from "../assets/mariaimg.jpeg";

export default function About() {
  return (
    <section id="about" className="section section-tint">
      <div className="container about-grid">
        <div className="about-photo">
          <img src={mariaimg} alt="Maria Siddiqa" loading="lazy" />
        </div>

        <div className="about-copy">
          <h2>Hi, I'm Maria</h2>
          <p>
            I'm a full stack developer and designer in Lahore. I build
            websites that are simple to use, quick to load and easy for a
            business owner to keep up to date.
          </p>
          <p>
            I work as a developer at Kodesinc and Kodexbyte, and I'm studying
            BS Computer Science at NUML. Alongside that, I take on website
            projects for small local businesses.
          </p>

          <dl className="facts">
            <div>
              <dt>10+</dt>
              <dd>projects built</dd>
            </div>
            <div>
              <dt>10+</dt>
              <dd>clients</dd>
            </div>
            <div>
              <dt>1+</dt>
              <dd>year working professionally</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
