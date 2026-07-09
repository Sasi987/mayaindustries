import React, { useState } from "react";

const ACCESS_KEY = "906ceac0-13b8-4e9d-aa46-ca4dc3db2f5c";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({
    type: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (feedback.message) {
      setFeedback({
        type: "",
        message: "",
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      setFeedback({
        type: "error",
        message: "Please complete all required fields.",
      });
      return;
    }

    setIsSubmitting(true);
    setFeedback({
      type: "",
      message: "",
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,

          subject: "New Inquiry - Maya Industries Website",

          from_name: formData.name,

          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFeedback({
          type: "success",
          message:
            "Thank you! Your inquiry has been sent successfully. Our team will contact you shortly.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        setFeedback({
          type: "error",
          message: "Unable to send your inquiry. Please try again.",
        });
      }
    } catch (error) {
      console.error(error);

      setFeedback({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsapp = () => {
    window.open(
      "https://wa.me/919791773209",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const sendEmail = () => {
    window.location.href = "mailto:mayapresscomp@gmail.com";
  };

  const openMap = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=MAYA+INDUSTRIES+Begapalli+Hosur+Tamil+Nadu+635126",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-header">
        <span>CONTACT US</span>

        <h2 id="contact-title">
          Let's Build Your Next Precision Solution
        </h2>

        <p>
          We are ready to support your manufacturing, engineering and
          production requirements with responsive collaboration.
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

            <p>
              Maya Industries
              <br />
              Begapalli, SIPCOT
              <br />
              Hosur – 635126
              <br />
              Tamil Nadu, India
            </p>
          </div>

          <div className="contact-actions">
            <button
              type="button"
              className="whatsapp-btn"
              onClick={openWhatsapp}
            >
              WhatsApp
            </button>

            <button
              type="button"
              className="email-btn"
              onClick={sendEmail}
            >
              Email Us
            </button>

            <button
              type="button"
              className="map-btn"
              onClick={openMap}
            >
              View Map
            </button>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="checkbox"
            name="botcheck"
            style={{ display: "none" }}
          />

          <label htmlFor="name">Full Name *</label>

          <input
            id="name"
            type="text"
            name="name"
            placeholder="Full Name *"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email Address *</label>

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone Number *</label>

          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="company">Company Name</label>

          <input
            id="company"
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
          />

          <label htmlFor="message">Project Details</label>

          <textarea
            id="message"
            rows="5"
            name="message"
            placeholder="Tell us about your requirements..."
            value={formData.message}
            onChange={handleChange}
          />

          {feedback.message && (
            <p
              className={`form-feedback ${feedback.type}`}
              aria-live="polite"
            >
              {feedback.message}
            </p>
          )}

          <button
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Inquiry"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;