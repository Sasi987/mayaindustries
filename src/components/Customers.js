import React, { useState } from "react";

const Customers = () => {
  const [search, setSearch] = useState("");

  const customers = [
    {
      id: 1,
      name: "UKAY Metal Industries Pvt Ltd",
      category: "Automotive Components",
    },
    {
      id: 2,
      name: "Jayashree Tubes Tech Components Pvt Ltd",
      category: "Industrial Manufacturing",
    },
    {
      id: 3,
      name: "SSAT Engineering Solutions",
      category: "Engineering Services",
    },
    {
      id: 4,
      name: "Suma Springs Pvt Ltd",
      category: "Spring Manufacturing",
    },
    {
      id: 5,
      name: "Nielsan Technolink Pvt Ltd",
      category: "Technology Solutions",
    },
    {
      id: 6,
      name: "Yash Seating Solutions",
      category: "Automotive Seating",
    },
    {
      id: 7,
      name: "Sri Beema & Co Industries",
      category: "Industrial Components",
    },
  ];

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="customers-section" id="customers">

      <div className="customers-header">
        <span>OUR CUSTOMERS</span>

        <h2>Trusted By Leading Industries</h2>

        <p>
          Building strong partnerships through quality,
          innovation, and customer satisfaction.
        </p>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search Customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="customers-grid">
        {filteredCustomers.map((customer) => (
          <div className="customer-card" key={customer.id}>
            <div className="customer-logo">
              {customer.name.charAt(0)}
            </div>

            <h3>{customer.name}</h3>

            <p>{customer.category}</p>

            <button
              className="customer-btn"
              onClick={handleContact}
            >
              Contact Us
            </button>
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