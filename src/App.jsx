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
import VendedorPedido from './pages/Vendedor-pedidos';
import VendedorInsumos from './pages/Vendedor-insumos';
import Productos from './pages/Admin-productos';
import Menu2 from './pages/MenuAdmin';
import Menu3 from './pages/MenuSeller';
import Insumos from './pages/Vendedor-insumos';
import AdminSucursales from './pages/Admin-sucursales';
import AdminVendores from './pages/AdminVendores';
import ResponsiveCart from './pages/Carrito_compra';
import Contacto from './pages/Contacto-sucursales';
import ProtectedRouteUser from './ProtectedRouteUser';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route element={<ProtectedRouteUser />}>
            <Route path="/home/menu" element={<Menu1 />} />
            <Route path="/confirmacion-com" element={<Confirmacioncom />} />
            <Route path="/estatus-pedido" element={<EstatusDePedido />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>

          <Route path="/vendedor-pedido" element={<VendedorPedido />} />
          <Route path="/vendedor-insumos" element={<VendedorInsumos />} />
          <Route path="/vendedor-pedidos" element={<VendedorPedido />} />

          <Route path="/admin-pedido" element={<AdminPedido />} />
          <Route path="/admin-vendors" element={<AdminVendors />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/home/menu" element={<Menu1 />} />
          <Route path="/metodo_pago" element={<MetodoPago />} />
          <Route path="/confirmacion-com" element={<Confirmacioncom />} />
          <Route path="/estatus-pedido" element={<EstatusDePedido />} />
          <Route path="/admin-pedidos" element={<AdminPedido />} />

          <Route path="/admin-productos" element={<Productos />} />
          <Route path="/admin-menu" element={<Menu2 />} />

          <Route path="/vendedor-menu" element={<Menu3 />} />
          <Route path="/vendedor-insumos" element={<Insumos />} />

          <Route path="/admin-sucursales" element={<AdminSucursales />} />
          <Route path="/admin-vendedores" element={<AdminVendores />} />

          <Route path="/home/carrito" element={<ResponsiveCart />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
