import {React, lazy, Suspense} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Logss = lazy(() => import("./Login/logss"));
const HomePage = lazy(() => import("./HomePage/HomePage"));
const HomePageA = lazy(() => import("./componentes_admin/HomePageA"));
const Loading = lazy(() => import("./componentes/loading/loading"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<Logss />} />
          <Route path="/HomePageA" element={<HomePageA />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App; 
