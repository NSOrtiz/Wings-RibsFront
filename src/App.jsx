import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Profile from './pages/ProfilePage';
import Menu1 from './pages/Menusucursal';
import MetodoPago from './pages/metodo_pago';
import HomePage from './pages/HomePage';
import React from 'react';
import Confirmacioncom from './pages/Confirmacion-com';
import EstatusDePedido from './pages/Estatus-de-pedido';
import AdminPedido from './pages/Admin-pedido';
import VendedorPedido from './pages/Vendedor-pedidos';
import Productos from './pages/Admin-productos';
import Menu2 from './pages/MenuAdmin';
import Menu3 from './pages/MenuSeller';
import VendedorInsumos from './pages/Vendedor-insumos';
import AdminSucursales from './pages/Admin-sucursales';
import AdminVendedores from './pages/AdminVendores';
import ResponsiveCart from './pages/Carrito_compra';
import Contacto from './pages/Contacto-sucursales';
import ProtectedRouteUser from './ProtectedRouteUser';
import ProductosDeshabilitados from './pages/Admin-productosDeshabilitados';

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
            <Route path="/metodo_pago" element={<MetodoPago />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/home/carrito" element={<ResponsiveCart />} />
          </Route>

          <Route path="/vendedor-menu" element={<Menu3 />} />
          <Route path="/vendedor-pedido" element={<VendedorPedido />} />
          <Route path="/vendedor-pedidos" element={<VendedorPedido />} />
          <Route path="/vendedor-insumoss" element={<VendedorInsumos />} />

          <Route path="/admin-menu" element={<Menu2 />} />
          <Route path="/admin-pedido" element={<AdminPedido />} />
          <Route path="/admin-vendedores" element={<AdminVendedores />} />
          <Route path="/admin-productos" element={<Productos />} />
          <Route path="/admin-sucursales" element={<AdminSucursales />} />
          <Route
            path="/admin-deshabilitados"
            element={<ProductosDeshabilitados />}
          />

          <Route path="home/menu" element={<Menu1 />} />
          <Route path="/confirmacion-com" element={<Confirmacioncom />} />
          <Route path="/metodo_pago" element={<MetodoPago />} />
          <Route path="/estatus-pedido" element={<EstatusDePedido />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
