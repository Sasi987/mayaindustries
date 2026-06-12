import React from "react";


const Footer = () => {

  const year = new Date().getFullYear();

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
    document
      .getElementById(sectionId)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openEmail = () => {
    window.location.href =
      "mailto:mayapresscomp@gmail.com";
  };

  const openPhone = () => {
    window.location.href =
      "tel:+919791773209";
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company Info */}

        <div className="footer-box">
          <h2>MAYA INDUSTRIES</h2>

          <p>
            ISO 9001:2015 Certified Sheet Metal
            Stamping & Manufacturing Company
            delivering precision engineering
            solutions.
          </p>

          <div className="footer-social">

            <button onClick={openEmail}>
              📧
            </button>

            <button onClick={openPhone}>
              📞
            </button>

            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com",
                  "_blank"
                )
              }
            >
              💼
            </button>

          </div>
        </div>

        {/* Quick Links */}

        <div className="footer-box">
          <h3>Quick Links</h3>

          {quickLinks.map((link) => (
            <button
              key={link.id}
              className="footer-link"
              onClick={() =>
                scrollToSection(link.id)
              }
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Contact */}

        <div className="footer-box">
          <h3>Contact Info</h3>

          <p>
            📍 Hosur, Tamil Nadu, India
          </p>

          <p>
            📧 mayapresscomp@gmail.com
          </p>

          <p>
            📱 +91 9791773209
          </p>

          <button
            className="footer-contact-btn"
            onClick={() =>
              scrollToSection("contact")
            }
          >
            Get Quote
          </button>
        </div>

      </div>

      {/* Bottom Footer */}

      <div className="footer-bottom">

        <p>
          © {year} MAYA INDUSTRIES.
          All Rights Reserved.
        </p>

        <button
          className="top-btn"
          onClick={scrollTop}
        >
          ↑ Back To Top
        </button>

      </div>

    </footer>
  );
};

export default Footer;