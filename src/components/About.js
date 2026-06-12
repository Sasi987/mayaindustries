import React from "react";


const About = () => {

  const handleContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleServices = () => {
    document
      .getElementById("services")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="about-image">
          <img
            src="https://i.ibb.co/HDJhFWPv/Chat-GPT-Image-Jun-2-2026-07-05-05-PM.png"
            alt="Manufacturing Company"
          />
        </div>

        <div className="about-content">

          <span className="about-tag">
            About MAYA INDUSTRIES
          </span>

          <h2>
            Trusted Manufacturing Partner
            For Industrial Excellence
          </h2>

          <p>
            MAYA INDUSTRIES is an ISO 9001:2015 Certified company
            specializing in Sheet Metal Stamping, Welding,
            Fabrication and Assembly Parts Manufacturing.
          </p>

          <p>
            We deliver precision-engineered products with
            advanced manufacturing processes, quality control,
            and customer-focused solutions.
          </p>

          <div className="about-features">
            <div className="feature-box">
              ✔ ISO Certified
            </div>

            <div className="feature-box">
              ✔ Quality Assurance
            </div>

            <div className="feature-box">
              ✔ Skilled Team
            </div>

            <div className="feature-box">
              ✔ Modern Machines
            </div>
          </div>

          <div className="about-buttons">

            <button
              className="primary-btn"
              onClick={handleContact}
            >
              Contact Us
            </button>

            <button
              className="secondary-btn"
              onClick={handleServices}
            >
              Our Services
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;