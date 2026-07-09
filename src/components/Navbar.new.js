import React, { useState, useEffect } from "react";
import logo from "../assets/logo-removebg-preview (1).png";

const Navbar = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const menuItems = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "quality", title: "Quality" },
    { id: "machines", title: "Machines" },
    { id: "customers", title: "Customers" },
    { id: "gallery", title: "Gallery" },
    { id: "contact", title: "Contact" },
  ];

  const handleScroll = (id) => {
    setActive(id);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="navbar">
      <div className="logo">
        <div className="brand-mark">
          <img src={logo} alt="Maya Industries logo" className="brand-logo" />
        </div>
        <div>
          <p className="brand-kicker">Precision Manufacturing</p>
          <h2>MAYA INDUSTRIES</h2>
        </div>
      </div>

      <div className="nav-actions">
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? "☀︎" : "☾"}
        </button>
        <button className="quote-btn" onClick={() => handleScroll("contact")}>
          Get Quote
        </button>
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setMenuOpen(!menuOpen);
            }
          }}
        >
          ☰
        </div>
      </div>

      <ul className={`nav-menu ${menuOpen ? "show" : ""}`}>
        {menuItems.map((item) => (
          <li key={item.id}>
            <button className={`nav-link ${active === item.id ? "active" : ""}`} onClick={() => handleScroll(item.id)}>
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
