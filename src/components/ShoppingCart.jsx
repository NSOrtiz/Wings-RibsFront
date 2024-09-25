import React from 'react';
import DishData from './DishData';
import { useState } from 'react';
import { Boton, IconBtn } from './Button';

export default function Cart() {
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
          <DishData />
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
          <p className="text-amber-600 text-[20px]">$220</p>
        </span>
        <IconBtn
          icono="/icons/payments.svg"
          texto="Pagar"
          onClick={() => handleClick('Has hecho clic en Comprar ahora')}
        />
      </div>
    </section>
  );
}
