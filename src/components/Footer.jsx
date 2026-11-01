import { Link } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link className="brand" to="/" aria-label="LeadFlow home">
            <img src="/assets/leadflow-logo.png" alt="LeadFlow" width="2172" height="724" />
          </Link>
          <p className="footer-blurb">Building intelligent solutions that<br />move businesses forward.</p>
          <div className="footer-rule"></div>
          <div className="socials">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><svg className="icon" aria-hidden="true"><use href="#i-github" /></svg></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><svg className="icon" aria-hidden="true"><use href="#i-linkedin" /></svg></a>
            <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X"><svg className="icon" aria-hidden="true"><use href="#i-x" /></svg></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><svg className="icon" aria-hidden="true"><use href="#i-youtube" /></svg></a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" aria-label="Discord"><svg className="icon" aria-hidden="true"><use href="#i-discord" /></svg></a>
          </div>
        </div>

        <div className="footer-col">
          <h4><span>/</span> Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home <svg className="icon chev" aria-hidden="true"><use href="#i-chevron" /></svg></Link></li>
            <li><Link to="/about">About <svg className="icon chev" aria-hidden="true"><use href="#i-chevron" /></svg></Link></li>
            <li><Link to="/solutions">Solutions <svg className="icon chev" aria-hidden="true"><use href="#i-chevron" /></svg></Link></li>
            <li><Link to="/projects">Projects <svg className="icon chev" aria-hidden="true"><use href="#i-chevron" /></svg></Link></li>
            <li><Link to="/contact">Contact <svg className="icon chev" aria-hidden="true"><use href="#i-chevron" /></svg></Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4><span>/</span> Our Solutions</h4>
          <ul className="footer-solutions">
            <li>
              <span className="sol-icon"><svg className="icon" aria-hidden="true"><use href="#i-chip" /></svg></span>
              <Link to="/solutions">AI-Powered Products</Link>
            </li>
            <li>
              <span className="sol-icon"><svg className="icon" aria-hidden="true"><use href="#i-code" /></svg></span>
              <Link to="/solutions">Software Engineering</Link>
            </li>
            <li>
              <span className="sol-icon"><svg className="icon" aria-hidden="true"><use href="#i-bolt" /></svg></span>
              <Link to="/solutions">Intelligent Systems</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col footer-news">
          <h4><span>/</span> Stay in the Loop</h4>
          <p className="news-text">Get the latest updates on AI, product launches, and tech insights.</p>

          <form className="subscribe" onSubmit={handleSubscribe}>
            <span className="subscribe-icon"><svg className="icon" aria-hidden="true"><use href="#i-mail" /></svg></span>
            <input type="email" name="email" placeholder="Enter your email address" aria-label="Email address" required />
            <button type="submit">
              {subscribed ? "Subscribed" : "Subscribe"}
              <svg className="icon" aria-hidden="true"><use href={subscribed ? "#i-check" : "#i-arrow"} /></svg>
            </button>
          </form>

          <div className="footer-rule"></div>
          <p className="no-spam">
            <svg className="icon" aria-hidden="true"><use href="#i-shield" /></svg>
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="footer-bottom">
          <span className="copyright">© 2025 <Link to="/">LeadFlow</Link>. All rights reserved.</span>
          <span className="footer-motto"><i></i>INNOVATE <b>•</b> AUTOMATE <b>•</b> GROW<i></i></span>
          <span className="made">
            Made with <span className="heart">💜</span> in Tunisia
            <svg className="flag" viewBox="0 0 20 20" role="img" aria-label="Tunisia">
              <rect width="20" height="20" rx="4" fill="#e70013" />
              <circle cx="10" cy="10" r="7" fill="#ffffff" />
              <circle cx="11.3" cy="10" r="5" fill="#e70013" />
              <path d="m13.7 7.9.8 1.7 1.9.2-1.4 1.3.4 1.8-1.7-1-1.6 1 .4-1.8-1.4-1.3 1.9-.2z" fill="#e70013" />
            </svg>
          </span>
        </div>
      </div>
    </footer>
  );
}