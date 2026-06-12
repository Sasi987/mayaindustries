import React, { useState } from "react";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone
    ) {
      alert("Please fill all required fields");
      return;
    }

    alert("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  const openWhatsapp = () => {
    window.open(
      "https://wa.me/919791793209",
      "_blank"
    );
  };

  const sendEmail = () => {
    window.location.href =
      "mailto:mayapresscomp@gmail.com";
  };

  const openMap = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=MAYA+INDUSTRIES+Begapalli+Hosur+Tamil+Nadu+635126",
      "_12.770140, 77.802839"
    );
  };

  return (
    <section className="contact-section" id="contact">

      <div className="contact-header">
        <span>CONTACT US</span>

        <h2>Get In Touch With Us</h2>

        <p>
          We are ready to support your manufacturing
          and engineering requirements.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <div className="info-card">
            <h3>📧 Email</h3>
            <p>mayapresscomp@gmail.com</p>
          </div>

          <div className="info-card">
            <h3>📱 Phone</h3>
            <p>+91 9791773209</p>
          </div>

          <div className="info-card">
            <h3>📍 Location</h3>
            <p>MAYA INDUSTRIES
Begapalli, SIPCOT,
Hosur – 635126,
Tamil Nadu, India.</p>
          </div>

          <div className="contact-actions">

            <button
              className="whatsapp-btn"
              onClick={openWhatsapp}
            >
              WhatsApp
            </button>

            <button
              className="email-btn"
              onClick={sendEmail}
            >
              Email Us
            </button>

            <button
              className="map-btn"
              onClick={openMap}
            >
              View Map
            </button>

          </div>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="submit-btn"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
};

export default Contact;