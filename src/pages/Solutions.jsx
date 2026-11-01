import { Link } from "react-router-dom";

const PILLARS = [
  {
    num: "01 / 03",
    icon: "i-chip",
    media: "/assets/sol-brain.png",
    scale: 1.22,
    title: "AI-Powered Products",
    copy: "Build intelligent applications that solve real-world problems, including AI content generation platforms, AI assistants, and more.",
  },
  {
    num: "02 / 03",
    icon: "i-layers",
    media: "/assets/sol-code.png",
    scale: 1.12,
    title: "Software Engineering",
    copy: "Design and develop scalable web applications, backend systems, microservices, and APIs with modern technologies.",
  },
  {
    num: "03 / 03",
    icon: "i-bolt",
    media: "/assets/sol-robot.png",
    scale: 1.14,
    title: "Intelligent Systems & Automation",
    copy: "Integrate AI into your workflows, build autonomous agents, and create intelligent systems that work smarter.",
  },
];

const CHECKS = [
  "AI-First Approach",
  "Scalable Architecture",
  "Reliable & Secure",
  "Flexible Solutions",
  "Dedicated Support",
];

export default function Solutions() {
  return (
    <>
      <section className="sol-hero">
        <div className="sol-hero-bg" aria-hidden="true">
          <img src="/assets/sol-hero.png" alt="" width="1672" height="941" />
        </div>

        <div className="container">
          <div className="sol-hero-copy">
            <span className="about-eyebrow"><i></i>Our Solutions<span className="eyebrow-dash"></span></span>
            <h1>Powerful Solutions<br />for a <span className="accent">Smarter</span> Tomorrow.</h1>
            <p className="lead">From AI-powered applications to scalable software architectures and intelligent automation, we deliver innovative solutions that help businesses grow, innovate, and stay ahead.</p>

            <div className="sol-hero-actions">
              <a className="btn btn-primary" href="#core-solutions">
                Explore Our Solutions
                <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
              </a>
              <Link className="sol-watch" to="/projects">
                <span className="sol-play"><svg className="icon" aria-hidden="true"><use href="#i-play" /></svg></span>
                Watch Overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sol-pillars" id="core-solutions">
        <div className="container">
          <div className="sol-section-head reveal">
            <span className="eyebrow line-both">Our Core Solutions</span>
            <h2>Three Pillars. Endless <span className="accent">Possibilities.</span></h2>
          </div>

          <div className="sol-cards">
            {PILLARS.map((s, i) => (
              <article className="sol-card reveal" style={{ "--delay": `${0.04 + i * 0.07}s` }} key={s.title}>
                <span className="sol-num">{s.num}</span>
                <div className="sol-card-media">
                  <img src={s.media} alt={s.title} style={{ "--img-scale": s.scale }} loading="lazy" />
                </div>
                <div className="sol-card-title">
                  <span className="sol-card-icon"><svg className="icon" aria-hidden="true"><use href={`#${s.icon}`} /></svg></span>
                  <h3>{s.title}</h3>
                </div>
                <p className="sol-card-copy">{s.copy}</p>
                <Link className="sol-link" to="/contact">
                  Learn More
                  <svg className="icon icon-sm" aria-hidden="true"><use href="#i-arrow" /></svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="container container-wide">
        <section className="sol-why reveal">
          <div className="sol-why-copy">
            <span className="sol-kicker">Why Choose LeadFlow</span>
            <h2>Innovation. Performance. <span className="accent">Impact.</span></h2>
            <p>We combine cutting-edge AI research with robust engineering practices to deliver solutions that are not only powerful, but also reliable, scalable, and easy to integrate.</p>
            <Link className="btn btn-primary sol-why-btn" to="/about">
              Discover Our Approach
              <svg className="icon icon-sm" aria-hidden="true"><use href="#i-arrow" /></svg>
            </Link>
          </div>

          <div className="sol-checks">
            {CHECKS.map((c) => (
              <span className="sol-check" key={c}>
                <svg className="icon" aria-hidden="true"><use href="#i-check" /></svg>
                {c}
              </span>
            ))}
          </div>

          <div className="sol-why-art" aria-hidden="true">
            <img src="/assets/sol-stack.png" alt="" loading="lazy" />
          </div>
        </section>
      </div>

      <div className="container container-wide">
        <section className="sol-cta reveal">
          <div className="sol-cta-bg" aria-hidden="true">
            <img src="/assets/about-cta.png" alt="" loading="lazy" />
          </div>
          <div className="sol-cta-copy">
            <span className="sol-kicker">Ready to Transform Your Ideas?</span>
            <h2>Let's Build Something Extraordinary Together</h2>
            <p>Partner with LeadFlow and turn your vision into powerful solutions.</p>
          </div>
          <Link className="btn btn-primary sol-cta-btn" to="/contact">
            Get in Touch
            <svg className="icon icon-sm" aria-hidden="true"><use href="#i-arrow" /></svg>
          </Link>
        </section>
      </div>
    </>
  );
}
