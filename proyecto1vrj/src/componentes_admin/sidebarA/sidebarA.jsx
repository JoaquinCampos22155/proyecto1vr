import React from 'react';
import './sidebarA.css'; 

const SidebarA = () => {
  const handleAdd = async () => {
    try {
      const title = window.prompt('Ingrese el título del post:');
      const description = window.prompt('Ingrese la descripción del post:');
      
      if (!title || !description) {
        throw new Error('Debe completar todos los campos');
      }

      const response = await fetch('http://127.0.0.1:3000/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          description
        })
      });
      if (!response.ok) {
        throw new Error('Error al agregar el post');
      }
      console.log('Post agregado exitosamente');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const id = window.prompt('Ingrese el id del post:');
      
      if (!id) {
        throw new Error('Debe completar todos los campos');
      }

      const response = await fetch('http://127.0.0.1:3000/fpost', {
        method: 'DEL',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id
        })
      });
      if (!response.ok) {
        throw new Error('Error al agregar el post');
      }
      console.log('Post agregado exitosamente');
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const handleEdit = async () => {
    try {
      // Aquí realizarías la solicitud para editar un post
      console.log('Editando...');
    } catch (error) {
      console.error('Error:', error);
    }
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
