import { GalleryContainer, ImageContainer, Image } from './styles/GalleryStyles';

const DesignGallery = () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Agrega más imágenes según sea necesario
  ];
  
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

export default DesignGallery;