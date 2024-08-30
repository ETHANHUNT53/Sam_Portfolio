// src/Components/Carousel.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true, // Ensures the carousel loops indefinitely
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Optional: Hides the arrows for a cleaner look
    adaptiveHeight: true, // Adjusts height based on slide content
  };

  return (
    <div className="w-full">
      <Slider {...settings} className="carousel">
        <div className="flex flex-wrap w-full gap-4 text-sm text-gray-600">
          <span className="bg-white bg-opacity-50 px-3 py-1 rounded-full">UI/UX Design</span>
          <span className="bg-white bg-opacity-50 px-3 py-1 rounded-full">HTML/CSS</span>
          <span className="bg-white bg-opacity-50 px-3 py-1 rounded-full">Wireframing</span>
          <span className="bg-white bg-opacity-50 px-3 py-1 rounded-full">Responsive Design</span>
          <span className="bg-white bg-opacity-50 px-3 py-1 rounded-full">Prototyping</span>
          <span className="bg-white bg-opacity-50 px-3 py-1 rounded-full">Brand and Identity Design</span>
          <span className="bg-white bg-opacity-50 px-3 py-1 rounded-full">Sketching and C</span>
        </div>
        {/* Add more slides as needed */}
        <div className="flex flex-wrap w-full gap-4 text-sm text-gray-600">
          <span className="bg-white bg-opacity-50 px-3 py-1 rounded-full">Another Item</span>
          {/* Add more items here */}
        </div>
      </Slider>
    </div>
  );
}
