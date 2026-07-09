import React from "react";

const Footer = () => {
  // const year = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Quality", id: "quality" },
    { name: "Machines", id: "machines" },
    { name: "Customers", id: "customers" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  // const scrollTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  const openEmail = () => {
    window.location.href = "mailto:mayapresscomp@gmail.com";
  };

  const openPhone = () => {
    window.location.href = "tel:+919791773209";
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-box">
          <h2>MAYA INDUSTRIES</h2>
          <p>
            ISO 9001:2015 certified manufacturing partner delivering precision engineering and dependable industrial solutions.
          </p>
          <div className="footer-social">
            <button onClick={openEmail} aria-label="Email Maya Industries">📧</button>
            <button onClick={openPhone} aria-label="Call Maya Industries">📞</button>
            <button onClick={() => window.open("https://www.linkedin.com", "_blank", "noopener,noreferrer")} aria-label="Visit Maya Industries LinkedIn">💼</button>
          </div>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>
          {quickLinks.map((link) => (
            <button key={link.id} className="footer-link" onClick={() => scrollToSection(link.id)}>
              {link.name}
            </button>
          ))}
        </div>

        <div className="footer-box">
          <h3>Contact</h3>
          <p>📍 Hosur, Tamil Nadu, India</p>
          <p>📧 mayapresscomp@gmail.com</p>
          <p>📱 +91 9791773209</p>
          <button className="footer-contact-btn" onClick={() => scrollToSection("contact")}>Get Quote</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Maya Industries. All rights reserved.</p>
        {/* <button className="top-btn" onClick={scrollTop}>↑ Back To Top</button> */}
      </div>
    </footer>
  );
};

export default Footer;