import React, { useState } from 'react';
import { NavBar } from '../components/NavBar';
import DishData from '../components/DishData';
import { Boton, IconBtn, IconBtnWhite } from '../components/Button';
import { useNavigate } from 'react-router-dom';

export default function ResponsiveCart() {
  const [total, setTotal] = useState(0);

  const handleUpdateTotal = (priceChange) => {
    setTotal((prevTotal) => prevTotal + priceChange);
  };

  const navigate = useNavigate();

  const handleClick = (opcion) => {
    if (opcion === 'pagar') {
      navigate('/confirmacion-com');
    } else if (opcion === 'volver') {
      navigate('/home/menu');
    }
  };

  return (
    <main>
      <NavBar />
      <section>
        <div className="flex items-start justify-center min-h-screen bg-neutral-200 p-4 w-full max-w-full mx-auto">
          <div className=" p-6 max-w-7xl w-[450px] sm:w-[480px] md:w-[500px] lg:w-full">
            <span className="w-full h-fit flex flex-row justify-start items-center gap-2 border-b-[1px] border-amber-600 px-[16px]">
              <img
                className="w-[40px] h-[40px]"
                src="/icons/shopping.svg"
                alt=""
              />
              <h2 id="ubuntu-bold" className="text-[36px] text-amber-600">
                Wings & Ribs
              </h2>
            </span>
            <div className="flex flex-col lg:flex-row gap-4 pt-8">
              <div className="flex-1 flex flex-col">
                <section className="w-full px-[16px]">
                  <div className="w-full bg-white p-4 rounded-xl h-full">
                    <DishData onUpdateTotal={handleUpdateTotal} />
                  </div>
                </section>
              </div>

              <div className="flex-1 flex flex-col lg:mt-0 mt-4 justify-center">
                <div className="flex flex-col items-center ">
                  {' '}
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
                      <p className="text-amber-600 text-[20px]">
                        ${total + 20}
                      </p>
                    </span>
                    <IconBtn
                      icono="/icons/payments.svg"
                      texto="Pagar"
                      onClick={() => handleClick('pagar')}
                    />
                    <IconBtnWhite
                      icono="/icons/food_bank_black.svg"
                      texto="Volver a menu"
                      onClick={() => handleClick('volver')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
