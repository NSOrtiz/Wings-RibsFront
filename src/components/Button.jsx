import React from 'react';

export function Boton({ texto, onClick }) {
  return (
    <button
      id="ubuntu-bold"
      className="bg-amber-500 hover:bg-amber-600 text-white text-[12px] py-[8px] px-[16px] rounded-[8px]"
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
      className="flex flex-row justify-between items-center bg-amber-500 hover:bg-amber-600 text-white text-[20px] py-[8px] px-[16px] rounded-[8px]"
      onClick={onClick}
    >
      <img className="w-[24px] h-[24px]" src={icono} alt="pay" />
      {texto}
      <img className="w-[20px] h-[20px]" src="/icons/arrow.svg" alt="arrow" />
    </button>
  );
}
