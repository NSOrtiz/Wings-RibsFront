import React from 'react';
import DishData from './DishData';
import { useState } from 'react';
import { Boton, IconBtn } from './Button';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const navigate = useNavigate();

  const handleClick = (message) => {
    alert(message);
    navigate('/confirmacion-com');
  };

  const [total, setTotal] = useState(0);

  const handleUpdateTotal = (priceChange) => {
    setTotal((prevTotal) => prevTotal + priceChange);
  };

  return (
    <section className="w1-cart w2-cart h-fit flex flex-col justify-center items-center gap-[28px] border-[1px] border-amber-600 bg-white shadow-sm rounded-b-[16px]">
      <span className="w-full h-fit flex flex-row justify-start items-center gap-2 border-b-[1px] border-amber-600 px-[16px]">
        <img className="w-[40px] h-[40px]" src="/icons/shopping.svg" alt="" />
        <h2 id="ubuntu-bold" className="text-[36px] text-amber-600">
          Wings & Ribs
        </h2>
      </span>
      <section className="w-full px-[16px]">
        <div className="w-full">
          <DishData onUpdateTotal={handleUpdateTotal} />
        </div>
      </section>
      <div
        id="ubuntu-bold"
        className="w-full flex flex-col px-[16px] pb-[16px] gap-4"
      >
        <span className="flex flex-row justify-between">
          <p className="text-neutral-700 text-[16px]">Servicio</p>
          <p className="text-neutral-700 text-[16px]">$20</p>
        </span>
        <span className="flex flex-row justify-between pb-2">
          <p className="text-amber-600 text-[20px]">Total</p>
          <p className="text-amber-600 text-[20px]">${total + 20}</p>
        </span>
        <IconBtn
          icono="/icons/payments.svg"
          texto="Pagar"
          onClick={() => handleClick('Confirmacionde compra')}
        />
      </div>
    </section>
  );
}
