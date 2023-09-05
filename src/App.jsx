import React from 'react';
import AddProductButton from './components/AddProductButton';
import EditStoreButton from './components/EditStoreButton';
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
      <AddProductButton onClick={() => console.log('ADD PRODUCT clicked')} />
      <EditStoreButton onClick={() => console.log('EDIT STORE clicked')} />
    </div>
  );
}

export default App
