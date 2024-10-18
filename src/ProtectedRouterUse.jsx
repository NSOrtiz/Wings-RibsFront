import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
export default function ProtectedRouteUser() {
  const { user, isAuthenticated } = useAuth();
  console.log(user);
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <Outlet />;
}
