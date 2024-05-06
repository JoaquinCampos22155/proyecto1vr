import React from 'react';
import './sidebar.css'; // Asegúrate de tener el archivo CSS en la misma ubicación
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/Login')
  };

  return (
    <div className="sidebar-container">
      <button onClick={handleLogin} className="btn2 btn-outline-danger2 mt-42">Iniciar Sesión</button>
    </div>
  );
};

export default Sidebar;
