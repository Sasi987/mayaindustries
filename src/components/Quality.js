import React from "react";

const Quality = () => {
  const qualityItems = [
    { id: 1, title: "Zero PPM", description: "Consistent output engineered around zero-defect performance.", icon: "🎯" },
    { id: 2, title: "Safety First", description: "Operational discipline that protects people, equipment, and processes.", icon: "🦺" },
    { id: 3, title: "Customer Satisfaction", description: "A quality culture focused on dependable delivery and response.", icon: "⭐" },
    { id: 4, title: "Cost Performance", description: "Efficient manufacturing that balances value, speed, and precision.", icon: "💰" },
  ];

  // const scrollToContact = () => {
  //   document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  // };

  const scrollToMachines = () => {
    document.getElementById("machines")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="quality-section" id="quality" aria-labelledby="quality-title">
      <div className="quality-header">
        <span className="quality-tag">Quality Policy</span>
        <h2 id="quality-title">Engineering excellence that is measurable, repeatable, and trusted.</h2>
        <p>
          Every component we deliver is shaped by disciplined processes, proactive quality checks, and a clear focus on customer confidence.
        </p>
      </div>

      <div className="quality-grid">
        {qualityItems.map((item) => (
          <div className="quality-card" key={item.id}>
            <div className="quality-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="quality-stats">
        <div className="stat-box">
          <h3>99.9%</h3>
          <p>Quality Conformance</p>
        </div>
        <div className="stat-box">
          <h3>100%</h3>
          <p>Customer Focus</p>
        </div>
        <div className="stat-box">
          <h3>10+</h3>
          <p>Years of Craft</p>
        </div>
        <div className="stat-box">
          <h3>ISO 9001:2015 </h3>
          <p>certified</p>
        </div>
      </div>

      <div className="quality-buttons">
        {/* <button className="quality-btn primary" onClick={scrollToContact}>Contact Us</button> */}
        <button className="quality-btn secondary" onClick={scrollToMachines}>See Our Equipment</button>
      </div>
    </section>
  );
};

export default Quality;