import React from 'react';
import { CgRead } from "react-icons/cg";
import './loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <p className="loading-text">Cargando</p>
      
      <p className="loading-text">Buscando los posts</p>
      <CgRead className="userlane-icon" />

    </div>
  );
};

export default Loading;