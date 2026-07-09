import React from "react";

const About = () => {
  const handleContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMachines = () => {
    document.getElementById("machines")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://i.ibb.co/HDJhFWPv/Chat-GPT-Image-Jun-2-2026-07-05-05-PM.png"
            alt="Maya Industries precision manufacturing facility"
          />
        </div>

        <div className="about-content">
          <span className="about-tag">About MAYA INDUSTRIES</span>
          <h2 id="about-title">A trusted manufacturing partner for industrial growth.</h2>
          <p>
            Maya Industries is an ISO 9001:2015 certified company specializing in sheet metal stamping, welding, fabrication, and assembly parts manufacturing for demanding industrial applications.
          </p>
          <p>
            From engineered components to consistent production support, our team combines advanced fabrication methods, rigorous quality control, and dependable execution to help customers move faster with confidence.
          </p>

          <div className="about-features">
            <div className="feature-box">✓ ISO 9001:2015 Certified</div>
            <div className="feature-box">✓ End-to-End Quality Assurance</div>
            <div className="feature-box">✓ Skilled Engineering Team</div>
            <div className="feature-box">✓ Modern Manufacturing Infrastructure</div>
          </div>

          <div className="about-panels">
            <div className="panel-card">
              <strong>Operational excellence</strong>
              <span>Lean workflows and precise execution from concept to dispatch.</span>
            </div>
            <div className="panel-card">
              <strong>Dedicated partnership</strong>
              <span>Responsive communication and dependable support for every order.</span>
            </div>
          </div>

          <div className="about-buttons">
            <button className="primary-btn" onClick={handleContact}>
              Speak With Our Team
            </button>
            <button className="secondary-btn" onClick={handleMachines}>
              Explore Our Equipment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;