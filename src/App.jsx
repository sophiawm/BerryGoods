import React from 'react';
import Navbar from './components/Header.jsx';
import MainButtons from './components/StoreMainButtons.jsx';
import DesignGallery from './components/DesignGallery.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/login/Login.jsx';

function App() {
  return (
    <>
      <Navbar/> 
        
        <DesignGallery />
        <MainButtons /> 
      <Footer/> 
    </>
  );
}

export default App
