import { useForm } from 'react-hook-form';
import { NavBar } from '../components/NavBar';
import { useState } from 'react';
import React from 'react';
import UpdateUser from '../components/UpdateModal';
/*import visaLogo from '../assets/visa-logo.png';
import paypalLogo from '../assets/paypal-logo.png';*/
import logoPencil from '../assets/edit_logo.png';

export default function MetodoDePago() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Aquí podrías manejar los datos del formulario, como enviarlos a un backend
  };

  return (
    <div>
      <NavBar />
      <div className="font-[Ubuntu] font-bold bg-neutral-100 md:p-[56px] lg:p-[80px]  ">
        <div className="flex flex-row-reverse w-full ">
          <button
            type="button"
            className="hover:bg-gray-300 rounded-sm"
            onClick={() => setIsOpenModal(!isOpenModal)}
          >
            <img src={logoPencil} />
          </button>
        </div>

        {isOpenModal && (
          <UpdateUser isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
        )}

        {/*<div style={{ visibility: isOpenModal ? 'visible' : 'hidden' }}>
          <UpdateUser />
        </div>*/}

        <div className="grid grid-cols-2 grid-row-4 gap-[16px] p-[16px] pt-10 w-auto border-2 border-gray-100 border-b-zinc-700 md:grid-cols-3 grid-rows-4 lg:grid-cols-5 lg:grid-rows-4 lg:p-[8px] lg:pt-8 ">
          <div className="col-span-2 grid place-content-center p-2 md:col-span-1 lg:col-span-1 row-[1/5]">
            <img
              className="rounded-full h-[120px] w-[120px]"
              src="https://imgs.search.brave.com/sLsAQuzAidPjJqdy5e5qEQdq2Rhyayj6Nqwej2eokTo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2xl/YWd1ZW9mbGVnZW5k/cy9pbWFnZXMvOC84/OC9Pcm5uX09yaWdp/bmFsQ2VudGVyZWQu/anBnL3JldmlzaW9u/L2xhdGVzdD9jYj0y/MDE4MDQxNDIwMzUw/Mg"
              alt="foto-perfil"
            />
          </div>

          <div className="col-start-1 col-span-2 font-bold text-[20px] md:col-start-2 md:text-[28px] lg:col-span-2 lg:text-[28px]">
            <p>Nombre de usuario</p>
          </div>
          <div className="col-start-1 text-[16px] md:col-start-2 lg:col-start-2 ">
            <p className="text-lg text-gray-500 md:text-[20px] lg:text-[20px]">
              Correo electrónico:
            </p>
          </div>

          <div className="col-start-2 text-[16px] md:col-start-3 lg:col-start-3">
            <p className="text-lg text-gray-500 text-right md:text-[20px] lg:text-[20px]">
              Email
            </p>
          </div>
          <div className="col-start-1  text-[16px] md:col-start-2 lg:col-start-2 ">
            <p className=" text-lg text-gray-500 md:text-[20px] lg:text-[20px]">
              DIrección:
            </p>
          </div>
          <div className="col-start-2  text-[16px] md:col-start-3 lg:col-start-3">
            <p className="text-lg text-gray-500 text-right md:text-[20px] lg:text-[20px]">
              Address
            </p>
          </div>
          <div className="col-start-1 text-[16px] md:col-start-2 lg:col-start-2">
            <p className=" text-lg text-gray-500 md:text-[20px] lg:text-[20px]">
              Teléfono:
            </p>
          </div>
          <div className="col-start-2 text-[16px] md:col-start-3 lg:col-start-3">
            <p className="text-lg text-gray-500 text-right md:text-[20px] lg:text-[20px]">
              Phone
            </p>
          </div>

          <div className="col-start-1 col-span-2 grid place-content-center md:col-span-3  lg:col-start-4 lg:row-start-1 lg:row-span-4">
            <button className="border border-amber-500 rounded-2xl p-[12px] w-70 bg-amber-500 text-white lg:col-start-4 col-end-5 lg:w-96">
              <p className="text-center  text-[14px] md:text-[20px] lg:text-[20px]">
                Usted tiene un total de 200 puntos
              </p>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-[16px] p-[16px] w-auto  place-content-center h-auto">
          <div className="col-span-2 p-2 col-start-1 ">
            <p className="text-[20px] text-amber-500">Metodos de pago</p>
          </div>
          <div className="col-start-1  grid place-content-center grid-cols-2 p-2 w-28 pl-6">
            <img
              id="logo-sub"
              src="https://img.icons8.com/?size=100&id=WZ9htrr1RK9U&format=png&color=000000"
              alt="credit-card"
            ></img>

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
              className=" rounded-full w-48 p-[4px] bg-amber-500 text-white"
              type="submit"
            >
              <p id="btn-sub">Agregar método de pago</p>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-3 gap-[16px] p-[16px] w-auto  place-content-center h-auto">
          <div className="col-span-2 p-2 col-start-1 ">
            <p className="text-[20px] text-amber-500">Ver historial de pago</p>
          </div>
          <div className="col-start-1 grid place-content-center grid-cols-2 p-2 w-28 pl-6">
            <img
              id="logo-sub"
              src="https://img.icons8.com/?size=100&id=HuKquu5I2bAZ&format=png&color=000000"
              alt="bolsa-compra"
            ></img>

            <p className="text-gray-500 text-lg">Compra1</p>
          </div>

          <div className="col-start-1 grid-cols-2 grid place-content-center p-2 w-28 pl-6">
            <img
              id="logo-sub"
              src="https://img.icons8.com/?size=100&id=HuKquu5I2bAZ&format=png&color=000000"
              alt="bolsa-compra"
            ></img>
            <p className="text-gray-500 text-lg">Compra2</p>
          </div>

          <div className="col-start-1 col-span-2 grid place-content-start p-2">
            <button
              className=" rounded-full w-20 p-[4px] bg-amber-500 text-white"
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
