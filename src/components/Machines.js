import React, { useMemo, useState } from "react";

const Machines = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [isLoading, setIsLoading] = useState(true);

  const machinesData = useMemo(
    () => [
      {
        id: 1,
        name: "Pneumatic Press",
        category: "Forming",
        image: "https://i.ibb.co/CpYWxZh0/c95be26c-8b99-41b6-9a20-2e38212e1219.png",
        description: "Reliable pneumatic pressing solutions for accurate, fast, and efficient industrial production.",
        specs: ["Capacity: 100 kg – 10 Ton", "Cycle: 12/min", "Material: Mild Steel"],
        features: ["Servo control", "Fast changeover", "Precision dies"],
        capacity: "60 Ton",
        applications: "Automotive brackets, enclosures",
      },
      {
        id: 2,
        name: "Press Machine",
        category: "Forming",
        image: "https://i.ibb.co/MDQz8Yc4/1c95af52-654e-42bb-889f-4e213e9a7a3c.png",
        description: "Power Press Machine is used for high-speed manufacturing operations like punching, cutting, bending, and stamping of sheet metal components..",
        specs: ["Capacity:5 Ton – 200 Ton,High production speed,Precision tooling system"],
        features: ["100 Ton Capacity", "PLC Control", "Heavy Duty Frame"],
        capacity: "200 Ton",
        applications: "Sheet metal industries, Automobile parts",
      },
      {
        id: 3,
        name: "Drilling Machine",
        category: "Machining",
        image: "https://i.ibb.co/Vk1Qmj1/049832c5-d71f-4002-9e37-2ee86020c890.png",
        description: "High-performance drilling solutions designed for precision, durability, and efficient industrial production.",
        specs: ["Spindle: 3 HP", "Tolerance: ±0.01 mm", "Depth control: CNC"],
        features: ["Auto feed", "High repeatability", "Multi-axis capability"],
        capacity: "24 mm drill",
        applications: "Automobile industries, Engineering workshops",
      },
      {
        id: 4,
        name: "CO2 Welding Machine",
        category: "Welding",
        image: "https://i.ibb.co/mVyj8dpN/a0288b81-7596-4b26-913c-63e3a36fc0a7.png",
        description: "High-performance CO₂ welding solutions designed for strong, precise, and efficient industrial fabrication.",
        specs: ["Power: 400 A", "Shield gas: CO2", "Duty cycle: 60%"],
        features: ["Low spatter", "Stable arc", "High weld quality"],
        capacity: "400 A",
        applications: "Frames, housings, assemblies",
      },
      {
        id: 5,
        name: "Deburring Machine",
        category: "Finishing",
        image: "https://i.ibb.co/HZ76mTm/45e8d102-379d-4e50-a83f-21f8bfcd8ce6.png",
        description: "Advanced surface finishing machine designed to remove sharp edges, burrs, and unwanted material from metal components for smooth and precise finishing..",
        specs: ["Speed: 1200 rpm", "Tooling: Brushless", "Finish: Burr-free"],
        features: ["Edge finishing", "Uniform surface", "Low noise"],
        capacity: "Medium batches",
        applications: "Sheet parts, enclosures",
      },
      {
        id: 6,
        name: "Air Compressor",
        category: "Utilities",
        image: "https://i.ibb.co/mrbWj6VR/aa14114a-2a3e-41c1-9fb7-719bc6998cee.png",
        description: "High-performance air compression system designed to provide reliable compressed air for industrial tools, machinery, and production operations..",
        specs: ["Flow: 20 CFM", "Pressure: 8 bar", "Tank: 500 L"],
        features: ["Energy efficient", "Continuous duty", "Quiet operation"],
        capacity: "20 CFM",
        applications: "Pneumatics, spray, shop air",
      },
      {
        id: 7,
        name: "Projection Welding machine",
        category: "Welding Machines",
        image: "https://i.ibb.co/LzMVJZGP/fbf205f9-a0ae-4704-bf6c-fac43c9c78bc.png",
        description: "DIdeal for automobile, sheet metal, and industrial fabrication applications with high efficiency and reliable weld quality.",
        specs: ["Input Voltage: 220V / 380V", "Control System: Digital / PLC Control",],
        features: ["High-strength weld joints", "Fast and accurate welding", "Low maintenance operation"],
        capacity: "10 kVA – 200 kVA",
        applications: "Automobile component welding, Sheet metal fabrication",
      },
       {
        id: 8,
        name: "Pneumatic Press Machine",
        category: "Press Machine",
        image: "https://i.ibb.co/JRZZ85hY/338a7175-1bbb-409e-a466-acb1d40545cc.png",
        description: "Provides smooth operation, low maintenance, and reliable performance for various industrial applications.",
        specs: ["Stroke Length: 50 mm – 300 mm", "Machine Type: Pneumatic Press Machine", "Operation Speed: High Speed"],
        features: ["High-speed and smooth operation", "Low power consumption", "Compact and durable design"],
        capacity: "100 kg – 10 Ton",
        applications: "Automobile component assembly, Sheet metal pressing and forming",
      },
       {
        id: 9,
        name: "Tapping Machine",
        category: "Industrial Threading Machine",
        image: "https://i.ibb.co/93pGykGT/c494c58f-1c0e-4f17-a017-b7d2658e584e.png",
        description: "Precision machine designed for creating internal threads in drilled holes with high accuracy and smooth operation.",
        specs: ["Motor Power: 0.25 HP – 3 HP", "Operation: Manual / Automatic", "Tank: 500 L"],
        features: ["High precision thread cutting", "Fast and efficient operation", ],
        capacity: "M3 – M50",
        applications: "Automobile component manufacturing, Sheet metal fabrication",
      },

      
    ],
    []
  );

  React.useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 500);
    return () => window.clearTimeout(timer);
  }, []);

  const categories = ["All", ...Array.from(new Set(machinesData.map((item) => item.category)))];

  const filteredMachines = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    const sorted = [...machinesData]
      .filter((machine) => {
        const matchesCategory = category === "All" || machine.category === category;
        const matchesSearch =
          normalizedSearch.length === 0 ||
          machine.name.toLowerCase().includes(normalizedSearch) ||
          machine.description.toLowerCase().includes(normalizedSearch) ||
          machine.applications.toLowerCase().includes(normalizedSearch);
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "name") return a.name.localeCompare(b.name);
        if (sortBy === "capacity") return a.capacity.localeCompare(b.capacity);
        return 0;
      });

    return sorted;
  }, [category, machinesData, search, sortBy]);

  // const handleContact = () => {
  //   document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  // };

  // const handleBrochure = () => {
  //   window.open("https://example.com/brochure.pdf", "_blank", "noopener,noreferrer");
  // };

  // const handleDetails = (name) => {
  //   window.alert(`Viewing detailed specifications for ${name}`);
  // };

  return (
    <section className="machines-section" id="machines" aria-labelledby="machines-title">
      <div className="machines-header">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          {/* <span>Home</span>
          <span>/</span>
          <span>Equipment</span>
          <span>/</span>
          <span className="breadcrumb-current">Machines</span> */}
        </nav>
        <span className="machines-pill">Industrial Equipment Catalog</span>
        <h2 id="machines-title">Engineered machinery for world-class fabrication.</h2>
        <p>
          Discover precision equipment designed for speed, consistency, and premium manufacturing performance.
        </p>
      </div>

      <div className="machines-toolbar">
        <label className="toolbar-field" htmlFor="machine-search">
          <span className="sr-only">Search machines</span>
          <input
            id="machine-search"
            type="search"
            placeholder="Search machines"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </label>

        <label className="toolbar-field" htmlFor="machine-category">
          <span className="sr-only">Filter by category</span>
          <select id="machine-category" value={category} onChange={(event) => setCategory(event.target.value)}>
            {categories.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="toolbar-field" htmlFor="machine-sort">
          <span className="sr-only">Sort machines</span>
          <select id="machine-sort" value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
            <option value="featured">Featured</option>
            <option value="name">Name A–Z</option>
            <option value="capacity">Capacity</option>
          </select>
        </label>
      </div>

      {isLoading ? (
        <div className="machines-grid" aria-label="Loading machines">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="machine-card machine-skeleton" key={index}>
              <div className="skeleton-image" />
              <div className="skeleton-line short" />
              <div className="skeleton-line" />
              <div className="skeleton-line" />
            </div>
          ))}
        </div>
      ) : filteredMachines.length === 0 ? (
        <div className="empty-state" role="status">
          <h3>No matching machines found</h3>
          <p>Try another search or category filter to explore the full equipment range.</p>
          <button className="machine-btn" onClick={() => { setSearch(""); setCategory("All"); }}>
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="machines-grid">
          {filteredMachines.map((machine) => (
            <article className="machine-card" key={machine.id}>
              <div className="machine-image-frame">
                <img src={machine.image} alt={machine.name} loading="lazy" />
              </div>
              <div className="machine-content">
                <div className="machine-meta">
                  <span>{machine.category}</span>
                  <span>Capacity {machine.capacity}</span>
                </div>
                <h3>{machine.name}</h3>
                <p>{machine.description}</p>

                <ul className="machine-spec-list">
                  {machine.specs.map((spec) => (
                    <li key={spec}>{spec}</li>
                  ))}
                </ul>

                <div className="machine-feature-list">
                  {machine.features.map((feature) => (
                    <span key={feature}>{feature}</span>
                  ))}
                </div>

                {/* <div className="machine-footer-actions">
                  <button className="machine-btn action-primary" onClick={() => handleDetails(machine.name)}>
                    View Details
                  </button>
                  <button className="machine-btn action-secondary" onClick={handleContact}>
                    Request Quote
                  </button>
                  <button className="machine-btn action-tertiary" onClick={handleBrochure}>
                    Download Brochure
                  </button>
                </div> */}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Machines;