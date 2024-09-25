import React from 'react';
import DishData from './DishData';
import { useState } from 'react';
import Boton from './Button';

function Counter() {
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <section className="flex flex-row items-center border-2 border-amber-500 px-[4px] rounded-[8px]">
      <button onClick={handleIncrement}>
        <img className="w-[20px] h-[20px]" src="/icons/add.svg" alt="Add" />
      </button>
      <p className="mx-4">{count}</p>
      <button onClick={handleDecrement}>
        <img
          className="w-[20px] h-[20px]"
          src="/icons/remove.svg"
          alt="Remove"
        />
      </button>
    </section>
  );
}

export default function Cart() {
  return (
    <section className="w1-cart w2-cart h-fit flex flex-col justify-center items-center gap-[28px] border-[1px] border-amber-600 bg-white shadow-sm rounded-b-[16px]">
      <span className="w-full h-fit flex flex-row justify-center items-center gap-2 border-b-[1px] border-amber-600">
        <img className="w-[40px] h-[40px]" src="/icons/shopping.svg" alt="" />
        <h2 id="ubuntu-bold" className="text-[36px] text-amber-600">
          Wings & Ribs
        </h2>
      </span>
      <div>
        <DishData />
      </div>
      <div className=" w-full flex flex-row justify-between px-[16px]">
        <Boton
          texto="Eliminar"
          onClick={() => handleClick('Has hecho clic en Comprar ahora')}
        />
        <Counter />
      </div>
      <div className="w-full flex flex-col px-[16px] pb-[16px] gap-2">
        <span className="flex flex-row justify-between">
          <p>Servicio</p>
          <p>$20</p>
        </span>
        <span className="flex flex-row justify-between">
          <p>Total</p>
          <p>$220</p>
        </span>
        <Boton
          texto="Pagar"
          onClick={() => handleClick('Has hecho clic en Comprar ahora')}
        />
      </div>
    </section>
  );
}
