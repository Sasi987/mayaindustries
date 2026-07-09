import React, { useState } from "react";

const Customers = () => {
  const [search, setSearch] = useState("");

  const customers = [
    { id: 1, name: "UKAY Metal Industries Pvt Ltd", category: "Automotive Components" },
    { id: 2, name: "Jayashree Tubes Tech Pvt Ltd", category: "Industrial Manufacturing" },
    { id: 3, name: "SSAT Engineering Solutions", category: "Engineering Services" },
    { id: 4, name: "Suma Springs Pvt Ltd", category: "Spring Manufacturing" },
    { id: 5, name: "Nielsan Technolink Pvt Ltd", category: "Technology Solutions" },
    { id: 6, name: "Yash Seating Solutions", category: "Automotive Seating" },
    { id: 7, name: "Sri Beema & Co Industries", category: "Industrial Components" },
  ];

  const filteredCustomers = customers.filter((customer) => customer.name.toLowerCase().includes(search.toLowerCase()));

  const handleContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="customers-section" id="customers" aria-labelledby="customers-title">
      <div className="customers-header">
        <span>Our Customers</span>
        <h2 id="customers-title">Partners across precision-driven industries.</h2>
        <p>We build lasting relationships through dependable quality, responsive communication, and a clear commitment to execution.</p>
      </div>

      <div className="search-box">
        <label className="sr-only" htmlFor="customer-search">Search customer</label>
        <input id="customer-search" type="text" placeholder="Search customer..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div className="customers-grid">
        {filteredCustomers.map((customer) => (
          <div className="customer-card" key={customer.id}>
            <div className="customer-logo">{customer.name.charAt(0)}</div>
            <h3>{customer.name}</h3>
            <p>{customer.category}</p>
            <button className="customer-btn" onClick={handleContact}>Start a Conversation</button>
          </div>
        ))}
      </div>

      <div className="customer-stats">
        <div className="stat-card">
          <h3>50+</h3>
          <p>Happy Clients</p>
        </div>
        <div className="stat-card">
          <h3>100+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat-card">
          <h3>10+</h3>
          <p>Years Experience</p>
        </div>
        <div className="stat-card">
          <h3>99%</h3>
          <p>Customer Satisfaction</p>
        </div>
      </div>
    </section>
  );
};

export default Customers;