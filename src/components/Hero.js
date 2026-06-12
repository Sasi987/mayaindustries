import React from "react";


const Hero = () => {

  const handleContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const handleAbout = () => {
    document
      .getElementById("about")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className="hero" id="home">

      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-badge">
            ISO 9001 : 2015 Certified Company
          </span>

          <h1>
            
            <span>   MAYA INDUSTRIES</span>
          </h1>

          <p>
            MAYA INDUSTRIES specializes in
            Sheet Metal Stamping, Fabrication,
            Welding and Industrial Components
            Manufacturing with unmatched quality
            and reliability.
              Precision Engineering  Manufacturing Solutions
          </p>

          <div className="hero-buttons">

            <button
              className="btn-primary"
              onClick={handleContact}
            >
              Get Quote
            </button>

            <button
              className="btn-secondary"
              onClick={handleAbout}
            >
              Explore More
            </button>

          </div>

        </div>

        <div className="hero-stats">

          <div className="stat-card">
            <h2>10+</h2>
            <p>Years Experience</p>
          </div>

          <div className="stat-card">
            <h2>250+</h2>
            <p>Projects Completed</p>
          </div>

          <div className="stat-card">
            <h2>100+</h2>
            <p>Happy Clients</p>
          </div>

          <div className="stat-card">
            <h2>24/7</h2>
            <p>Customer Support</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;