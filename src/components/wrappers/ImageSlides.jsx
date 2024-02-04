import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const ImageSlides = ({ images, children, IconColor }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  const SliderStyle = {
    height: '100%',
    width: '100%',
  };

  const ColorCode ={
    color:'#fff',
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  return (
    <div className="image-slider-maindiv" style={ColorCode}>

      <div className="ImageSlider-Buttons-div">
        <button onClick={prevImage} className="Previous-Image" >
          ❮
        </button>
        <div className="ImageSlider-Dot-div">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            >●</span>
          ))}
        </div>
        <button onClick={nextImage} className="Next-Image" >
          ❯
        </button>
      </div>

      <div className="TextContant-div"> 
        {children}
      </div>

      <div className="image-slider-images">
        <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} style={SliderStyle} />
      </div>
    </div>
  );
};

export default ImageSlides;
