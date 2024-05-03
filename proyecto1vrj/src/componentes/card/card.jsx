import React from 'react';
import './card.css';

const Card = ({ id, title, description, image }) => {
  return (
    <div className="card-container">
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={image} alt={title} />
    </div>
  );
};

export default Card;

