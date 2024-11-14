import axios from './axios';

export const registerRequest = (user) => axios.post('/register', user);

export const loginRequest = (user) => axios.post('/login', user);

//export const verityTokenRequest = () => axios.get(`/verify`);

export const verityTokenRequest = async (token) => {
  console.log('Verificando token:', token);
  return axios.get('http://localhost:5000/api/verify', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`, // Envía el token en el encabezado
    },
    withCredentials: true,
  });
};
