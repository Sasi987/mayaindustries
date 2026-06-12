import React from "react";


const Machines = () => {

  const machinesData = [
    {
      id: 1,
      name: "Pneumatic Press",
      image:
        "https://i.ibb.co/B5MnRpz6/Factory-photos-professional-corp-202606040510.jpg",
      description:
        "High precision pneumatic press for sheet metal production.",
    },
    {
      id: 2,
      name: "Press Machine",
      image:
        "https://i.ibb.co/dsgf4ygp/Yes-I-understand-the-issue-202606040510.jpg",
      description:
        "Industrial press machine for large-scale manufacturing.",
    },
    {
      id: 3,
      name: "Drilling Machine",
      image:
        "https://i.ibb.co/j9Wm4PNc/Yes-I-understand-the-issue-202606040508.jpg",
      description:
        "Advanced drilling machine for accurate hole operations.",
    },
    {
      id: 4,
      name: "CO2 Welding Machine",
      image:
        "https://i.ibb.co/C56cn10y/Factory-photos-professional-corp-202606050341.jpg",
      description:
        "Professional welding system with superior joint quality.",
    },
    {
      id: 5,
      name: "Deburring Machine",
      image:
        "https://i.ibb.co/twGCcSYp/Factory-photos-professional-corp-202606050341-1.jpg",
      description:
        "Smooth finishing and edge removal machine.",
    },
    {
      id: 6,
      name: "Air Compressor",
      image:
        "https://i.ibb.co/NdfWw1Sz/Factory-photos-professional-corp-202606050337.jpg",
      description:
        "15 HP and 7.5 HP compressors for industrial operations.",
    },
  ];

  const handleContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="machines-section" id="machines">
      <div className="machines-header">
        <span>OUR MACHINES</span>

        <h2>Advanced Manufacturing Equipment</h2>

        <p>
          We use modern industrial machines to ensure
          precision, productivity, and quality.
        </p>
      </div>

      <div className="machines-grid">
        {machinesData.map((machine) => (
          <div className="machine-card" key={machine.id}>
            <img
              src={machine.image}
              alt={machine.name}
            />

            <div className="machine-content">
              <h3>{machine.name}</h3>

              <p>{machine.description}</p>

              <button
                onClick={handleContact}
                className="machine-btn"
              >
                Request Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Machines;