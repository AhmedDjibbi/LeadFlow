import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IconSprite from "./components/IconSprite";
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./styles/global.css";
import "./styles/pages.css";

const TITLES = {
  "/": "LeadFlow — We build intelligent technology that moves businesses forward",
  "/about": "About — LeadFlow | Turning Ideas into Intelligent Solutions",
  "/solutions": "Solutions — LeadFlow | AI Products, Software Engineering & Automation",
  "/projects": "Projects — LeadFlow | Ideas into Real-World Solutions",
  "/contact": "Contact — LeadFlow | Let's Build Something Great",
};

function ScrollAndTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = TITLES[pathname] || TITLES["/"];
  }, [pathname]);

  return null;
}

function Animations() {
  const { pathname } = useLocation();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = document.querySelectorAll(".reveal");

    if (reduceMotion || !("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
      );
      reveals.forEach((el) => io.observe(el));
    }

    const counters = document.querySelectorAll(".count");
    const runCount = (el) => {
      const target = parseFloat(el.dataset.count);
      const decimals = parseInt(el.dataset.decimals || "0", 10);
      const suffix = el.dataset.suffix || "";
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - start) / 1300);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(decimals) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    let co;
    if (counters.length) {
      if (reduceMotion || !("IntersectionObserver" in window)) {
        counters.forEach((el) => {
          el.textContent = el.dataset.count + (el.dataset.suffix || "");
        });
      } else {
        co = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              runCount(entry.target);
              co.unobserve(entry.target);
            });
          },
          { threshold: 0.6 }
        );
        counters.forEach((el) => co.observe(el));
      }
    }

    return () => {
      co?.disconnect();
    };
  }, [pathname]);

  return null;
}

function Shell() {
  const { pathname } = useLocation();
  const isAbout = pathname === "/about";

  return (
    <>
      <ScrollAndTitle />
      <Animations />
      <IconSprite />
      <Header />
      <div className={isAbout ? "about-page" : "page"}>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}