import React from 'react';

export function Boton({ texto, onClick }) {
  return (
    <button
      id="ubuntu-medium"
      className="bg-amber-500 hover:bg-amber-600 text-white text-[16px] py-[8px] px-[16px] rounded-[8px]"
      onClick={onClick}
    >
      {texto}
    </button>
  );
}

export function EliminarBtn({ texto, onClick }) {
  return (
    <button
      id="ubuntu-bold"
      className="flex flex-row justify-center items-center gap-2 border-b-[1px] text-amber-500 border-amber-500 hover:bg-amber-600 hover:text-neutral-100 text-[16px] py-[8px] px-[16px] hover:rounded-[8px]"
      onClick={onClick}
    >
      <img className="w-[20px] h-[20px]" src="/icons/delete.svg" alt="delete" />
      {texto}
    </button>
  );
}

export function IconBtn({ icono, texto, onClick }) {
  return (
    <button
      id="ubuntu-bold"
      className="flex flex-row justify-between items-center bg-amber-500 hover:shadow-md hover:bg-amber-600 text-white text-[20px] py-[8px] px-[16px] rounded-[8px]"
      onClick={onClick}
    >
      <img className="w-[24px] h-[24px]" src={icono} alt="pay" />
      {texto}
      <img className="w-[20px] h-[20px]" src="/icons/arrow.svg" alt="arrow" />
    </button>
  );
}

export function IconBtnWhite({ icono, texto, onClick }) {
  return (
    <button
      id="ubuntu-bold"
      className="flex flex-row justify-between items-center bg-white border-[1px] hover:shadow-md border-amber-500 hover:bg-amber-600 text-neutral-900 text-[20px] py-[8px] px-[16px] rounded-[8px]"
      onClick={onClick}
    >
      <img className="w-[24px] h-[24px]" src={icono} alt="pay" />
      {texto}
      <img
        className="w-[20px] h-[20px]"
        src="/icons/chevron-down.svg"
        alt="arrow"
      />
    </button>
  );
}

export function Search() {
  return (
    <div className="relative flex items-center z-10">
      {/*pantallas pequeñas */}
      <img
        src="/icons/magnifier.svg"
        alt="buscador"
        className="hidden md:hidden w-[20px] h-[20px] cursor-pointer "
      />
      {/*pantallas medianas */}

      <img
        src="/icons/magnifier.svg"
        alt="buscador"
        className="hidden md:block lg:hidden w-[20px] h-[20px] cursor-pointer"
      />
      {/*pantallas grandes */}
      <input
        type="text"
        placeholder="Buscar"
        className="hidden lg:block border border-gray-300 rounded-md pl-10 pr-2 py-1 focus:outline-none focus:border-amber-500 w-[200px]"
      />
      <img
        src="/icons/magnifier.svg"
        alt="buscador"
        className="absolute left-3 w-5 h-5 text-gray-500 hidden lg:block"
      />
    </div>
  );
}

export function PaginationComponent() {
  return (
    <div className="flex flex-col mt-4">
      <div className="flex justify-end items-center gap-4 p-2">
        <span className="font-Roboto text-[12px] font-normal text-[#D77408]">
          Páginas
        </span>
        <div className="flex items-center gap-2">
          <span className="font-Roboto text-[12px] font-normal text-[#D77408]">
            10
          </span>
          <img src="/icons/Flechadepaginacion.svg" alt="Flecha de paginación" />
        </div>
        <span className="font-Roboto text-[12px] font-normal text-[#D77408]">
          1-5 de 13
        </span>
        <div className="flex gap-2">
          <img
            src="/icons/flechaizquierdapaginacion.svg"
            alt="Flecha izquierda"
          />
          <img src="/icons/flechaderechapaginacion.svg" alt="Flecha derecha" />
        </div>
      </div>
    </div>
  );
}
