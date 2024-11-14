import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import { useLocation } from 'react-router-dom';

function UpdateUser({ isOpen, setIsOpen, userData }) {
  const location = useLocation();
  const [token, setToken] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const { handleSubmit, reset, register } = useForm();

  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem('token');
    if (tokenFromLocalStorage) {
      setToken(tokenFromLocalStorage); // Establecer el token en el estado
    } else {
      console.error('Token no encontrado en el localStorage');
    }
  }, []);

  useEffect(() => {
    if (userData) {
      reset({
        username: userData.username,
        email: userData.email,
        street: userData.street,
        number: userData.number,
        colony: userData.colony,
        cpnum: userData.cpnum,
        phone: userData.phone,
        photo: userData.photo,
      });
    }
  }, [userData, reset]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const onSubmit = async (data) => {
    if (!token) {
      console.error('Token no encontrado');
      return;
    }

    const formUser = new FormData();
    formUser.append('username', data.username || userData.username);
    formUser.append('email', data.email || userData.email);
    formUser.append('street', data.street || userData.street);
    formUser.append('number', data.number || userData.number);
    formUser.append('colony', data.colony || userData.colony);
    formUser.append('cpnum', data.cpnum || userData.cpnum);
    formUser.append('phone', data.phone || userData.phone);

    if (selectedFile) {
      formUser.append('photo', selectedFile);
    }
    try {
      const response = await axios.put(
        'http://localhost:5000/api/profile',
        formUser,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      // Actualizar los datos del usuario con la respuesta del servidor
      setIsOpen(false);
      console.log('Respuesta del servidor:', response.data);
    } catch (error) {
      console.error('Error al actualizar los datos del usuario:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative justify-center w-full ">
          <div className="relative bg-neutral-200 rounded-lg py-12 shadow dark:bg-gray-500 bg-opacity-70">
            <div className="flex items-center justify-center p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <form className="bg-white w-[80%] lg:max-w-[1000px] p-5 rounded-xl">
                <div className="flex flex-row">
                  <button
                    type="button"
                    className=" text-amber-500 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    <img
                      src="/icons/close.svg"
                      alt="Cerrar"
                      className="w-5 h-5"
                    />
                  </button>
                </div>

                <p className="text-[16px] font-semibold text-gray-500 pb-[24px]">
                  Modificación de datos:
                </p>
                <p className="text-[20px] font-bold text-gray-500 pb-[12px] ">
                  Nombre Completo
                </p>
                <input
                  type="text"
                  {...register('username')}
                  defaultValue={userData.username}
                  placeholder="Nombre de usuario"
                  className="w-full px-4 py-2 rounded-md border border-gray-500 my-2"
                ></input>
                <p className="text-[20px] font-bold text-gray-500 pb-[12px] ">
                  Correo electronico
                </p>
                <input
                  type="text"
                  {...register('email')}
                  defaultValue={userData.email}
                  placeholder="Correo electronico"
                  className="w-full px-4 py-2 rounded-md border border-gray-500 my-2"
                ></input>
                <p className="text-[20px] font-bold text-gray-500 pb-[12px]">
                  Teléfono
                </p>
                <input
                  type="text"
                  {...register('phone')}
                  defaultValue={userData.phone}
                  placeholder="Numero telefonico"
                  className="w-full px-4 py-2 rounded-md border border-gray-500 my-2"
                  autoFocus
                ></input>
                <p className="text-[20px] font-bold text-gray-500 pb-[12px]">
                  Dirección
                </p>
                <div className="flex flex-row gap-4">
                  <input
                    type="text"
                    {...register('street')}
                    defaultValue={userData.street}
                    placeholder="Calle"
                    className="w-full px-4 py-2 rounded-md border border-gray-500 my-2"
                  ></input>
                  <input
                    type="text"
                    {...register('number')}
                    defaultValue={userData.number}
                    placeholder="# exteriror"
                    className="w-full px-4 py-2 rounded-md border border-gray-500 my-2"
                  ></input>
                </div>
                <div className="flex flex-row gap-4">
                  <input
                    type="text"
                    {...register('colony')}
                    defaultValue={userData.colony}
                    placeholder="Colonia"
                    className="w-full px-4 py-2 rounded-md border border-gray-500 my-2"
                  ></input>
                  <input
                    type="text"
                    {...register('cpnum')}
                    defaultValue={userData.cpnum}
                    placeholder="CP"
                    className="w-full px-4 py-2 rounded-md border border-gray-500 my-2"
                  ></input>
                </div>
                <p className="text-[20px] font-bold text-gray-500 pb-[12px]">
                  Imagen
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="border border-gray-700 bg-gray-500 rounded-lg px-2 py-2 text-white font-bold"
                    onClick={handleButtonClick}
                  >
                    Selecciona un archivo
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <p className="text-[20px] font-bold text-gray-600 pl-[20px]">
                    {selectedFile
                      ? selectedFile.name
                      : 'NO HAY ARCHIVO SELECCIONADO'}
                  </p>
                </div>
                <div className="flex justify-center pt-[12px]">
                  <button
                    className="border border-amber-700 bg-amber-500 text-[20px] font-bold text-white px-5 py-2 rounded-full w-[300px]"
                    //onClick={state.user}
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default UpdateUser;
