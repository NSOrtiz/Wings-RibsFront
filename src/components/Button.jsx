import React from 'react';

const Boton = ({ texto, onClick }) => {
  return (
    <button
      id="ubuntu-bold"
      className="bg-amber-500 hover:bg-amber-600 text-white text-[12px] py-[8px] px-[16px] rounded-[8px]"
      onClick={onClick}
    >
      {texto}
    </button>
  );
};

export default Boton;
