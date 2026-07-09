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
        image: "https://i.ibb.co/B5MnRpz6/Factory-photos-professional-corp-202606040510.jpg",
        description: "High-precision forming for consistent sheet metal output.",
        specs: ["Capacity: 60 Ton", "Cycle: 12/min", "Material: Mild Steel"],
        features: ["Servo control", "Fast changeover", "Precision dies"],
        capacity: "60 Ton",
        applications: "Automotive brackets, enclosures",
      },
      {
        id: 2,
        name: "Press Machine",
        category: "Forming",
        image: "https://i.ibb.co/dsgf4ygp/Yes-I-understand-the-issue-202606040510.jpg",
        description: "Robust industrial press capability for high-volume manufacturing.",
        specs: ["Capacity: 100 Ton", "Cycle: 8/min", "Material: Stainless Steel"],
        features: ["Heavy-duty frame", "Stable output", "Tooling support"],
        capacity: "100 Ton",
        applications: "Panels, covers, structural parts",
      },
      {
        id: 3,
        name: "Drilling Machine",
        category: "Machining",
        image: "https://i.ibb.co/j9Wm4PNc/Yes-I-understand-the-issue-202606040508.jpg",
        description: "Accurate drilling and hole-finishing for engineered components.",
        specs: ["Spindle: 3 HP", "Tolerance: ±0.01 mm", "Depth control: CNC"],
        features: ["Auto feed", "High repeatability", "Multi-axis capability"],
        capacity: "24 mm drill",
        applications: "Precision holes, fixture plates",
      },
      {
        id: 4,
        name: "CO2 Welding Machine",
        category: "Welding",
        image: "https://i.ibb.co/C56cn10y/Factory-photos-professional-corp-202606050341.jpg",
        description: "Reliable welding for strong joints and repeatable fabrication quality.",
        specs: ["Power: 400 A", "Shield gas: CO2", "Duty cycle: 60%"],
        features: ["Low spatter", "Stable arc", "High weld quality"],
        capacity: "400 A",
        applications: "Frames, housings, assemblies",
      },
      {
        id: 5,
        name: "Deburring Machine",
        category: "Finishing",
        image: "https://i.ibb.co/twGCcSYp/Factory-photos-professional-corp-202606050341-1.jpg",
        description: "Smooth finishing and edge refinement for premium part presentation.",
        specs: ["Speed: 1200 rpm", "Tooling: Brushless", "Finish: Burr-free"],
        features: ["Edge finishing", "Uniform surface", "Low noise"],
        capacity: "Medium batches",
        applications: "Sheet parts, enclosures",
      },
      {
        id: 6,
        name: "Air Compressor",
        category: "Utilities",
        image: "https://i.ibb.co/NdfWw1Sz/Factory-photos-professional-corp-202606050337.jpg",
        description: "Dependable compressed-air support for production continuity.",
        specs: ["Flow: 20 CFM", "Pressure: 8 bar", "Tank: 500 L"],
        features: ["Energy efficient", "Continuous duty", "Quiet operation"],
        capacity: "20 CFM",
        applications: "Pneumatics, spray, shop air",
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