import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className={"site-header" + (scrolled ? " is-scrolled" : "")} id="top">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="LeadFlow home">
          <img src="/assets/leadflow-logo.png" alt="LeadFlow" width="2172" height="724" />
        </Link>

        <nav className={"nav" + (open ? " open" : "")} id="nav" aria-label="Main navigation">
          <Link to="/" className={location.pathname === "/" ? "is-active" : ""}>Home</Link>
          <Link to="/about" className={location.pathname === "/about" ? "is-active" : ""}>About</Link>
          <Link to="/solutions" className={location.pathname === "/solutions" ? "is-active" : ""}>Solutions</Link>
          <Link to="/projects" className={location.pathname === "/projects" ? "is-active" : ""}>Projects</Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "is-active" : ""}>Contact</Link>
        </nav>

        <Link className="btn btn-ghost btn-sm header-cta" to="/contact">
          Get in Touch
          <svg className="icon icon-sm" aria-hidden="true"><use href="#i-arrow" /></svg>
        </Link>

        <button
          className="nav-toggle"
          id="navToggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={String(open)}
          aria-controls="nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
