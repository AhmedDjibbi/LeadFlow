import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="about-hero">
        <div className="about-hero-art" aria-hidden="true">
          <img src="/assets/about-hero.png" alt="" width="2048" height="768" />
        </div>

        <div className="container hero-copy-wrap">
          <div className="about-hero-copy">
            <span className="about-eyebrow"><i></i>About Us<span className="eyebrow-dash"></span></span>
            <h1>Turning Ideas into<br /><span className="accent">Intelligent</span> Solutions.</h1>
            <p className="about-lead">At LeadFlow, we're more than just a tech company — we're a team of innovators building AI-powered solutions, scalable software, and intelligent systems to help businesses grow and thrive in the digital age.</p>
            <span className="about-rule" aria-hidden="true"></span>
          </div>
        </div>

        <div className="container">
          <div className="about-cards">
            <article className="about-card">
              <span className="about-card-icon"><svg className="icon" aria-hidden="true"><use href="#i-target" /></svg></span>
              <h3>Our Mission</h3>
              <p>To empower businesses with intelligent technology, combining the power of AI and robust engineering to create real and lasting impact.</p>
            </article>

            <article className="about-card">
              <span className="about-card-icon"><svg className="icon" aria-hidden="true"><use href="#i-eye" /></svg></span>
              <h3>Our Vision</h3>
              <p>To be a global leader in AI-powered solutions, driving innovation and shaping a smarter, more connected future.</p>
            </article>

            <article className="about-card">
              <span className="about-card-icon"><svg className="icon" aria-hidden="true"><use href="#i-diamond" /></svg></span>
              <h3>Our Values</h3>
              <ul className="about-values">
                <li><svg className="icon" aria-hidden="true"><use href="#i-check" /></svg>Innovation — always pushing boundaries</li>
                <li><svg className="icon" aria-hidden="true"><use href="#i-check" /></svg>Excellence — delivering the highest quality</li>
                <li><svg className="icon" aria-hidden="true"><use href="#i-check" /></svg>Collaboration — growing together</li>
                <li><svg className="icon" aria-hidden="true"><use href="#i-check" /></svg>Impact — creating real value</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ============ STORY ============ */}
      <section className="about-story">
        <div className="container story-grid">
          <div className="story-copy">
            <span className="eyebrow line-after">Our Story</span>
            <h2>A Journey Driven<br />by <span className="accent">Innovation</span></h2>
            <p>LeadFlow was born from a simple idea: technology can do more. More than automate tasks — it can empower people, solve complex problems, and create new opportunities.</p>
            <p>Today, we're on a mission to build intelligent applications, engineer scalable systems, and bring the power of AI to businesses of all sizes.</p>
            <Link className="btn btn-outline story-btn" to="/projects">
              Learn More About Our Journey
              <svg className="icon icon-sm" aria-hidden="true"><use href="#i-arrow" /></svg>
            </Link>
          </div>

          <figure className="story-media">
            <img src="/assets/about-story.png" alt="A LeadFlow developer workspace glowing in purple neon, with three monitors running code and the LeadFlow brand" width="1672" height="941" loading="lazy" />
            <figcaption className="story-chip">Dream. Build. Innovate. <i></i></figcaption>
          </figure>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <div className="container container-wide">
        <div className="stats about-stats">
          <div className="stat">
            <span className="stat-icon"><svg className="icon" aria-hidden="true"><use href="#i-rocket" /></svg></span>
            <div><strong className="count" data-count="50" data-suffix="+">50+</strong><span>Projects Delivered</span></div>
          </div>
          <div className="stat">
            <span className="stat-icon"><svg className="icon" aria-hidden="true"><use href="#i-users" /></svg></span>
            <div><strong className="count" data-count="30" data-suffix="+">30+</strong><span>Happy Clients</span></div>
          </div>
          <div className="stat">
            <span className="stat-icon"><svg className="icon" aria-hidden="true"><use href="#i-bolt" /></svg></span>
            <div><strong className="count" data-count="99.9" data-suffix="%" data-decimals="1">99.9%</strong><span>Uptime Guarantee</span></div>
          </div>
          <div className="stat">
            <span className="stat-icon"><svg className="icon" aria-hidden="true"><use href="#i-globe" /></svg></span>
            <div><strong className="word">Worldwide</strong><span>Global Impact</span></div>
          </div>
        </div>
      </div>

      {/* ============ CTA ============ */}
      <div className="container container-wide">
        <section className="about-cta">
          <div className="about-cta-copy">
            <h2>Let's Build Something <span className="accent">Extraordinary</span> Together</h2>
            <p>Have a project in mind or want to explore how LeadFlow can help your business?<br />Get in touch with us today.</p>
          </div>
          <Link className="btn btn-primary about-cta-btn" to="/contact">
            Contact Us
            <svg className="icon icon-sm" aria-hidden="true"><use href="#i-send" /></svg>
          </Link>
        </section>
      </div>
    </>
  );
}