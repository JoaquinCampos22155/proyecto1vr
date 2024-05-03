// HomePage.jsx
import React from 'react';
import Header from '../componentes/header/header.jsx';
import SidebarA from './sidebarA/sidebarA.jsx';
import Content from '../componentes/content/content.jsx';

import './HomePageA.css'; // Importa los estilos CSS

const HomePageA = () => {
  return (
    <div className="home-pageA">
      <Header />
      <SidebarA />
      <Content />
    </div>
  );
};

export default HomePageA;
