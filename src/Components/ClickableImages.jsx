import React, { useState } from "react";

function ClickableImages() {
  const [hoveredImg, setHoveredImg] = useState(null);

  const handleClick = (imgIndex) => {
    // Do something when image is clicked
  };

  const handleMouseEnter = (imgIndex) => {
    setHoveredImg(imgIndex);
  };

  const handleMouseLeave = () => {
    setHoveredImg(null);
  };

  const images = [
    {
      src: "https://en.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-hybrid-hoodie-denim-jacket-ready-to-wear--HNY83WIHN313_PM1_Worn%20view.png?wid=2048&hei=2048",
      alt: "Image 1",
    },
    {
      src: "https://en.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-flower-tapestry-print-t-shirt-ready-to-wear--HNY91WNPG002_PM1_Worn%20view.png?wid=2048&hei=2048",
      alt: "Image 2",
    },
    {
      src: "https://en.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-x-yk-embroidered-faces-cargo-pants-ready-to-wear--HOP35WV56620_PM1_Worn%20view.png?wid=2048&hei=2048",
      alt: "Image 3",
    },
  ];

  return (
    <div className="image-container mb-80 mt-80">
      {images.map((image, index) => (
        <div
          key={index}
          className="image-wrapper"
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={image.src}
            alt={image.alt}
            className={`image ${hoveredImg === index ? "hovered" : ""}`}
          />
          <div className="hover-text">
            {hoveredImg === index && <p>Click to see more</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ClickableImages;
