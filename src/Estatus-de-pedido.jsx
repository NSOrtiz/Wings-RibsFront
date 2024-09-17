import React from 'react';

function EstatusDePedido() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="p-4 max-w-10xl w-full rounded-lg shadow-md">
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
         
          <div className="flex-1 flex flex-col space-y-4 lg:space-y-8">
            <div className="flex flex-col items-center bg-white p-4 rounded-xl">
              <div className="flex items-center pb-2 w-full">
                <h2 className="text-lg font-semibold flex-1 text-center text-[#D77408]">No. de pedido</h2>
                <img src="/edit_24.svg" alt="Edit" className="w-6 h-6 ml-4" />
              </div>
              <div className="flex flex-col space-y-4 mt-4 w-full">
                <div className="flex items-center border-b border-gray-200 pb-2 w-full justify-between">
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
                <div className="flex items-center border-b border-gray-200 pb-2 w-full justify-between">
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
                <div className="flex items-center border-b border-gray-200 pb-2 w-full justify-between">
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
                  <div className="flex items-center pb-2 w-full relative">
                    <h2 className="text-lg font-semibold flex-1 text-center">Datos del cliente</h2>
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
          </div>

      
          <div className="flex-1 flex flex-col space-y-4 items-center justify-center">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-semibold">Estatus de pedido</h2>
              <p className='text-black/40'>Hora estimada de entrega 8:30 - 9:15 PM</p>
            </div>

            <div className='flex lg:flex-row flex-col space-y-4 lg:space-y-0 lg:space-x-4'>

              <div className="flex-1 text-center flex flex-col space-y-4">
                <div className="flex flex-col items-center bg-amber-400 p-4 rounded-xl">
                  <div className="flex flex-col space-y-4 mt-4 w-52 h-60">
                    <div className="flex flex-col justify-between pb-2">
                      <div className='flex items-center justify-center mb-4'>
                        <img className='rounded-full w-24 h-24 object-cover' src="/fastfood.svg" alt="Recibido" />
                      </div>
                      <p className="font-semibold">Recibido</p>
                      <p className='text-black/40'>8:30 am</p>
                      <p className="text-black/40">Hemos recibido tu pedido</p>
                      <h2 className='font-semibold'>Sucursal Loma real</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-center text-amber-400 text-[100px] lg:text-[200px] '>
                -
              </div>
              <div className="flex-1 text-center flex flex-col space-y-4">
                <div className="flex flex-col items-center bg-white p-4 rounded-xl">
                  <div className="flex flex-col space-y-4 mt-4 w-52 h-60">
                    <div className="flex flex-col justify-between border-b border-gray-200 pb-2">
                      <div className='flex items-center justify-center mb-4'>
                        <img className='rounded-full w-24 h-24 object-cover' src="/fastfood.svg" alt="En preparación" />
                      </div>
                      <p className="font-semibold">En preparación</p>
                      <p className='text-black/40'>9:00 am</p>
                      <p className="text-black/40">Estamos preparando tus productos</p>
                      <h2 className='font-semibold'>Sucursal Loma real</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-center text-gray-400 text-[100px] lg:text-[200px]'>
                -
              </div>
              <div className="flex-1 text-center flex flex-col space-y-4">
                <div className="flex flex-col items-center bg-white p-4 rounded-xl">
                  <div className="flex flex-col space-y-4 mt-4 w-52 h-60">
                    <div className="flex flex-col justify-between border-b border-gray-200 pb-2">
                      <div className='flex items-center justify-center mb-4'>
                        <img className='rounded-full w-24 h-24 object-cover' src="/fastfood.svg" alt="En camino" />
                      </div>
                      <p className="font-semibold">En camino</p>
                      <p className='text-black/40'>9:30 am</p>
                      <p className="text-black/40">Tu pedido va en camino</p>
                      <h2 className='font-semibold'>Sucursal Loma real</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-center text-gray-400 text-[100px] lg:text-[200px]'>
                -
              </div>
              <div className="flex-1 text-center flex flex-col space-y-4">
                <div className="flex flex-col items-center bg-white p-4 rounded-xl">
                  <div className="flex flex-col space-y-4 mt-4 w-52 h-60">
                    <div className="flex flex-col justify-between border-b border-gray-200 pb-2">
                      <div className='flex items-center justify-center mb-4'>
                        <img className='rounded-full w-24 h-24 object-cover' src="/fastfood.svg" alt="Entregado" />
                      </div>
                      <p className="font-semibold">Entregado</p>
                      <p className='text-black/40'>10:00 am</p>
                      <p className="text-black/40">Tu pedido ha sido entregado en tu domicilio</p>
                      <h2 className='font-semibold'>Sucursal Loma real</h2>
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


