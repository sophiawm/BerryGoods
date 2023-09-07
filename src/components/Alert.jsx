import { useState } from "react";
import PropTypes from "prop-types";
import productsService from "../service/productService";

const Alert = ({ message, onClose, onDelete, productId }) => {
  const [showAlert, setShowAlert] = useState(true);

  const handleClose = () => {
    setShowAlert(false);
    onClose();
  };

  const handleDelete = async () => {
    try {
      await productsService.deleteProduct(productId);
      console.log("Eliminando el producto con ID:", productId);

      const response = await fetch(`http://localhost:3000/`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        console.error("Error al eliminar el producto");
        // Puedes manejar el error aquí o lanzar una excepción según tus necesidades
      } else {
        // Si la eliminación fue exitosa, cierra la alerta
        setShowAlert(false);
        onDelete();
      }
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      // Puedes manejar el error aquí o lanzar una excepción según tus necesidades
    }
  };

  return (
    showAlert && (
      <div
        style={{
          backgroundColor: "#6134C2",
          color: "white",
          width: "50vh",
          fontSize: "1.5rem",
          padding: "25% 8vh 8vh 8vh",
          borderRadius: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          boxShadow: "rgb(224, 129, 245) 5px 5px 5px 7px",
        }}
      >
        <div style={{ marginBottom: "10px" }}>{message}</div>
        <button
          style={{
            backgroundColor: "transparent",
            fontSize: "3rem",
            border: "none",
            color: "#F3B605",
            cursor: "pointer",
            position: "absolute",
            top: "7%",
            right: "7%",
          }}
          onClick={handleClose}
        >
          &times;
        </button>
        <button
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            backgroundColor: "transparent",
            border: "none",
            color: "#F3B605",
            cursor: "pointer",
            marginTop: "10%",
          }}
          onClick={handleDelete({productId})}
        >
          Delete
        </button>
      </div>
    )
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  productId: PropTypes.number.isRequired, // Añade la validación de productId
};

export default Alert;
