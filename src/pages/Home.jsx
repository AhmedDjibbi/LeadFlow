import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero" id="top">
        <div className="stars" aria-hidden="true"></div>
        <div className="hero-art" aria-hidden="true">
          <img src="/assets/hero-brain.png" alt="" width="1672" height="941" />
        </div>

        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>We build <span className="accent">intelligent</span><br />technology that<br /><span className="nowrap">moves businesses <br className="mobile-break" /><span className="accent">forward.</span></span></h1>
            <p className="lead">From AI-powered applications to scalable software architectures and autonomous systems, we turn ambitious ideas into powerful digital solutions.</p>

            <div className="hero-actions">
              <Link className="btn btn-primary" to="/solutions">
                Explore Our Solutions
                <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
              </Link>
              <Link className="btn btn-outline" to="/projects">
                Learn More
                <span className="play-dot"><svg className="icon icon-xs" aria-hidden="true"><use href="#i-play" /></svg></span>
              </Link>
            </div>

            <div className="social-proof">
              <div className="avatars">
                <img src="/assets/avatars/avatar-1.svg" alt="Client" width="30" height="30" />
                <img src="/assets/avatars/avatar-2.svg" alt="Client" width="30" height="30" />
                <img src="/assets/avatars/avatar-3.svg" alt="Client" width="30" height="30" />
                <img src="/assets/avatars/avatar-4.svg" alt="Client" width="30" height="30" />
              </div>
              <span>Trusted by innovative teams worldwide</span>
            </div>
          </div>

          <div className="hero-visual" data-tilt>
            <div className="float-badge badge-1">
              <span className="badge-icon"><svg className="icon" aria-hidden="true"><use href="#i-chip" /></svg></span>
              <span>AI-Powered<br />Products</span>
            </div>
            <div className="float-badge badge-2">
              <span className="badge-icon"><svg className="icon" aria-hidden="true"><use href="#i-code" /></svg></span>
              <span>Software<br />Engineering</span>
            </div>
            <div className="float-badge badge-3">
              <span className="badge-icon"><svg className="icon" aria-hidden="true"><use href="#i-robot" /></svg></span>
              <span>Intelligent<br />Automation</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SOLUTIONS ============ */}
      <section className="solutions" id="solutions">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow line-both">Our Solutions</span>
            <h2>Three Pillars. Endless <span className="accent">Possibilities.</span></h2>
          </div>

          <div className="cards">
            <article className="card reveal" style={{ "--delay": ".05s" }}>
              <span className="card-icon"><svg className="icon" aria-hidden="true"><use href="#i-sparkles" /></svg></span>
              <h3>AI-Powered Products</h3>
              <p>Build intelligent applications that solve real-world problems, including AI content generation platforms, AI assistants, and more.</p>
              <Link className="card-link" to="/solutions">Learn More <svg className="icon icon-sm" aria-hidden="true"><use href="#i-arrow" /></svg></Link>
            </article>

            <article className="card reveal" style={{ "--delay": ".12s" }}>
              <span className="card-icon"><svg className="icon" aria-hidden="true"><use href="#i-code" /></svg></span>
              <h3>Software Engineering</h3>
              <p>Design and develop scalable web applications, full-stack platforms, backend systems, microservices and APIs.</p>
              <Link className="card-link" to="/solutions">Learn More <svg className="icon icon-sm" aria-hidden="true"><use href="#i-arrow" /></svg></Link>
            </article>

            <article className="card reveal" style={{ "--delay": ".19s" }}>
              <span className="card-icon"><svg className="icon" aria-hidden="true"><use href="#i-bolt" /></svg></span>
              <h3>Intelligent Systems &amp; Automation</h3>
              <p>Integrate AI into your workflows, build autonomous agents, and create systems that work smarter, not harder.</p>
              <Link className="card-link" to="/solutions">Learn More <svg className="icon icon-sm" aria-hidden="true"><use href="#i-arrow" /></svg></Link>
            </article>
          </div>
        </div>

        {/* ============ STATS ============ */}
        <div className="container">
          <div className="stats reveal">
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
      </section>

      {/* ============ WORK ============ */}
      <section className="work" id="work">
        <div className="work-glow" aria-hidden="true"></div>
        <div className="container work-grid">
          <div className="work-copy reveal">
            <span className="eyebrow line-after">Our Work</span>
            <h2>Ideas into<br /><span className="accent">Real-World</span> Solutions.</h2>
            <p>From AI content generation platforms to scalable business systems, we build products that make an impact.</p>
            <Link className="btn btn-outline" to="/projects">
              View All Projects
              <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
            </Link>
          </div>

          <div className="work-stage reveal" style={{ "--delay": ".1s" }}>
            <div className="stage-glow" aria-hidden="true"></div>
            <img className="shot shot-code" src="/assets/mockup-code.svg" alt="Code editor with a LeadFlow SDK integration" loading="lazy" />
            <img className="shot shot-chart" src="/assets/mockup-analytics.svg" alt="Analytics dashboard showing growth" loading="lazy" />
            <img className="shot shot-dash" src="/assets/mockup-dashboard.svg" alt="ContentFlow AI dashboard for generating social content" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ============ WHY / PROCESS / CTA ============ */}
      <section className="why" id="why">
        <div className="container">
          <div className="section-head why-head reveal">
            <span className="eyebrow line-both">Why Choose LeadFlow</span>
          </div>

          <div className="why-grid">
            <div className="why-copy reveal">
              <h2>More Than Development.<br />A Partner in Your <span className="accent">Growth.</span></h2>
              <p className="why-lead">We combine technical excellence with AI innovation to deliver solutions that create real business value.</p>

              <div className="why-features">
                <article className="feature">
                  <span className="feature-icon"><svg className="icon" aria-hidden="true"><use href="#i-bolt" /></svg></span>
                  <div>
                    <h3>AI-First Approach</h3>
                    <p>Leverage the power of AI to automate, innovate and grow.</p>
                  </div>
                </article>

                <article className="feature">
                  <span className="feature-icon"><svg className="icon" aria-hidden="true"><use href="#i-cube" /></svg></span>
                  <div>
                    <h3>Scalable Architecture</h3>
                    <p>Build systems that scale with your ambitions.</p>
                  </div>
                </article>

                <article className="feature">
                  <span className="feature-icon"><svg className="icon" aria-hidden="true"><use href="#i-shield" /></svg></span>
                  <div>
                    <h3>Reliability &amp; Performance</h3>
                    <p>Robust, secure and high-performance solutions.</p>
                  </div>
                </article>

                <article className="feature">
                  <span className="feature-icon"><svg className="icon" aria-hidden="true"><use href="#i-headset" /></svg></span>
                  <div>
                    <h3>Dedicated Support</h3>
                    <p>A committed team by your side, every step of the way.</p>
                  </div>
                </article>
              </div>
            </div>

            <div className="why-art reveal" style={{ "--delay": ".1s" }} role="img" aria-label="Neon illustration of a layered AI data stack surrounded by floating solution cards"></div>
          </div>
        </div>

        <div className="container">
          <div className="section-head process-head reveal">
            <span className="eyebrow line-both">Our Process</span>
            <h2>From Idea to <span className="accent">Impact</span></h2>
            <p className="section-sub">A streamlined process to turn your vision into powerful solutions.</p>
          </div>

          <ol className="process">
            <li className="step reveal" style={{ "--delay": ".04s" }}>
              <span className="step-num">01</span>
              <span className="step-icon"><svg className="icon" aria-hidden="true"><use href="#i-chat" /></svg></span>
              <h3>Discuss Your Vision</h3>
              <p>Share your ideas and goals with our team.</p>
            </li>
            <li className="step reveal" style={{ "--delay": ".1s" }}>
              <span className="step-num">02</span>
              <span className="step-icon"><svg className="icon" aria-hidden="true"><use href="#i-bulb" /></svg></span>
              <h3>Plan the Solution</h3>
              <p>We design a tailored strategy and architecture.</p>
            </li>
            <li className="step reveal" style={{ "--delay": ".16s" }}>
              <span className="step-num">03</span>
              <span className="step-icon"><svg className="icon" aria-hidden="true"><use href="#i-code" /></svg></span>
              <h3>Build &amp; Optimize</h3>
              <p>We develop, test and refine your solution.</p>
            </li>
            <li className="step reveal" style={{ "--delay": ".22s" }}>
              <span className="step-num">04</span>
              <span className="step-icon"><svg className="icon" aria-hidden="true"><use href="#i-rocket" /></svg></span>
              <h3>Launch &amp; Grow</h3>
              <p>Go live and scale with confidence.</p>
            </li>
          </ol>
        </div>

        <div className="container">
          <div className="cta reveal">
            <div className="cta-inner">
              <span className="cta-badge"><i></i>Let's Build Something Great</span>
              <h2>Ready to Turn Your Ideas<br />into <span className="accent">Intelligent</span> Solutions?</h2>
              <p>Partner with LeadFlow and take the next step towards innovation.</p>
              <div className="cta-actions">
                <Link className="btn btn-primary" to="/contact">
                  Get in Touch
                  <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
                </Link>
                <Link className="btn btn-outline" to="/solutions">
                  Explore Our Solutions
                  <span className="play-dot"><svg className="icon icon-xs" aria-hidden="true"><use href="#i-play" /></svg></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}