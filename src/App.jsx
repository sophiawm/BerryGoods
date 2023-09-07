import Alert from "./components/AlertMessage";
import MainButtons from "./components/StoreMainButtons.jsx";
import DesignGallery from "./components/DesignGallery.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";
import data from '../api/data.json';

function App() {
  const [showAlert, setShowAlert] = useState(true);
  const [deletedItem, setDeletedItem] = useState(null);

  const handleOpenAlert = (item) => {
    setDeletedItem(item);
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleDelete = () => {
    if (deletedItem) {
  
      const itemIndex = data.products.findIndex((item) => item.id === deletedItem.id);

      if (itemIndex !== -1) {
        data.products.splice(itemIndex, 1);

        // Realiza la actualización de los datos eliminando el elemento
        // Puedes hacer esto en el servidor o almacenarlos localmente según tu configuración
        // Por ejemplo, si estás trabajando con un servidor JSON local, puedes hacer lo siguiente:
        fetch('http://localhost:5173/', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then(() => {
            // Otras acciones
            setDeletedItem(null); // Esto indica que no hay elemento eliminado
            setShowAlert(false); // Cierra la alerta
            console.log('Elemento eliminado');
          })
          
          .catch((error) => {
            console.error('Error al actualizar los datos:', error);
            // Manejar errores si es necesario
          });
      }
    }
  };

  return (
    <>
      <DesignGallery onOpenAlert={handleOpenAlert} />
      <MainButtons />
      <Footer />

      {showAlert && (
        <Alert
          message={`Hello artist, you have deleted ${deletedItem}. Are you sure you want to delete this design?"`}
          onClose={handleCloseAlert}
          onDelete={handleDelete} // Llama a la función handleDelete para eliminar el elemento
        />
      )}
    </>
  );
}

export default App;
