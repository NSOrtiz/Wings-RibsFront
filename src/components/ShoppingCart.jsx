import React from 'react';
import DishData from './DishData';
import { useState } from 'react';
import { Boton, IconBtn } from './Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Cart() {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);

  //datos del carrito
  const getCartData = () => JSON.parse(localStorage.getItem('cart')) || [];

  const handleUpdateTotal = (priceChange) => {
    setTotal((prevTotal) => prevTotal + priceChange);
  };

  const handleOrderSubmit = async () => {
    console.log(getCartData());
    navigate('/confirmacion-com');
    /*const cartItems = getCartData();
    const orderData = {
      items: cartItems,
      total: total + 20, // Incluye el cargo de servicio
      details: 'Detalles adicionales del pedido',
      client: {
        nameuser: 'nombre',
        address: 'domicilio',
        cpnum: 12345,
        phone: 1234567890,
      },
      subsidiary
    };

    console.log(orderData);

    try {
      const response = await axios.post(
        'http://localhost:5000/api/orders',
        orderData,

        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Respuesta del servidor:', response);

      if (response.status === 201) {
        const data = response.data;
        alert(`Pedido confirmado: #${data.orderNumber}`);
        //localStorage.removeItem('cart');  //resetea localStorage
        navigate('/confirmacion-com');
      } else {
        throw new Error('Error al confirmar el pedido');
      }
    } catch (error) {
      console.error(
        'Error al enviar el pedido:',
        error.response ? error.response.data : error
      );
    }*/
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
          onClick={handleOrderSubmit}
        />
      </div>
    </section>
  );
}
