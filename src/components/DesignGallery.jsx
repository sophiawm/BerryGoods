import { GalleryContainer, ImageContainer, Image } from '../styles/DesingGallery.styled.jsx';
import design1 from '../assets/design1.png';
import design2 from '../assets/design2.png';
import design3 from '../assets/design3.png';
import design4 from '../assets/design4.png';


const DesignGallery = () => {
  const images = [design1, design2, design3, design4,
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