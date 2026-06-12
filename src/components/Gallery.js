import React, { useState } from "react";


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryData = [
    {
      id: 1,
      title: "Factory Overview",
      image:
        "https://i.ibb.co/mrQvfKNB/Factory-photos-professional-corp-202606040505.jpg",
    },
    {
      id: 2,
      title: "Production Unit",
      image:
        "https://i.ibb.co/RGdd4dwJ/Factory-photos-professional-corp-202606040634.jpg",
    },
   
  ];

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const goToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className="gallery-section" id="gallery">

      <div className="gallery-header">
        <span>OUR GALLERY</span>

        <h2>Factory & Manufacturing Gallery</h2>

        <p>
          Explore our manufacturing facility,
          machinery, production process and
          quality operations.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryData.map((item) => (
          <div
            className="gallery-card"
            key={item.id}
          >
            <img
              src={item.image}
              alt={item.title}
            />

            <div className="gallery-overlay">
              <h3>{item.title}</h3>

              <button
                onClick={() =>
                  openImage(item.image)
                }
              >
                View Image
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="gallery-btn-area">
        <button
          className="gallery-contact-btn"
          onClick={goToContact}
        >
          Request Factory Visit
        </button>
      </div>

      {selectedImage && (
        <div
          className="image-modal"
          onClick={closeImage}
        >
          <img
            src={selectedImage}
            alt="Preview"
          />
        </div>
      )}

    </section>
  );
};

export default Gallery;