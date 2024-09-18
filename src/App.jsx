import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import Menu1 from './pages/menusucursal';
import MetodoPago from './pages/metodo_pago';
import React from 'react';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/home/menu" element={<Menu1 />} />
        <Route path="/metodo_pago" element={<MetodoPago />} />
      </Routes>
    </BrowserRouter>
  );
}
