import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LocalizadorSucursal() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home/menu');
  };
  return (
    <div
      id="filterhome"
      className="w-full flex flex-col justify-center items-center"
    >
      <div className="min-w-[500px] flex flex-col justify-center items-start">
        <div className="w-full flex flex-row justify-between items-center gap-4 ">
          <button className="flex py-2 w-full bg-amber-500 rounded-[12px] shadow border border-neutral-800 justify-center items-center text-white text-[12px] md:text-[16px] lg:text-[20px] font-bold font-['Ubuntu'] hover:shadow-md hover:bg-amber-400 hover:text-neutral-800 ">
            Entregar a Domicilio
          </button>
          <button className="flex py-2 w-full bg-neutral-300/60 rounded-[12px] shadow border border-neutral-800 justify-center items-center text-neutral-800 text-[12px] md:text-[16px] lg:text-[20px] font-bold font-['Ubuntu'] hover:shadow-md hover:bg-amber-400 hover:text-neutral-800 ">
            Recoger en tienda
          </button>
        </div>
        <div className="flex flex-col w-full justify-center items-center py-4 ">
          <div className="flex flex-row w-full gap-4 items-center">
            <label className="w-full flex items-start py-2">
              <input
                type="text"
                className="block w-full border border-neutral-500 rounded-md p-2 text-[12px] md:text-[16px] font-regular font-['Ubuntu']"
                placeholder="Ingrese su dirección"
              />
            </label>
            <button
              id="ubuntu-bold"
              className="bg-amber-500 hover:bg-amber-600 text-white text-[12px] md:text-[16px] py-2 px-[16px] rounded-md"
              onClick={() => handleClick()}
            >
              Localizar
            </button>
          </div>
          <div className="w-full flex flex-row justify-start gap-2 items-center hover:cursor-pointer">
            <img
              className="w-[20px] h-[20px] "
              src="/icons/navigate-outline.svg"
              alt="nav"
            />
            <p className="w-[237px] h-[23px] text-white text-base font-medium font-['Ubuntu']">
              Utiliza mi ubicación
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
