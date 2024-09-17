import React from 'react';

function EstatusDePedido() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="p-4 max-w-5xl md:max-w-7xl w-full ">
        <div className="flex flex-col lg:flex-row md:flex-col space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex-1 flex flex-col space-y-4 lg:space-y-8">
            <div className="flex flex-col items-center bg-white p-4 rounded-xl">
              <div className="flex items-center pb-2 w-full">
                <h2 className="text-base md:text-lg font-semibold flex-1 text-center text-[#D77408]">No. de pedido</h2>
                <img src="/edit_24.svg" alt="Edit" className="w-5 md:w-6 h-5 md:h-6 ml-4" />
              </div>
              <div className="flex flex-col space-y-4 mt-4 w-full">
                <div className="flex items-center border-b border-gray-200 pb-2 w-full justify-between">
                  <div className="flex items-center">
                    <p className="mr-2 text-[#D77408] text-sm md:text-base">1</p>
                    <img src="/edit_24.svg" alt="Edit" className="w-5 md:w-6 h-5 md:h-6 text-[#D77408]" />
                  </div>
                  <div className='w-52 md:w-60 flex flex-col mx-4'>
                    <h2 className="text-base md:text-lg font-semibold">Oyster Dish</h2>
                    <p className='text-sm md:text-base font-extralight'>Shortbread Chocolate turtle cookies and red velvet</p>
                  </div>
                  <p className="text-[#D77408] text-sm md:text-base">$10.00 mxn</p> 
                </div>
                <div className="flex items-center border-b border-gray-200 pb-2 w-full justify-between">
                  <div className="flex items-center">
                    <p className="mr-2 text-[#D77408] text-sm md:text-base">1</p>
                    <img src="/edit_24.svg" alt="Edit" className="w-5 md:w-6 h-5 md:h-6 text-[#D77408]" />
                  </div>
                  <div className='w-52 md:w-60 flex flex-col mx-4'>
                    <h2 className="text-base md:text-lg font-semibold">Oyster Dish</h2>
                    <p className='text-sm md:text-base font-extralight'>Shortbread Chocolate turtle cookies and red velvet</p>
                  </div>
                  <p className="text-[#D77408] text-sm md:text-base">$10.00 mxn</p> 
                </div>
                <div className="flex items-center border-b border-gray-200 pb-2 w-full justify-between">
                  <div className="flex items-center">
                    <p className="mr-2 text-[#D77408] text-sm md:text-base">1</p>
                    <img src="/edit_24.svg" alt="Edit" className="w-5 md:w-6 h-5 md:h-6 text-[#D77408]" />
                  </div>
                  <div className='w-52 md:w-60 flex flex-col mx-4'>
                    <h2 className="text-base md:text-lg font-semibold">Oyster Dish</h2>
                    <p className='text-sm md:text-base font-extralight'>Shortbread Chocolate turtle cookies and red velvet</p>
                  </div>
                  <p className="text-[#D77408] text-sm md:text-base">$10.00 mxn</p> 
                </div>
                <div className="flex flex-col space-y-4 mt-4 w-full">
                  <div className="flex justify-between pb-2">
                    <p className="font-extralight text-sm md:text-base w-1/3">Subtotal</p>
                    <p className="text-sm md:text-base w-2/3 text-right text-[#D77408]">$30.00 mxn</p> 
                  </div>
                  <div className="flex justify-between pb-2">
                    <p className="font-extralight text-sm md:text-base w-1/3">Descuento</p>
                    <p className="text-sm md:text-base w-2/3 text-right text-[#D77408]">$10.00 mxn</p> 
                  </div>
                  <div className="flex justify-between pb-2">
                    <p className="font-bold text-sm md:text-base w-1/3">Total</p>
                    <p className="text-sm md:text-base w-2/3 text-right text-2xl font-bold text-[#D77408]">$220.00 mxn</p> 
                  </div>
                  <div className="flex items-center pb-2 w-full relative">
                    <h2 className="text-base md:text-lg font-semibold flex-1 text-center">Datos del cliente</h2>
                  </div>
                  <div className="flex flex-col space-y-4 mt-4 w-full">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <p className="font-semibold text-sm md:text-base w-1/3">Name</p>
                      <p className="text-sm md:text-base w-2/3 text-right">Albert Stevano</p>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <p className="font-semibold text-sm md:text-base w-1/3">Address</p>
                      <p className="text-sm md:text-base w-2/3 text-right">ygahysisysi</p>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <p className="font-semibold text-sm md:text-base w-1/3">CP</p>
                      <p className="text-sm md:text-base w-2/3 text-right">BCBSBER</p>
                    </div>
                    <div className="flex justify-between pb-2">
                      <p className="font-semibold text-sm md:text-base w-1/3">Phone No.</p>
                      <p className="text-sm md:text-base w-2/3 text-right">+12 83472838 28</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col lg:flex-col md:flex-col space-y-4 items-center justify-center">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-semibold">Estatus de pedido</h2>
              <p className='text-black/40 text-sm md:text-base'>Hora estimada de entrega 8:30 - 9:15 PM</p>
            </div>

            <div className='flex flex-col lg:flex-row md:flex-row md:space-x4 md:space-y-0 lg:space-x-4 space-y-4 lg:space-y-0'>
              <div className="flex-1 text-center flex flex-col space-y-4">
                <div className="flex flex-col items-center bg-amber-400 p-3 rounded-xl">
                  <div className="flex flex-col space-y-4 mt-4 w-48 md:w-36 h-52 md:h-60">
                    <div className="flex flex-col justify-between pb-2">
                      <div className='flex items-center justify-center mb-4'>
                        <img className='rounded-full w-20 md:w-15 h-20 md:h-20 object-cover' src="/icons/fastfood.svg" alt="Recibido" />
                      </div>
                      <p className="font-semibold text-sm md:text-base">Recibido</p>
                      <p className='text-black/40 text-sm md:text-base'>8:30 am</p>
                      <p className="text-black/40 text-sm md:text-base">Hemos recibido tu pedido</p>
                      <h2 className='font-semibold text-sm md:text-base'>Sucursal Loma real</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-center text-amber-400 text-[60px] md:text-[80px] lg:text-[100px] '>
                <span className='hidden lg:inline-block md:inline-block'>-</span>
                <span className='inline-block lg:hidden md:hidden'>|</span>
              </div>
              <div className="flex-1 text-center flex flex-col space-y-4">
                <div className="flex flex-col items-center bg-white p-3 rounded-xl">
                  <div className="flex flex-col space-y-4 mt-4 w-48 md:w-36 h-52 md:h-60">
                    <div className="flex flex-col justify-between pb-2">
                      <div className='flex items-center justify-center mb-4'>
                        <img className='rounded-full w-20 md:w-15 h-20 md:h-20 object-cover' src="/icons/fastfood.svg" alt="En preparación" />
                      </div>
                      <p className="font-semibold text-sm md:text-base">En preparación</p>
                      <p className='text-black/40 text-sm md:text-base'>9:00 am</p>
                      <p className="text-black/40 text-sm md:text-base">Estamos preparando tus productos</p>
                      <h2 className='font-semibold text-sm md:text-base'>Sucursal Loma real</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-center text-gray-400 text-[60px] md:text-[80px] lg:text-[100px]'>
                <span className='hidden lg:inline-block md:inline-block'>-</span>
                <span className='inline-block lg:hidden md:hidden'>|</span>
              </div>
              <div className="flex-1 text-center flex flex-col space-y-4">
                <div className="flex flex-col items-center bg-white p-3 rounded-xl">
                  <div className="flex flex-col space-y-4 mt-4 w-48 md:w-36 h-52 md:h-60">
                    <div className="flex flex-col justify-between ">
                      <div className='flex items-center justify-center mb-4'>
                        <img className='rounded-full w-20 md:w-15 h-20 md:h-20 object-cover' src="/icons/fastfood.svg" alt="En camino" />
                      </div>
                      <p className="font-semibold text-sm md:text-base">En camino</p>
                      <p className='text-black/40 text-sm md:text-base'>9:30 am</p>
                      <p className="text-black/40 text-sm md:text-base">Tu pedido va en camino</p>
                      <h2 className='font-semibold text-sm md:text-base'>Sucursal Loma real</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-center text-gray-400 text-[60px] md:text-[80px] lg:text-[100px]'>
                <span className='hidden lg:inline-block md:inline-block'>-</span>
                <span className='inline-block lg:hidden md:hidden'>|</span>
              </div>
              <div className="flex-1 text-center flex flex-col space-y-4">
                <div className="flex flex-col items-center bg-white p-3 rounded-xl">
                  <div className="flex flex-col space-y-4 mt-4 w-48 md:w-36 h-52 md:h-60">
                    <div className="flex flex-col justify-between">
                      <div className='flex items-center justify-center mb-4'>
                        <img className='rounded-full w-20 md:w-15 h-20 md:h-20 object-cover' src="/icons/fastfood.svg" alt="Entregado" />
                      </div>
                      <p className="font-semibold text-sm md:text-base">Entregado</p>
                      <p className='text-black/40 text-sm md:text-base'>10:00 am</p>
                      <p className="text-black/40 text-sm md:text-base">Tu pedido ha sido entregado en tu domicilio</p>
                      <h2 className='font-semibold text-sm md:text-base'>Sucursal Loma real</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EstatusDePedido;
