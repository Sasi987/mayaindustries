import React from "react";


const Quality = () => {
  const qualityItems = [
    {
      id: 1,
      title: "Zero PPM",
      description: "Achieve Zero Defects at Customer End",
      icon: "🎯",
    },
    {
      id: 2,
      title: "Safety First",
      description: "Maintain Best Safety Practices",
      icon: "🦺",
    },
    {
      id: 3,
      title: "Customer Satisfaction",
      description: "No Customer Complaints",
      icon: "⭐",
    },
    {
      id: 4,
      title: "Cost Performance",
      description: "Best Cost Efficient Solutions",
      icon: "💰",
    },
  ];

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document
      .getElementById("services")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="quality-section" id="quality">

      <div className="quality-header">
        <span className="quality-tag">
          QUALITY POLICY
        </span>

        <h2>
          Commitment To Excellence & Quality
        </h2>

        <p>
          Our commitment to quality is integral to our
          culture and operations. We continuously improve
          our processes to exceed customer expectations.
        </p>
      </div>

      <div className="quality-grid">
        {qualityItems.map((item) => (
          <div className="quality-card" key={item.id}>
            <div className="quality-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="quality-stats">

        <div className="stat-box">
          <h3>99.9%</h3>
          <p>Quality Rate</p>
        </div>

        <div className="stat-box">
          <h3>100%</h3>
          <p>Customer Focus</p>
        </div>

        <div className="stat-box">
          <h3>10+</h3>
          <p>Years Experience</p>
        </div>

        <div className="stat-box">
          <h3>24/7</h3>
          <p>Support</p>
        </div>

      </div>

      <div className="quality-buttons">

        <button
          className="quality-btn primary"
          onClick={scrollToContact}
        >
          Contact Us
        </button>

        <button
          className="quality-btn secondary"
          onClick={scrollToServices}
        >
          View Services
        </button>

      </div>

    </section>
  );
};

export default Quality;