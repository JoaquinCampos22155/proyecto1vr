import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login/login';
import HomePage from './HomePage/HomePage'
import HomePageA from './componentes_admin/HomePageA'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/HomePageA" element={<HomePageA />} />
        
      </Routes>
    </Router>
  );
};

export default App;
