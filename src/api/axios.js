import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,
});

export default instance;

const fetchProfile = async () => {
  try {
    const response = await api.get('/profile'); // Llamada a /profile usando la instancia configurada
    console.log(response.data); // Muestra los datos del perfil
  } catch (error) {
    console.error('Error al obtener el perfil:', error);
  }
};

// Llamada a la función fetchProfile
fetchProfile();
