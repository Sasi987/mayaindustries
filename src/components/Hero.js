import React from "react";

const Hero = () => {
  const handleContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">ISO 9001:2015 · Precision Manufacturing</span>
          <h1 id="hero-title">
            Precision-driven manufacturing for modern industry.
            <span> Built to perform.</span>
          </h1>
          <p>
            Maya Industries delivers high-precision sheet metal stamping, fabrication, welding, and assembly solutions with a commitment to quality, reliability, and fast-moving industrial partnerships.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={handleContact}>
              Request a Quote
            </button>
            <button className="btn-secondary" onClick={handleAbout}>
              Discover Our Expertise
            </button>
          </div>

          <div className="hero-highlights" aria-label="Key capabilities">
            <span>✓ High-precision stamping</span>
            <span>✓ Fabrication & welding</span>
            <span>✓ Rapid industrial support</span>
          </div>
       

        
          
        </div>
      </div>
    </section>
  );
};

export default Hero;