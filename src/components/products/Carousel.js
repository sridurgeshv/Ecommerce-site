import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Import images
import shoes from '../assets/shoes.jpg';
import sneakers from '../assets/sneaker-pair-2.jpg';
import rccar from '../assets/rccar.jpg';
import './Carousel.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-slider">
          <img src={shoes} alt="Shoes" className="carousel-image" /> {/* Ensure images fit container */}
        </div>
        <div className="carousel-slider">
          <img src={sneakers} alt="Sneakers" className="carousel-image" /> {/* Ensure images fit container */}
        </div>
        <div className="carousel-slider">
          <img src={rccar} alt="Rccar" className="carousel-image" /> {/* Ensure images fit container */}
        </div>
        {/* Add more carousel images as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;
