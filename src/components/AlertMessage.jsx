import  { useState } from "react";
import PropTypes from "prop-types";


const Alert = ({ message, onClose, onDelete }) => {
  const [showAlert, setShowAlert] = useState(true);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const handleClose = () => {
    setShowAlert(false);
    onClose();
  };

  const handleDelete = () => {
    onDelete();
    setShowDeleteAlert(false); // Cierra la alerta de eliminación
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
          Eliminar Elemento
        </button>

        {/* Mostrar el componente de eliminación solo cuando showDeleteAlert es verdadero */}
        {showDeleteAlert && (
          <div>
            {/* Contenido del componente de eliminación */}
            <p>¿Estás seguro de que deseas eliminar este elemento?</p>
            <button onClick={handleDelete}>Sí</button>
            <button onClick={() => setShowDeleteAlert(false)}>No</button>
          </div>
        )}
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
