import React, { useState } from 'react';
import NavBar from '../components/NavBar';

function Confirmacioncom() {
  const [isVisible, setIsVisible] = useState(false);
  const handleIconClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <main>
      <NavBar />
      <section>

    <div className="flex items-center justify-center min-h-screen bg-neutral-200 p-4 w-full max-w-full mx-auto">
      <div className="p-6 max-w-7xl w-[450px] rounded-lg shadow-md sm:w-[480px] md:w-[500px] lg:w-full">
        <h1 id='ubuntu-bold' className="text-[32px] mb-10 text-center text-amber-500">Confirmar compra</h1>
        <div className="flex flex-col lg:flex-row gap-4">
          
          <div className="flex-1 flex flex-col">
            <div className="flex flex-col items-center bg-white p-4 rounded-xl">
              <div className="flex items-center pb-2 w-full">
                <h2 id='ubuntu-bold' className="text-[16px] flex-1 text-center text-amber-500">No. de pedido</h2>
              </div>
              <div className="flex flex-col space-y-4 mt-4 w-full">
                {[1, 2, 3].map((item, index) => (
                  <div key={index} className="flex flex-col border-b border-amber-300 pb-2 w-full">
                    <div className="flex items-center justify-start">
                      <img src="/images/chickenplate.png" alt="Plato" className="w-[70px] h-[60px]" />
                      <div className='flex flex-col mx-8'>
                        <h2 id='ubuntu-bold' className="text-[16px]">Platillo 1</h2>
                        <p id='ubuntu-light' className='text-[12px]'>Detalle del producto</p>
                        <p id='ubuntu-medium' className='text-[16px]'>MX $210</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center mt-2 justify-between">
                      <div className="flex items-center">
                        <img src="/icons/trash-outline.svg" alt="Eliminar" className="w-4 h-4 mr-1" />
                        <button className="mr-2">Eliminar</button>
                      </div>
                      <div className="flex items-center">
                        <img src="/icons/add-amber.svg" alt="añadir" className="w-6 h-6 mr-1 rounded-full border border-amber-400" />
                        <p className="mr-1 text-[16px]">1</p>
                        <img src="/icons/remove-amber.svg" alt="" className="w-6 h-6 rounded-full border border-amber-400" />
                      </div>
                    </div>
                    <div className="flex items-center mt-2 justify-end">
                      <div className="flex items-center">
                        <p id='ubuntu-light' className="mr-2 ">1 producto x</p>
                        <p id='ubuntu-medium' className="mr-1 "> MX $10.00</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex flex-col space-y-4 mt-4 w-full">
                  <div className="flex justify-between pb-2">
                    <p id='ubuntu-light' className="text-[16px]">Subtotal</p>
                    <p id='ubuntu-medium' className="text-[16px] text-amber-500">$30.00 mxn</p> 
                  </div>
                  <div className="flex justify-between pb-2">
                    <p id='ubuntu-light' className="text-[16px]">Descuento</p>
                    <p id='ubuntu-medium' className="text-[16px] text-amber-500">$10.00 mxn</p> 
                  </div>
                  <div className="flex justify-between pb-2">
                    <p id='ubuntu-medium' className="text-[28px]">Total</p>
                    <p id='ubuntu-medium' className="text-[28px] text-amber-500">$220.00 mxn</p> 
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col lg:mt-0 mt-4">
            <div className="flex flex-col items-center bg-white p-4 rounded-xl h-full">
              <div className="flex items-center pb-2 w-full relative">
                <h2 id='ubuntu-bold' className="text-[16px] flex-1 text-center">Datos del cliente</h2>
                <img
                  src="/edit_24.svg"
                  alt="Edit"
                  className="w-6 h-6 text-amber-500 ml-4 cursor-pointer"
                  onClick={handleIconClick}
                />
                {isVisible && (
                  <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50'>
                    <div className='bg-slate-200 p-6 shadow-lg w-full max-w-md rounded-lg'>
                      <h2 id='ubuntu-regular' className='py-2 text-[28px]'>Nombre</h2>
                      <input type="text" placeholder='Escribe tu nombre' className='border border-neutral-500 w-full py-3 rounded-md'/>
                      <h2 id='ubuntu-regular' className='py-2 text-[28px]' >Numero telèfonico</h2>
                      <input type="text" placeholder='Numero telèfonico' className='border border-neutral-500 w-full py-3 rounded-md' />
                      <h2 id='ubuntu-regular' className='py-2 text-[28px]' >Direcciòn</h2>
                      <input type="text" placeholder='Escribe tu direcciòn' className='border border-neutral-500 w-full py-3 rounded-md'/>
                      <div className='mt-6 flex justify-between'>
                        <button
                          className="px-6 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600"
                        >
                          Enviar
                        </button>
                        <button
                          className="px-6 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600"
                          onClick={() => setIsVisible(false)}
                        >
                          Cerrar
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col space-y-4 mt-4 w-full">
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <p id='ubuntu-light' className="text-[16px]">Nombre</p>
                  <p id='ubuntu-regular' className="text-[16px]">Albert Stevano</p>
                </div>
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <p id='ubuntu-light' className="text-[16px]">Direccion</p>
                  <p id='ubuntu-regular' className="text-[16px]">ygahysisysi</p>
                </div>
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <p id='ubuntu-light' className="text-[16px]">Codigo postal</p>
                  <p id='ubuntu-regular' className="text-[16px]">BCBSBER</p>
                </div>
                <div className="flex justify-between pb-2">
                  <p id='ubuntu-light' className="text-[16px]">Numero telefonico</p>
                  <p id='ubuntu-regular' className="text-[16px]">+12 83472838 28</p>
                </div>
              </div>
             
              <div className="mt-auto flex justify-center w-full">
                <button className="px-20 py-2 bg-amber-500 text-white rounded-xl hover:bg-amber-600">
                  Enviar
                </button>
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

export default Confirmacioncom;


