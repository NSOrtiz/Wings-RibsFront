import React from 'react';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { Boton } from './Button';

function Counter({ count, onIncrement, onDecrement }) {
  return (
    <section className="flex flex-row items-center border-2 border-amber-500 px-[4px] rounded-[8px]">
      <button onClick={onDecrement}>
        <img
          className="w-[20px] h-[20px]"
          src="/icons/remove.svg"
          alt="Remove"
        />
      </button>
      <p className="mx-4">{count}</p>
      <button onClick={onIncrement}>
        <img className="w-[20px] h-[20px]" src="/icons/add.svg" alt="Add" />
      </button>
    </section>
  );
}

export function CardsMenu(props) {
  const [quantity, setQuantity] = useState(0);
  const [isBuyButtonDisabled, setBuyButtonDisabled] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find((item) => item.item === props.item);
    if (existingItem) {
      setQuantity(existingItem.qty);
      setBuyButtonDisabled(existingItem.qty >= 1);
    }
  }, [props.item]);

  const updateLocalStorage = (newQuantity) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = cart.findIndex(
      (item) => item.item === props.item
    );

    if (existingItemIndex !== -1) {
      if (newQuantity <= 0) {
        cart.splice(existingItemIndex, 1);
      } else {
        cart[existingItemIndex].qty = newQuantity;
      }
    } else if (newQuantity > 0) {
      const itemData = {
        item: props.item,
        photo: props.photo,
        price: props.price,
        discount: props.discount,
        qty: newQuantity,
      };
      cart.push(itemData); // Agregar nuevo artículo
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Actualización en localStorage', cart);
  };

  const handleClick = () => {
    if (isBuyButtonDisabled) return;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.item === props.item
    );

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].qty = quantity;
    } else {
      const itemData = {
        item: props.item,
        photo: props.photo,
        price: props.price,
        discount: props.discount,
        qty: quantity === 0 ? 1 : quantity,
      };
      cart.push(itemData);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('datos en localStorage', cart);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      updateLocalStorage(newQuantity);
      setBuyButtonDisabled(newQuantity >= 1);
      return newQuantity;
    });
  };
  const handleDecrement = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = Math.max(prevQuantity - 1, 0);
      updateLocalStorage(newQuantity);
      setBuyButtonDisabled(newQuantity >= 1);
      return newQuantity;
    });
  };

  return (
    <article className="w-[280px] rounded-[16px] bg-white overflow-hidden flex flex-col justify-between border-[1px] border-neutral-200">
      <div className=" w-full flex flex-col relative justify-start gap-[12px] ">
        <img
          src={props.photo}
          alt=""
          className={clsx(
            'w-full h-[164px] object-cover relative cursor-pointer'
          )}
        />
        {props.discount != 0 && (
          <span
            id="ubuntu-bold"
            className="absolute top-4 right-4 bg-red-700 text-white px-[16px] py-[4px] text-[12px] rounded-full "
          >
            %{props.discount} Off
          </span>
        )}
        <div className="w-full flex flex-col gap-[16px] px-[16px] ">
          <div>
            <span>
              <h1
                id="ubuntu-bold"
                className="text-[20px] text-amber-600 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap"
              >
                {props.item}
              </h1>
              <div className="w-full flex">
                {props.discount != 0 && (
                  <span className=" w-full flex flex-row gap-1 items-center">
                    <p
                      id="ubuntu-bold"
                      className="text-[12px] text-neutral-800"
                    >
                      $
                    </p>
                    <p
                      id="ubuntu-bold"
                      className="text-[20px] text-neutral-800"
                    >
                      {props.newprice()}
                    </p>
                    <p
                      id="ubuntu-bold"
                      className="text-[12px] text-neutral-800"
                    >
                      mxn
                    </p>
                    <p
                      id="ubuntu-regular"
                      className="text-[12px] text-neutral-500 line-through "
                    >
                      ${props.price}mxn
                    </p>
                  </span>
                )}
                {props.discount === 0 && (
                  <span className=" w-full flex flex-row gap-1 items-center">
                    <p
                      id="ubuntu-bold"
                      className="text-[12px] text-neutral-800"
                    >
                      $
                    </p>
                    <p
                      id="ubuntu-bold"
                      className="text-[20px] text-neutral-800"
                    >
                      {props.price}
                    </p>
                    <p
                      id="ubuntu-bold"
                      className="text-[12px] text-neutral-800"
                    >
                      mxn
                    </p>
                  </span>
                )}
              </div>
            </span>
          </div>
          <div className="flex flex-row justify-around">
            <Counter
              count={quantity}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
            <Boton
              texto="Comprar ahora"
              onClick={handleClick}
              disabled={isBuyButtonDisabled}
            />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center bg-amber-100 ">
          <p id="Ubuntu-regular" className="text-[12px] text-amber-700">
            Detalles del producto
          </p>
          <img
            className="w-[14px] h-[14px]"
            src="/icons/arrow_forward.svg"
            alt=""
          />
        </div>
      </div>
    </article>
  );
}

export function CardsPromo(props) {
  return (
    <article className="w-[280px] rounded-[16px] bg-white overflow-hidden flex flex-col justify-between border-[1px] border-neutral-200">
      <div className=" w-full flex flex-col relative justify-start gap-[12px] ">
        <img
          src={props.photo}
          alt=""
          className={clsx(
            'w-full h-[164px] object-cover relative cursor-pointer'
          )}
        />
        {props.discount != 0 && (
          <span
            id="ubuntu-bold"
            className="absolute top-4 right-4 bg-red-700 text-white px-[16px] py-[4px] text-[12px] rounded-full "
          >
            %{props.discount} Off
          </span>
        )}
        <div className="w-full flex flex-col gap-[16px] px-[16px] ">
          <div className=" w-full flex flex-row gap-1 items-center">
            <img
              className="w-[14px] h-[14px]"
              src="/icons/storefront.svg"
              alt=""
            />
            <p id="ubuntu-regular" className="text-[12px] text-neutral-500">
              Solo en sucursal {props.subsidiary}
            </p>
          </div>
          <div>
            <span>
              <h1
                id="ubuntu-bold"
                className="text-[20px] text-amber-600 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap"
              >
                {props.item}
              </h1>
              <div className="w-full flex pb-[16px]">
                {props.discount != 0 && (
                  <span className=" w-full flex flex-row gap-1 items-center">
                    <p
                      id="ubuntu-bold"
                      className="text-[12px] text-neutral-800"
                    >
                      $
                    </p>
                    <p
                      id="ubuntu-bold"
                      className="text-[20px] text-neutral-800"
                    >
                      {props.newprice()}
                    </p>
                    <p
                      id="ubuntu-bold"
                      className="text-[12px] text-neutral-800"
                    >
                      mxn
                    </p>
                    <p
                      id="ubuntu-regular"
                      className="text-[12px] text-neutral-500 line-through "
                    >
                      ${props.price}mxn
                    </p>
                  </span>
                )}
                {props.discount === 0 && (
                  <span className=" w-full flex flex-row gap-1 items-center">
                    <p
                      id="ubuntu-bold"
                      className="text-[12px] text-neutral-800"
                    >
                      $
                    </p>
                    <p
                      id="ubuntu-bold"
                      className="text-[20px] text-neutral-800"
                    >
                      {props.price}
                    </p>
                    <p
                      id="ubuntu-bold"
                      className="text-[12px] text-neutral-800"
                    >
                      mxn
                    </p>
                  </span>
                )}
              </div>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
