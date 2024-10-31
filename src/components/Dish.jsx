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
  qty,
}) {
  const [count, setCount] = useState(qty);
  const [prevTotal, setPrevTotal] = useState(newprice * qty);

  useEffect(() => {
    setCount(qty);
  }, [qty]);
  useEffect(() => {
    onTotalChange((newprice * qty) / 2);
    setPrevTotal(newprice * qty);
  }, []);

  useEffect(() => {
    onTotalChange(newprice * count - prevTotal);
    setPrevTotal(newprice * count);
  }, [count, newprice, prevTotal, onTotalChange]);

  const updateLocalStorage = (newQuantity) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.item === item
    );

    if (existingItemIndex !== -1) {
      if (newQuantity <= 0) {
        cart.splice(existingItemIndex, 1); // Elimina el ítem si la cantidad es 0
      } else {
        cart[existingItemIndex].qty = newQuantity; // Actualiza la cantidad si no es 0
      }
    } else if (newQuantity > 0) {
      // Agrega el ítem solo si la cantidad es mayor a 0
      cart.push({ item, photo, price, discount, qty: newQuantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Actualización en localStorage', cart);
  };

  const handleIncrement = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      updateLocalStorage(newCount);
      return newCount;
    });
  };

  const handleDecrement = () => {
    setCount((prevCount) => {
      const newCount = prevCount - 1;
      if (newCount <= 0) {
        updateLocalStorage(0);
        return 0;
      } else {
        updateLocalStorage(newCount);
        return newCount;
      }
    });
  };

  const handleDelete = () => {
    setCount(0);
    updateLocalStorage(0); // Llama a updateLocalStorage con cantidad 0 para eliminar
    console.log('El ítem ha sido eliminado del carrito');
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
        <EliminarBtn texto="Eliminar" onClick={handleDelete} />
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
