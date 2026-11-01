import { Link } from "react-router-dom";

const PROJECTS = [
  {
    image: "/assets/mockup-dashboard.svg",
    tag: "AI Product",
    title: "ContentFlow AI",
    copy: "An AI content studio that turns a single brief into on-brand social campaigns, complete with scheduling and analytics.",
  },
  {
    image: "/assets/mockup-analytics.svg",
    tag: "SaaS Platform",
    title: "Pulse Analytics",
    copy: "A real-time growth analytics platform with live dashboards, cohort insights and automated reporting for growing teams.",
  },
  {
    image: "/assets/mockup-code.svg",
    tag: "Developer Tools",
    title: "LeadFlow SDK",
    copy: "A lightweight SDK that lets product teams drop intelligent automation into any stack in a few lines of code.",
  },
  {
    image: "/assets/sol-stack.png",
    tag: "Intelligent Systems",
    title: "Autonomous Ops",
    copy: "An agent-driven operations layer that orchestrates repetitive back-office workflows across disconnected tools.",
    wide: true,
  },
];

export default function Projects() {
  return (
    <>
      <section className="inner-hero">
        <div className="inner-hero-art" aria-hidden="true">
          <img src="/assets/Neon Cyberpunk Code Editor Interface.png" alt="" width="1672" height="941" />
        </div>
        <div className="container">
          <div className="inner-hero-copy">
            <span className="about-eyebrow"><i></i>Our Work<span className="eyebrow-dash"></span></span>
            <h1>Ideas into<br /><span className="accent">Real-World</span> Solutions.</h1>
            <p className="lead">From AI content generation platforms to scalable business systems, we build products that make an impact.</p>
            <div className="inner-hero-actions">
              <Link className="btn btn-primary" to="/contact">
                Start a Project
                <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
              </Link>
              <Link className="btn btn-outline" to="/solutions">
                Explore Our Solutions
                <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="page-section-head reveal">
            <span className="eyebrow line-after">Selected Projects</span>
            <h2>Products We're <span className="accent">Proud Of</span></h2>
            <p>A selection of platforms, products and systems we've designed and engineered for ambitious teams.</p>
          </div>

          <div className="project-grid">
            {PROJECTS.map((p, i) => (
              <article
                className="project-card reveal"
                style={{ "--delay": `${0.05 + i * 0.07}s` }}
                key={p.title}
              >
                <div className="project-thumb">
                  <img src={p.image} alt={`${p.title} interface preview`} loading="lazy" />
                </div>
                <div className="project-body">
                  <span className="project-tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="container container-wide" style={{ marginTop: "52px" }}>
        <div className="stats about-stats reveal">
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

      <div className="container container-wide">
        <section className="about-cta" style={{ marginTop: "38px" }}>
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