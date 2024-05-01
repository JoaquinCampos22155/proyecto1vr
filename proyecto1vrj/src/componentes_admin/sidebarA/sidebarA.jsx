// SidebarA.jsx
import React from 'react';
import './sidebarA.css'; // Asegúrate de tener el archivo CSS en la misma ubicación

const SidebarA = () => {
  const handleAdd = () => {
    console.log('Agregando...');
  };

  const handleDelete = () => {
    console.log('Eliminando...');
  };

  const handleEdit = () => {
    console.log('Editando...');
  };

  return (
    <div className="sidebarA-container">
      <h2>Actions</h2>
      <button className="action-btn" onClick={handleAdd}>Agregar</button>
      <button className="action-btn" onClick={handleDelete}>Eliminar</button>
      <button className="action-btn" onClick={handleEdit}>Editar</button>
    </div>
  );
};

export default SidebarA;

