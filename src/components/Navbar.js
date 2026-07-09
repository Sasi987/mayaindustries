import React, { useEffect, useMemo, useState } from "react";
import logo from "../assets/logo-removebg-preview (1).png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const menuItems = useMemo(
    () => [
      { id: "home", title: "Home", section: "home" },
      { id: "about", title: "About", section: "about" },
      { id: "quality", title: "Quality", section: "quality" },
      { id: "machines", title: "Machines", section: "machines" },
      { id: "customers", title: "Customers", section: "customers" },
      { id: "gallery", title: "Gallery", section: "gallery" },
      { id: "contact", title: "Contact", section: "contact" },
    ],
    []
  );

  const handleScroll = (id) => {
    setActive(id);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (window.location.hash !== `#${id}`) {
      window.history.replaceState(null, "", `#${id}`);
    }

    setMenuOpen(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>

      {/* Logo */}

      <button
        type="button"
        className="logo"
        onClick={() => handleScroll("home")}
        aria-label="Go to Home"
      >
        <span className="brand-mark">
          <img
            src={logo}
            alt="Maya Industries Logo"
            className="brand-logo"
          />
        </span>

        <span className="brand-copy">
          <span className="brand-name">
            MAYA INDUSTRIES
          </span>
        </span>
      </button>

      {/* Desktop Navigation */}

      <nav
        className="desktop-nav"
        aria-label="Primary Navigation"
      >
        <ul className="nav-menu">
          {menuItems.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                type="button"
                className={`nav-link ${
                  active === item.section ? "active" : ""
                }`}
                onClick={() => handleScroll(item.section)}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right Actions */}

      <div className="nav-actions">

        <button
          className="quote-btn"
          onClick={() => handleScroll("contact")}
        >
          Request Consultation
        </button>

        {/* Animated Hamburger */}

        <button
          type="button"
          className={`mobile-toggle ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={
            menuOpen
              ? "Close Navigation"
              : "Open Navigation"
          }
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
            {/* Mobile Menu */}

      <div
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div
          className="mobile-menu-backdrop"
          onClick={() => setMenuOpen(false)}
        ></div>

        <nav
          className="mobile-menu-panel"
          aria-label="Mobile Navigation"
        >
          <div className="mobile-menu-header">

            <img
              src={logo}
              alt="Maya Industries"
              className="mobile-logo"
            />

            {/* <button
              type="button"
              className="mobile-close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
            >
              ✕
            </button> */}

          </div>

          <div className="mobile-menu-links">

            {menuItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`mobile-nav-link ${
                  active === item.section ? "active" : ""
                }`}
                onClick={() => {
                  handleScroll(item.section);
                  setMenuOpen(false);
                }}
              >
                <span>{item.title}</span>

                <span className="mobile-nav-indicator">
                  →
                </span>
              </button>
            ))}

          </div>

          <div className="mobile-menu-footer">

            <button
              className="mobile-quote-btn"
              onClick={() => {
                handleScroll("contact");
                setMenuOpen(false);
              }}
            >
              Request Consultation
            </button>

          </div>
        </nav>
      </div>

    </header>
  );
};

export default Navbar;