import React from 'react';
import { CgUserlane } from "react-icons/cg";
import './nopost.css';

const Nopost = () => {
  return (
    <div className="nopost-container">
      <p className="nopost-text">En espera para futuras publicaciones</p>
      <CgUserlane className="userlane-icon" />

    </div>
  );
};

export default Nopost;