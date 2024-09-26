import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import Menu1 from './pages/Menusucursal';
import MetodoPago from './pages/metodo_pago';
import HomePage from './pages/HomePage';
import React from 'react';
import Confirmacioncom from './pages/Confirmacion-com';
import EstatusDePedido from './pages/Estatus-de-pedido';
import AdminPedido from './pages/Admin-pedido';
//import UsuarioPedido from './pages/Vendedor-pedidos';
import VendedorPedido from './pages/Vendedor-pedidos';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/home/menu" element={<Menu1 />} />
          <Route path="/metodo_pago" element={<MetodoPago />} />
          <Route path="/Confirmacion-com" element={<Confirmacioncom />} />
          <Route path="/Estatus-pedido" element={<EstatusDePedido />} />
          <Route path="/Admin-pedido" element={<AdminPedido />} />
          <Route path="/vendedor-pedido" element={<VendedorPedido />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
