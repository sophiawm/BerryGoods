import { useState } from "react";
import PropTypes from "prop-types"; // Importa PropTypes
import Alert from "../components/Alert"; 
import productsService from "../service/productService"; // Importa tu servicio de productos si es necesario

const DeleteButton = ({ Id }) => {
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const handleShowDeleteAlert = () => {
    setShowDeleteAlert(true);
  }
  const handleCloseDeleteAlert = () => {
    setShowDeleteAlert(false);
  };
  const handleDeleteProduct = async () => {
    try {
      await productsService.deleteProduct(Id); 
      setShowDeleteAlert(false);
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };

  return (
    <div>
      <button onClick={handleShowDeleteAlert}>DeleteButton</button>
      {showDeleteAlert && (
        <Alert
          message="¿Hello artist, you have deleted a desing. Are you sure?"
          onClose={handleCloseDeleteAlert}
          onDelete={handleDeleteProduct}
        />
      )}
    </div>
  );
};

// Añade la validación de tipos para la propiedad "Id"
DeleteButton.propTypes = {
  Id: PropTypes.number.isRequired, // Cambia el tipo si es necesario
};

export default DeleteButton;
