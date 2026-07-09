import React, { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryData = [
    { id: 1, title: "Factory Overview", image: "https://i.ibb.co/mrQvfKNB/Factory-photos-professional-corp-202606040505.jpg" },
    { id: 2, title: "Production Unit", image: "https://i.ibb.co/RGdd4dwJ/Factory-photos-professional-corp-202606040634.jpg" },
  ];

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const goToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="gallery-section" id="gallery" aria-labelledby="gallery-title">
      <div className="gallery-header">
        <span>Our Gallery</span>
        <h2 id="gallery-title">A closer look at our production environment.</h2>
        <p>Explore the manufacturing floor, equipment, and processes that support our delivery promise.</p>
      </div>

      <div className="gallery-grid">
        {galleryData.map((item) => (
          <div className="gallery-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="gallery-overlay">
              <h3>{item.title}</h3>
              <button onClick={() => openImage(item.image)}>View Image</button>
            </div>
          </div>
        ))}
      </div>

      <div className="gallery-btn-area">
        <button className="gallery-contact-btn" onClick={goToContact}>Request a Factory Visit</button>
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={closeImage} role="dialog" aria-label="Image preview">
          <img src={selectedImage} alt="Preview" />
        </div>
      )}
    </section>
  );
};

export default Gallery;