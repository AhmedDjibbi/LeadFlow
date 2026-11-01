import { useState } from "react";
import { Link } from "react-router-dom";

const CONTACT_INFO = [
  {
    icon: "i-mail",
    title: "Email Us",
    value: "hello@leadflow.dev",
    href: "mailto:hello@leadflow.dev",
    external: false,
  },
  {
    icon: "i-phone",
    title: "Call Us",
    value: "+216 54 03 38 71",
    href: "tel:+21654033871",
    external: false,
  },
  {
    icon: "i-pin",
    title: "Our Office",
    value: "Tunis, Tunisia",
    href: "https://maps.google.com/?q=Tunis,%20Tunisia",
    external: true,
  },
];

const SOCIALS = [
  { icon: "i-github", label: "GitHub", href: "https://github.com" },
  { icon: "i-linkedin", label: "LinkedIn", href: "https://linkedin.com" },
  { icon: "i-x", label: "X", href: "https://x.com" },
  { icon: "i-youtube", label: "YouTube", href: "https://youtube.com" },
  { icon: "i-discord", label: "Discord", href: "https://discord.com" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-art" aria-hidden="true">
          <img src="/assets/contact-hero.png" alt="" width="1672" height="941" />
        </div>

        <div className="container">
          <div className="contact-hero-copy">
            <span className="about-eyebrow"><i></i>Contact Us<span className="eyebrow-dash"></span></span>
            <h1>
              Let's Build Something<br />
              <span className="accent">Extraordinary</span> Together.
            </h1>
            <p className="lead">
              Have a project in mind, a question, or just want to say hello?<br className="contact-lead-break" />
              We'd love to hear from you. Reach out to our team and<br className="contact-lead-break" />
              let's turn your ideas into reality.
            </p>

            <a className="contact-scroll" href="#contact-panels">
              <span className="contact-scroll-btn">
                <svg className="icon" aria-hidden="true"><use href="#i-arrow-down" /></svg>
              </span>
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact-panels">
        <div className="container">
          <div className="contact-grid">
            <aside className="contact-panel contact-info-panel reveal">
              <span className="contact-kicker">Our Contact Info<span className="contact-kicker-line"></span></span>
              <h2>Reach Out</h2>
              <p className="contact-panel-lead">Feel free to contact us through any of the following channels. We're always here to help.</p>

              <div className="contact-info-list">
                {CONTACT_INFO.map((item) => (
                  <a
                    className="contact-info-card"
                    href={item.href}
                    key={item.title}
                    {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    <span className="contact-info-icon">
                      <svg className="icon" aria-hidden="true"><use href={`#${item.icon}`} /></svg>
                    </span>
                    <span className="contact-info-text">
                      <strong>{item.title}</strong>
                      <span>{item.value}</span>
                    </span>
                    <span className="contact-info-arrow">
                      <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
                    </span>
                  </a>
                ))}
              </div>

              <span className="contact-kicker contact-kicker-social">Follow Us<span className="contact-kicker-line"></span></span>
              <div className="contact-socials">
                {SOCIALS.map((social) => (
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    key={social.label}
                  >
                    <svg className="icon" aria-hidden="true"><use href={`#${social.icon}`} /></svg>
                  </a>
                ))}
              </div>
            </aside>

            <div className="contact-panel contact-form-panel reveal" style={{ "--delay": ".08s" }}>
              <span className="contact-kicker">Send Us a Message<span className="contact-kicker-line"></span></span>
              <h2>Get in Touch</h2>
              <p className="contact-panel-lead">Fill out the form below and we'll get back to you as soon as possible.</p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-field">
                  <span className="contact-field-icon"><svg className="icon" aria-hidden="true"><use href="#i-user" /></svg></span>
                  <input id="name" name="name" type="text" placeholder=" " autoComplete="name" required />
                  <label className="contact-field-label" htmlFor="name">Your Name <b>*</b></label>
                </div>

                <div className="contact-field">
                  <span className="contact-field-icon"><svg className="icon" aria-hidden="true"><use href="#i-mail" /></svg></span>
                  <input id="email" name="email" type="email" placeholder=" " autoComplete="email" required />
                  <label className="contact-field-label" htmlFor="email">Your Email <b>*</b></label>
                </div>

                <div className="contact-field full">
                  <span className="contact-field-icon"><svg className="icon" aria-hidden="true"><use href="#i-tag" /></svg></span>
                  <input id="subject" name="subject" type="text" placeholder=" " required />
                  <label className="contact-field-label" htmlFor="subject">Subject <b>*</b></label>
                </div>

                <div className="contact-field full area">
                  <span className="contact-field-icon"><svg className="icon" aria-hidden="true"><use href="#i-message" /></svg></span>
                  <textarea id="message" name="message" placeholder=" " required />
                  <label className="contact-field-label" htmlFor="message">Your Message <b>*</b></label>
                </div>

                <div className="contact-form-foot">
                  <div className="contact-consent">
                    <input id="privacy-consent" type="checkbox" required />
                    <label className="contact-check-box" htmlFor="privacy-consent" aria-label="I agree to the privacy policy">
                      <svg className="icon" aria-hidden="true"><use href="#i-check" /></svg>
                    </label>
                    <label className="contact-consent-text" htmlFor="privacy-consent">
                      I agree to the{" "}
                      <a href="#privacy" onClick={(e) => e.preventDefault()}>privacy policy</a>{" "}
                      <svg className="icon ext" aria-hidden="true"><use href="#i-external" /></svg>
                    </label>
                  </div>

                  <button className="contact-send" type="submit">
                    {sent ? "Message Sent" : "Send Message"}
                    <svg className="icon" aria-hidden="true"><use href={sent ? "#i-check" : "#i-send"} /></svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="contact-cta reveal">
          <div className="contact-cta-bg" aria-hidden="true">
            <img src="/assets/contact-cta.png" alt="" width="2000" height="667" loading="lazy" />
          </div>

          <div className="contact-cta-copy">
            <span className="contact-cta-kicker"><i></i>A Partner in Your Innovation Journey<i></i></span>
            <h2>Let's Create the Future <span className="accent">Together</span></h2>
            <p>Turn your ideas into intelligent solutions with LeadFlow.</p>
          </div>

          <Link className="contact-cta-btn" to="/solutions">
            Explore Our Solutions
            <svg className="icon icon-sm" aria-hidden="true"><use href="#i-arrow" /></svg>
          </Link>
        </section>
      </div>
    </div>
  );
}
