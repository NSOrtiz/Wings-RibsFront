import NavBar from '../components/NavBar';
import React from 'react';

export default function ProfilePage() {
  return (
    <div>
      <NavBar />
      <div className="p-24 bg-neutral-100 ">
        <div className=" grid grid-cols-5 gap-2 place-content-center h-48 w-full border-2 border-gray-100 border-b-zinc-700 ">
          <div className="row-[1/5] grid place-content-center">
            <img
              className="rounded-full h-[120px] w-[120px]"
              src="https://imgs.search.brave.com/sLsAQuzAidPjJqdy5e5qEQdq2Rhyayj6Nqwej2eokTo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2xl/YWd1ZW9mbGVnZW5k/cy9pbWFnZXMvOC84/OC9Pcm5uX09yaWdp/bmFsQ2VudGVyZWQu/anBnL3JldmlzaW9u/L2xhdGVzdD9jYj0y/MDE4MDQxNDIwMzUw/Mg"
              alt="foto-perfil"
            />
          </div>

          <div className="col-span-2 font-bold">
            <p id="text1">Nombre de usuario</p>
          </div>
          <div className="row-start-2 ">
            <p id="text2">Correo electrónico:</p>
          </div>

          <div className="row-start-2 ">
            <p id="text3">Email</p>
          </div>
          <div className="row-start-3 ">
            <p id="text2">DIrección:</p>
          </div>
          <div className="row-start-3 ">
            <p id="text3">Address</p>
          </div>
          <div className="row-start-4 ">
            <p id="text2">Teléfono:</p>
          </div>
          <div className="row-start-4 ">
            <p id="text3">Phone</p>
          </div>

          <div className="row-[1/5] grid place-content-center col-span-2">
            <button className="rounded-md w-96 p-0 bg-amber-500 text-white">
              <p className="text-center font-Ubuntu font-normal text-[20px]">
                Usted tiene un total de 200 puntos
              </p>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 place-content-center h-80">
          <div className="col-span-2 p-2">
            <p id="text5">Metodos de pago</p>
          </div>
          <div className="row-start-4 grid place-content-center p-2">
            <img
              id="logo-sub"
              src="https://img.icons8.com/?size=100&id=WZ9htrr1RK9U&format=png&color=000000"
              alt="credit-card"
            ></img>
          </div>
          <div className="row-start-4 p-2">
            <p id="t-sub">Tarjeta****</p>
          </div>
          <div className="row-start-5 grid place-content-center p-2">
            <img
              id="logo-sub"
              src="https://img.icons8.com/?size=100&id=EnKUU3XbFvh4&format=png&color=000000"
              alt="money"
            />
          </div>
          <div className="row-start-5 p-2">
            <p id="t-sub">Efectivo</p>
          </div>
          <div className="row-start-6 p-2">
            <button
              className="rounded-xl w-52 p-3 bg-amber-500 text-white"
              type="submit"
            >
              <p id="btn-sub">Agregar método de pago</p>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 place-content-center h-50">
          <div className="col-span-4 p-2">
            <p id="text5">Ver historial de compras</p>
          </div>
          <div className="row-start-4 grid place-content-center p-2">
            <img
              id="logo-sub"
              src="https://img.icons8.com/?size=100&id=HuKquu5I2bAZ&format=png&color=000000"
              alt="bolsa-compra"
            ></img>
          </div>
          <div className="row-start-4  col-span-2 p-2">
            <p id="t-sub">Compra 1</p>
          </div>
          <div className="row-start-5 grid place-content-center p-2">
            <img
              id="logo-sub"
              src="https://img.icons8.com/?size=100&id=HuKquu5I2bAZ&format=png&color=000000"
              alt="bolsa-compra"
            ></img>
          </div>
          <div className="row-start-5 col-span-2 p-2">
            <p id="t-sub">Compra 2</p>
          </div>
          <div className="row-start-6 p-2">
            <button
              className="rounded-2xl w-32 p-2 bg-amber-500 text-white"
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
