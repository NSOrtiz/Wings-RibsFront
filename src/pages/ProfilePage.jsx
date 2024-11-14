import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { NavBar } from '../components/NavBar';
import UpdateUser from '../components/UpdateModal';
import logoPencil from '../assets/edit_logo.png';

export default function Profile() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Imprime todas las cookies disponibles
    const tokenFromLocalStorage = localStorage.getItem('token');
    console.log('Token desde js-cookie:', tokenFromLocalStorage);

    if (tokenFromLocalStorage) {
      setToken(tokenFromLocalStorage); // Establecer el token en el estado
    } else {
      console.error('Token no encontrado en las cookies usando js-cookie.');
    }

    const tokenFromCookies = Cookies.get('token');
    if (tokenFromCookies) {
      setToken(tokenFromCookies); // Si el token está en cookies, se establece también
    }

    // Ahora verificamos las cookies manualmente usando document.cookie
    const cookies = document.cookie;
    console.log('Cookies del documento:', cookies);

    // Si el token está presente, podemos intentar obtener los datos del usuario
    console.log(token);
    if (token) {
      axios
        .get('http://localhost:5000/api/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          setUserData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error al obtener los datos del usuario:', error);
          setLoading(false);
        });
    } else {
      console.error('No token found, user is not authenticated.');
      setLoading(false);
    }
  }, [token]); // El efecto depende del token

  // Si el token no ha llegado o la solicitud está en progreso, mostramos un estado de carga
  if (loading) {
    return <div>Cargando...</div>;
  }

  const userPhoto = userData?.photo || '/icons/profile.svg';

  return (
    <div>
      <NavBar />
      <div className="font-[Ubuntu] font-bold bg-neutral-100 md:p-[56px] lg:p-[80px]">
        <div className="flex flex-row-reverse w-full">
          <button
            type="button"
            className="hover:bg-gray-300 rounded-sm"
            onClick={() => setIsOpenModal(!isOpenModal)}
          >
            <img src={logoPencil} />
          </button>
        </div>

        {isOpenModal && (
          <UpdateUser
            isOpen={isOpenModal}
            setIsOpen={setIsOpenModal}
            userData={userData}
          />
        )}

        <div className="grid grid-cols-2 grid-row-4 gap-[16px] p-[16px] pt-10 w-auto border-2 border-gray-100 border-b-zinc-700 md:grid-cols-3 grid-rows-4 lg:grid-cols-5 lg:grid-rows-4 lg:p-[8px] lg:pt-8">
          <div className="col-span-2 grid place-content-center p-2 md:col-span-1 lg:col-span-1 row-[1/5]">
            <img
              className="rounded-full h-[120px] w-[120px]"
              src={userPhoto}
              alt="foto-perfil"
            />
          </div>

          <div className="col-start-1 col-span-2 font-bold text-[20px] md:col-start-2 md:text-[28px] lg:col-span-2 lg:text-[28px]">
            <p>{userData?.username}</p>
          </div>
          <div className="col-start-1 text-[16px] md:col-start-2 lg:col-start-2 ">
            <p className="text-lg text-gray-500 md:text-[20px] lg:text-[20px]">
              Correo electrónico:
            </p>
          </div>

          <div className="col-start-2 text-[16px] md:col-start-3 lg:col-start-3">
            <p className="text-lg text-gray-500 text-right md:text-[20px] lg:text-[20px]">
              {userData?.email}
            </p>
          </div>
          <div className="col-start-1  text-[16px] md:col-start-2 lg:col-start-2 ">
            <p className=" text-lg text-gray-500 md:text-[20px] lg:text-[20px]">
              Dirección:
            </p>
          </div>
          <div className="col-start-2  text-[16px] md:col-start-3 lg:col-start-3">
            <p className="text-lg text-gray-500 text-right md:text-[20px] lg:text-[20px]">
              {userData?.street
                ? `${userData.street} #${userData.number}, ${userData.colony}, ${userData.cpnum}`
                : 'No disponible'}
            </p>
          </div>
          <div className="col-start-1 text-[16px] md:col-start-2 lg:col-start-2">
            <p className=" text-lg text-gray-500 md:text-[20px] lg:text-[20px]">
              Teléfono:
            </p>
          </div>
          <div className="col-start-2 text-[16px] md:col-start-3 lg:col-start-3">
            <p className="text-lg text-gray-500 text-right md:text-[20px] lg:text-[20px]">
              {userData?.phone || 'No disponible'}
            </p>
          </div>

          <div className="col-start-1 col-span-2 grid place-content-center md:col-span-3 lg:col-start-4 lg:row-start-1 lg:row-span-4">
            <button className="border border-amber-500 rounded-2xl p-[12px] w-70 bg-amber-500 text-white lg:col-start-4 col-end-5 lg:w-96">
              <p className="text-center text-[14px] md:text-[20px] lg:text-[20px]">
                Usted tiene un total de 200 puntos
              </p>
            </button>
          </div>
        </div>

        {/* Métodos de pago */}
        <div className="grid grid-cols-2 grid-rows-3 gap-[16px] p-[16px] w-auto place-content-center h-auto">
          <div className="col-span-2 p-2 col-start-1">
            <p className="text-[20px] text-amber-500">Métodos de pago</p>
          </div>
          <div className="col-start-1 grid place-content-center grid-cols-2 p-2 w-28 pl-6">
            <img
              id="logo-sub"
              src="https://img.icons8.com/?size=100&id=WZ9htrr1RK9U&format=png&color=000000"
              alt="credit-card"
            />
            <p className="text-gray-500 text-lg">Tarjeta****</p>
          </div>
          <div className="col-start-1 grid-cols-2 grid place-content-center p-2 w-28 pl-6">
            <img
              id="logo-sub"
              src="https://img.icons8.com/?size=100&id=EnKUU3XbFvh4&format=png&color=000000"
              alt="money"
            />
            <p className="text-gray-500 text-lg">Efectivo</p>
          </div>
          <div className="col-start-1 col-span-2 grid place-content-start p-2">
            <button
              className="rounded-full w-48 p-[4px] bg-amber-500 text-white"
              type="submit"
            >
              <p id="btn-sub">Agregar método de pago</p>
            </button>
          </div>
        </div>

        {/* Historial de pagos */}
        <div className="grid grid-cols-2 grid-rows-3 gap-[16px] p-[16px] w-auto place-content-center h-auto">
          <div className="col-span-2 p-2 col-start-1">
            <p className="text-[20px] text-amber-500">Ver historial de pago</p>
          </div>
          <div className="col-start-1 grid place-content-center grid-cols-2 p-2 w-28 pl-6">
            <img
              id="logo-sub"
              src="https://img.icons8.com/?size=100&id=HuKquu5I2bAZ&format=png&color=000000"
              alt="bolsa-compra"
            />
            <p className="text-gray-500 text-lg">Compra1</p>
          </div>
          <div className="col-start-1 grid-cols-2 grid place-content-center p-2 w-28 pl-6">
            <img
              id="logo-sub"
              src="https://img.icons8.com/?size=100&id=HuKquu5I2bAZ&format=png&color=000000"
              alt="bolsa-compra"
            />
            <p className="text-gray-500 text-lg">Compra2</p>
          </div>
          <div className="col-start-1 col-span-2 grid place-content-start p-2">
            <button
              className="rounded-full w-20 p-[4px] bg-amber-500 text-white"
              type="submit"
            >
              <p id="btn-sub">Detalles</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
