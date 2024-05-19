import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import rccar from '../assets/rccar.jpg';
import sneakerPair from '../assets/sneaker-pair-2.jpg';
import shoes from '../assets/shoes.jpg';

const images = [
  rccar,
  sneakerPair,
  shoes,
];

const ImageCarousel = () => {
  return (
    <Carousel showThumbs={false} dynamicHeight={false} infiniteLoop={true} useKeyboardArrows={true}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} style={{ maxHeight: '300px', objectFit: 'cover' }} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
