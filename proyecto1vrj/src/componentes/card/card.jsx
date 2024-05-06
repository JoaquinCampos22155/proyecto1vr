import React from 'react';
import './card.css';

const Card = ({ id, title, description}) => {
  return (
    <div className="card-container">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;

