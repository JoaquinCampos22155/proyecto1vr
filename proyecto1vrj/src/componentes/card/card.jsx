// card.jsx
import React from 'react';
import './card.css';

const Card = () => {
  return (
    <div className="card-container">
      <h2>Título de la Card</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lorem eget justo luctus pretium. Donec sed erat quis ipsum consequat pharetra.</p>
      <img src="ruta_de_la_imagen" alt="Imagen de la Card" />
    </div>
  );
};

export default Card;
