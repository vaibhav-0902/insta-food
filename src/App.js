import React, { useEffect } from 'react'
import Home from './pages/Home';
import { BrowserRouter, Router, Link, Routes, Route } from 'react-router-dom'
import UnderMaintenance from './pages/UnderMaintenance';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cart from './pages/Cart';
import Login from './components/Login';

function App() {

  useEffect(() => {
    AOS.init({
      // Configuration options go here
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/maintenance" element={<UnderMaintenance />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
