import { React, createContext, useState, useContext, useEffect } from 'react';
import {
  registerRequest,
  loginRequest,
  verityTokenRequest,
} from '../api/auth.js';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado sin AuthProvider');
  }
  return context;
};

//Al anidar contenido dentro de una etiqueta JSX, el componente padre recibirá ese contenido a través de una prop llamada children.
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    const token = localStorage.getItem('token') || Cookies.get('token');
    //const token = Cookies.get('token');
    if (!token) {
      setIsAuthenticated(false);
      setLoading(false);
      return;
    }

    try {
      const res = await verityTokenRequest(token);
      console.log('Respuesta al verificar token:', res);
      setIsAuthenticated(true);
      setUser(res.data);
      setLoading(false);
    } catch (error) {
      console.error('Error verifying token', error);
      setIsAuthenticated(false);
      setUser(null);
      setLoading(false);
    }
  };

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setIsAuthenticated(true);
      setUser(res.data);
      if (res.data.token) {
        console.log('Token recibido:', res.data.token);
        localStorage.setItem('token', res.data.token);
        Cookies.set('token', res.data.token, {
          secure: false,
          path: '/', // Asegura que la cookie esté disponible en todo el sitio
          sameSite: 'None',
          expires: 1,
        });
        console.log('Token almacenado correctamente:', res.data.token);
      } else {
        console.error('El token recibido es vacío o undefined');
      }
    } catch (error) {
      console.log(error.response);
      setErrors([error.response.data.message]);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log('Respuesta completa:', res);
      setIsAuthenticated(true);
      setUser(res.data);
      if (res.data.token) {
        console.log('Token recibido:', res.data.token);
        localStorage.setItem('token', res.data.token);
        Cookies.set('token', res.data.token, {
          secure: false,
          path: '/', // Asegura que la cookie esté disponible en todo el sitio
          sameSite: 'None',
          expires: 1,
        });
        console.log('Token almacenado correctamente:', res.data.token);
      } else {
        console.error('El token recibido es vacío o undefined');
      }
    } catch (error) {
      setErrors([error.response.data.message]);
    }
  };

  return (
    <AuthContext.Provider
      value={{ signup, signin, loading, user, isAuthenticated, errors }}
    >
      {children}
    </AuthContext.Provider>
  );
};
