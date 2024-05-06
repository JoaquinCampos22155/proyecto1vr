import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logss from './Login/logss';
import HomePage from './HomePage/HomePage'
import HomePageA from './componentes_admin/HomePageA'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Logss />} />
        <Route path="/HomePageA" element={<HomePageA />} />
        
      </Routes>
    </Router>
  );
};

export default App;
