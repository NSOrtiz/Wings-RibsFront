import React, { useState, useEffect } from 'react';
import { EliminarBtn } from './Button';

function Counter({ count, handleIncrement, handleDecrement }) {
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

export default function Dish({
  photo,
  item,
  description,
  price,
  newprice,
  discount,
  onTotalChange,
}) {
  const [count, setCount] = useState(1);
  const [prevTotal, setPrevTotal] = useState(newprice);

  useEffect(() => {
    onTotalChange(newprice / 2); // Sumar el precio inicial al total
    setPrevTotal(newprice / 2); // Guardar el total inicial como valor previo
  }, []); // Solo ejecuta al montar el componente

  // Actualizar el total cuando el count cambie
  useEffect(() => {
    // Restar el valor anterior y agregar el nuevo
    onTotalChange(newprice * count - prevTotal);
    setPrevTotal(newprice * count);
  }, [count, newprice, prevTotal, onTotalChange]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleClick = (message) => {
    console.log(message);
  };

  return (
    <section className="w-full py-[4px] flex flex-col gap-[8px]">
      <div className="w-full h-fit flex flex-row gap-[16px] justify-start">
        <img
          src={photo}
          alt={item}
          className="w-[70px] h-[70px] object-cover relative rounded-[16px]"
        />
        <div>
          <p id="ubuntu-medium" className="text-neutral-950 text-[16px]">
            {item}
          </p>
          <p id="ubuntu-regular" className="text-neutral-800 text-[12px]">
            {description}
          </p>
          <div className="w-full flex">
            {discount !== 0 ? (
              <span className="w-full flex flex-row gap-1 items-center">
                <p id="ubuntu-bold" className="text-[12px] text-neutral-800">
                  $
                </p>
                <p id="ubuntu-bold" className="text-[16px] text-neutral-800">
                  {newprice}
                </p>
                <p id="ubuntu-bold" className="text-[12px] text-neutral-800">
                  mxn
                </p>
                <p
                  id="ubuntu-regular"
                  className="text-[12px] text-neutral-500 line-through "
                >
                  ${price}mxn
                </p>
              </span>
            ) : (
              <span className="w-full flex flex-row gap-1 items-center">
                <p id="ubuntu-bold" className="text-[12px] text-neutral-800">
                  $
                </p>
                <p id="ubuntu-bold" className="text-[20px] text-neutral-800">
                  {price}
                </p>
                <p id="ubuntu-bold" className="text-[12px] text-neutral-800">
                  mxn
                </p>
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between ">
        <EliminarBtn
          texto="Eliminar"
          onClick={() => handleClick('Has hecho clic en Eliminar')}
        />
        <Counter
          count={count}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      </div>
      <div className="flex flex-row justify-end items-center gap-1 pb-4 border-b-[1px] border-amber-500">
        <p id="ubuntu-regular" className="text-[12px] text-neutral-500">
          {count} {item} x
        </p>
        <p id="ubuntu-medium" className="text-[16px] text-neutral-800">
          MX${newprice * count}
        </p>
      </div>
    </section>
  );
}
