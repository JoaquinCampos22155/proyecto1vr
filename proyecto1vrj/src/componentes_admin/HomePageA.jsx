// HomePage.jsx
import React from 'react';
import Header from '../componentes/header/header.jsx';
import Sidebar from '../componentes/sidebar/sidebar.jsx';
import Content from '../componentes/content/content.jsx';

import './HomePageA.css'; // Importa los estilos CSS

const HomePageA = () => {
  return (
    <div className="home-pageA">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
};

export default HomePageA;
