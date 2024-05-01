// HomePage.jsx
import React from 'react';
import Header from '../componentes/header/header.jsx';
import Sidebar from '../componentes/sidebar/sidebar.jsx';
import Content from '../componentes/content/content.jsx';

import './HomePage.css'; // Importa los estilos CSS

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
};

export default HomePage;
