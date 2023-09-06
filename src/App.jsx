import Alert from "./components/AlertMessage";
import MainButtons from "./components/StoreMainButtons.jsx";
import DesignGallery from "./components/DesignGallery.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";

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

  return (
    <>
      <DesignGallery onOpenAlert={handleOpenAlert} />
      <MainButtons />
      <Footer />

      {showAlert && (
        <Alert
          message={`Hello artist, you have deleted ${deletedItem}. Are you sure you want to delete this design?"`}
          onClose={handleCloseAlert}
          onDelete={() => {
            // Agrega aquí la lógica para eliminar el elemento (deletedItem)
            // Por ejemplo, puedes enviar una solicitud al servidor para eliminar el elemento
            // Una vez eliminado, actualiza el estado y cierra la alerta
            // setDeletedItem(null); // Esto indica que no hay elemento eliminado
            // setShowAlert(false); // Cierra la alerta
            console.log("Elemento eliminado");
          }}
        />
      )}
    </>
  );
}

export default App;
