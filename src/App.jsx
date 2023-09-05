import React from 'react';
import Gallery from './components/Gallery';

function App() {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Agrega más imágenes según sea necesario
  ];

  return (
    <div>
      <h1>Hello, Artist!</h1>
      <p>Add your delicious product</p>
      <Gallery images={images} />
    </div>
  );
}

export default App;
