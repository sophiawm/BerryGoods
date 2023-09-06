import { useState } from "react";
import PropTypes from "prop-types";

const Alert = ({ message, onClose, onDelete }) => {
  const [showAlert, setShowAlert] = useState(true);

  const handleClose = () => {
    setShowAlert(false);
    onClose();
  };

  const handleDelete = () => {
    // Agrega lógica para eliminar aquí si es necesario
    onDelete();
    setShowAlert(false); // Cierra la alerta después de eliminar
  };

  return (
    showAlert && (
      <div
        style={{
          backgroundColor: "#6134C2",
          color: "white",
          width: "50vh",
          fontSize: "1.6rem",
          padding: "10% 8vh 8vh 8vh",
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
            fontSize: "3.5rem",
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
          onClick={handleDelete}
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
};

export default Alert;
