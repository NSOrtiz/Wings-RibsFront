import React, { useState } from 'react';

function Confirmacioncom() {
  const [isVisible, setIsVisible] = useState(false);
  const handleIconClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
      <div className="p-6 max-w-7xl w-full rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-10 text-center text-[#F39C12]">Confirmar compra</h1>
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Contenedor de No. de pedido */}
          <div className="flex-1 flex flex-col">
            <div className="flex flex-col items-center bg-white p-4 rounded-xl">
              <div className="flex items-center pb-2 w-full">
                <h2 className="text-lg font-semibold flex-1 text-center text-[#D77408]">No. de pedido</h2>
                <img src="/edit_24.svg" alt="Edit" className="w-6 h-6 ml-4" />
              </div>
              <div className="flex flex-col space-y-4 mt-4 w-full">
                {[1, 2, 3].map((item, index) => (
                  <div key={index} className="flex items-center border-b border-gray-200 pb-2 w-full justify-between">
                    <div className="flex items-center">
                      <p className="mr-2 text-[#D77408]">1</p>
                      <img src="/edit_24.svg" alt="Edit" className="w-6 h-6 text-[#D77408]" />
                    </div>
                    <div className='w-60 flex flex-col mx-4'>
                      <h2 className="text-lg font-semibold">Oyster Dish</h2>
                      <p className='font-extralight'>Shortbread Chocolate turtle cookies and red velvet</p>
                    </div>
                    <p className="text-[#D77408]">$10.00 mxn</p> 
                  </div>
                ))}
                <div className="flex flex-col space-y-4 mt-4 w-full">
                  <div className="flex justify-between pb-2">
                    <p className="font-extralight w-1/3">Subtotal</p>
                    <p className="w-2/3 text-right text-[#D77408]">$30.00 mxn</p> 
                  </div>
                  <div className="flex justify-between pb-2">
                    <p className="font-extralight w-1/3">Descuento</p>
                    <p className="w-2/3 text-right text-[#D77408]">$10.00 mxn</p> 
                  </div>
                  <div className="flex justify-between pb-2">
                    <p className="font-bold w-1/3">Total</p>
                    <p className="w-2/3 text-right text-2xl font-bold text-[#D77408]">$220.00 mxn</p> 
                  </div>
                  <div className="flex justify-end pb-2">
                    <p className="w-2/3 text-right text-[#1BB816]">obtienes 20 pts. en esta compra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contenedor de Datos del Cliente */}
          <div className="flex-1 flex flex-col lg:mt-0 mt-4">
            <div className="flex flex-col items-center bg-white p-4 rounded-xl">
              <div className="flex items-center pb-2 w-full relative">
                <h2 className="text-lg font-semibold flex-1 text-center">Datos del cliente</h2>
                <img
                  src="/edit_24.svg"
                  alt="Edit"
                  className="w-6 h-6 text-[#D77408] ml-4 cursor-pointer"
                  onClick={handleIconClick}
                />
                {isVisible && (
                  <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50'>
                    <div className='bg-slate-200 p-6 shadow-lg w-full max-w-md rounded-lg'>
                      <h2 className='py-2 text-xl font-semibold'>Name</h2>
                      <input type="text" placeholder='Escribe tu nombre' className='border border-gray-500 w-full py-3 rounded-md'/>
                      <h2 className='py-2 text-xl font-semibold mt-4'>Phone number</h2>
                      <input type="text" placeholder='Phone number' className='border border-gray-500 w-full py-3 rounded-md' />
                      <h2 className='py-2 text-xl font-semibold mt-4'>Address</h2>
                      <input type="text" placeholder='Write Address' className='border border-gray-500 w-full py-3 rounded-md'/>
                      <div className='mt-6 flex justify-between'>
                        <button
                          className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
                        >
                          Send
                        </button>
                        <button
                          className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
                          onClick={() => setIsVisible(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col space-y-4 mt-4 w-full">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <p className="font-semibold w-1/3">Name</p>
                  <p className="w-2/3 text-right">Albert Stevano</p>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <p className="font-semibold w-1/3">Address</p>
                  <p className="w-2/3 text-right">ygahysisysi</p>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <p className="font-semibold w-1/3">CP</p>
                  <p className="w-2/3 text-right">BCBSBER</p>
                </div>
                <div className="flex justify-between pb-2">
                  <p className="font-semibold w-1/3">Phone No.</p>
                  <p className="w-2/3 text-right">+12 83472838 28</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Botón de Confirmar Compra */}
        <div className="flex justify-center mt-6">
          <button className="px-4 py-2 bg-[#F39C12] text-white rounded-xl hover:bg-orange-600">
            Confirmar compra
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confirmacioncom;
