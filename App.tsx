import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import OurWork from './pages/OurWork';
import LocoTrails from './pages/LocoTrails';
import ArredsGreenEnergy from './pages/ArredsGreenEnergy';
import SreeRaajaGanapathyOilMill from './pages/SreeRaajaGanapathyOilMill';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen w-full overflow-x-hidden bg-gray-50">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          } />
          <Route path="/our-work" element={
            <>
              <Navbar />
              <OurWork />
              <Footer />
            </>
          } />
          <Route path="/projects/locotrails" element={<LocoTrails />} />
          <Route path="/projects/arreds-green-energy" element={<ArredsGreenEnergy />} />
          <Route path="/projects/sree-raaja-ganapathy-oil-mill" element={<SreeRaajaGanapathyOilMill />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;