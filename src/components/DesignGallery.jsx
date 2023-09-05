import React from 'react';
import { GalleryContainer, ImageContainer, Image } from '../styles/GalleryStyles';

const Gallery = ({ images }) => {
  return (
    <GalleryContainer>
      {images.map((image, index) => (
        <ImageContainer key={index}>
          <Image src={image} alt={`Image ${index + 1}`} />
        </ImageContainer>
      ))}
    </GalleryContainer>
  );
};

export default Gallery;