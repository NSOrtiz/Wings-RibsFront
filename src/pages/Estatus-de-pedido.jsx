import React from 'react';
import NavBar from '../components/NavBar';

function EstatusDePedido() {
  return (
    <main>
      <NavBar />
      <section>

    <div className="flex items-center justify-center min-h-screen  bg-neutral-200">
      <div className="p-4 max-w-5xl md:max-w-7xl w-full ">
        <div className="flex flex-col lg:flex-col md:flex-col xl:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex-1 flex flex-col space-y-4 lg:space-y-8">
            <div className="flex flex-col items-center bg-white p-4 rounded-xl w-full max-w-[600px] mx-auto">
              <div className="flex items-center pb-2 w-full">
                <h2 className="text-base md:text-lg font-semibold flex-1 text-center text-amber-500">No. de pedido</h2>
                <img src="/edit_24.svg" alt="Edit" className="w-5 md:w-6 h-5 md:h-6 ml-4" />
              </div>
              <div className="flex flex-col space-y-4 mt-4 w-[400px] md:w-[500px] lg:w-[500px]">
              {[1, 2, 3].map((item, index) => (
                  <div key={index} className="flex items-center border-b border-neutral-200 pb-2 w-full justify-between">
                    <div className="flex items-center">
                      <p className="mr-2 text-amber-500">1</p>
                      <img src="/images/Rectangle-19.png" alt="Edit" className="w-[65px] h-[82px] p-2 text-amber-500" />
                    </div>
                    <div className='w-60 flex flex-col mx-4'>
                      <h2 id='ubuntu-bold' className="text-[16px]" >Plato de ostras</h2>
                      <p id='ubuntu-light' className='text-[12px]'>Galletas de chocolate con forma de tortuga y red velvet</p>
                    </div>
                    <p id='ubuntu-medium' className="text-[16px] text-amber-500">$10.00 mxn</p> 
                  </div>
                ))}
                <div className="flex flex-col space-y-4 mt-4 w-full">
                  <div className="flex justify-between pb-2">
                    <p d='ubuntu-light' className="text-[16px]">Subtotal</p>
                    <p id='ubuntu-medium' className="text-[16px] text-amber-500">$30.00 mxn</p> 
                  </div>
                  <div className="flex justify-between pb-2">
                    <p d='ubuntu-light' className="text-[16px]">Descuento</p>
                    <p id='ubuntu-medium' className="text-[16px] text-amber-500">$10.00 mxn</p> 
                  </div>
                  <div className="flex justify-between pb-2">
                    <p id='ubuntu-medium' className="text-[28px]">Total</p>
                    <p id='ubuntu-medium' className="text-[28px] text-amber-500">$220.00 mxn</p> 
                  </div>
                  <div className="flex items-center pb-2 w-full relative">
                    <h2 id='ubuntu-bold' className="text-[16px] flex-1 text-center">Datos del cliente</h2>
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
                      <p id='ubuntu-light' className="text-[16px]">Codigo Postal</p>
                      <p id='ubuntu-regular' className="text-[16px]">BCBSBER</p>
                    </div>
                    <div className="flex justify-between pb-2">
                      <p id='ubuntu-light' className="text-[16px]">Numero telefonico</p>
                      <p id='ubuntu-regular' className="text-[16px]">+12 83472838 28</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col lg:flex-col md:flex-col space-y-4 items-center justify-center ">
            <div className="text-center mb-6">
              <h2 id='ubuntu-bold' className="text-[32px] md:text-[32px]">Estatus de pedido</h2>
              <p  id='ubuntu-light' className='text-[28px] md:text-[28px]'>Hora estimada de entrega 8:30 - 9:15 PM</p>
            </div>

            <div className='flex flex-col lg:flex-row md:flex-row md:space-x4 md:space-y-0 lg:space-x-4 space-y-4 lg:space-y-0'>
              <div className="flex-1 text-center flex flex-col space-y-4">
                <div className="flex flex-col items-center bg-white p-3 rounded-xl">
                  <div className="flex flex-col space-y-4 mt-4 w-48 md:w-32 h-52 md:h-52 ">
                    <div className="flex flex-col items-center justify-between pb-2  ">
                      <div className='flex items-center justify-center bg-amber-500 rounded-full w-[100px] h-[100px] md:w-15 md:h-15 overflow-hidden'>
                        <img className='w-auto h-auto max-w-full max-h-full' src="/icons/Group.svg" alt="Recibido" />
                      </div>
                      <p id='ubuntu-medium' className="text-[16px] md:text-[16px]">Recibido</p>
                      <p id='ubuntu-light' className="text-[12px] md:text-[12px]">8:30 am</p>
                      <p id='ubuntu-light' className="text-[12px] md:text-[12px]">Hemos recibido tu pedido</p>
                      <h2 id='ubuntu-medium' className='text-[12px] md:text-[12px]'>Sucursal Loma real</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-center text-amber-500 text-[60px] md:text-[80px] lg:text-[100px] '>
                <span className='hidden lg:inline-block md:inline-block'>-</span>
                <span className='inline-block lg:hidden md:hidden'>|</span>
              </div>
              <div className="flex-1 text-center flex flex-col space-y-4">
                <div className="flex flex-col items-center bg-white p-3 rounded-xl">
                  <div className="flex flex-col space-y-4 mt-4 w-48 md:w-32 h-52 md:h-52 ">
                    <div className="flex flex-col items-center justify-between pb-2">
                      <div className='flex items-center justify-center rounded-full w-[100px] h-[100px] md:w-15 md:h-15 overflow-hidden'>
                        <img className='w-auto h-auto max-w-full max-h-full' src="/icons/chef.svg" alt="En preparación" />
                      </div>
                      <p id='ubuntu-medium' className="text-[16px] md:text-[16px]">En preparación</p>
                      <p id='ubuntu-light' className="text-[12px] md:text-[12px]">9:00 am</p>
                      <p id='ubuntu-light' className="text-[12px] md:text-[12px]">Estamos preparando tus productos</p>
                      <h2 d='ubuntu-medium' className='text-[12px] md:text-[12px]'>Sucursal Loma real</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-center text-neutral-400 text-[60px] md:text-[80px] lg:text-[100px]'>
                <span className='hidden lg:inline-block md:inline-block'>-</span>
                <span className='inline-block lg:hidden md:hidden'>|</span>
              </div>
              <div className="flex-1 text-center flex flex-col space-y-4">
                <div className="flex flex-col items-center bg-white p-3 rounded-xl">
                  <div className="flex flex-col space-y-4 mt-4 w-48 md:w-32 h-52 md:h-52 ">
                    <div className="flex flex-col items-center justify-between pb-2 ">
                      <div className='flex items-center justify-center rounded-full w-[100px] h-[100px] md:w-15 md:h-15 overflow-hidden'>
                        <img className='w-auto h-auto max-w-full max-h-full' src="/icons/deliver.svg" alt="En camino" />
                      </div>
                      <p id='ubuntu-medium' className="text-[16px] md:text-[16px]">En camino</p>
                      <p id='ubuntu-light' className="text-[12px] md:text-[12px]">9:30 am</p>
                      <p id='ubuntu-light' className="text-[12px] md:text-[12px]">Tu pedido va en camino</p>
                      <h2 d='ubuntu-medium' className='text-[12px] md:text-[12px]'>Sucursal Loma real</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-center text-neutral-400 text-[60px] md:text-[80px] lg:text-[100px]'>
                <span className='hidden lg:inline-block md:inline-block'>-</span>
                <span className='inline-block lg:hidden md:hidden'>|</span>
              </div>
              <div className="flex-1 text-center flex flex-col space-y-4">
                <div className="flex flex-col items-center bg-white p-3 rounded-xl">
                  <div className="flex flex-col space-y-4 mt-4 w-48 md:w-32 h-52 md:h-52 ">
                    <div className="flex flex-col items-center justify-between pb-2">
                      <div className='flex items-center justify-center  rounded-full w-[100px] h-[100px] md:w-15 md:h-15 overflow-hidden'>
                        <img className='w-auto h-auto max-w-full max-h-full' src="/icons/home_svgrepo.com.svg" alt="Entregado" />
                      </div>
                      <p id='ubuntu-medium' className="text-[16px] md:text-[16px]">Entregado</p>
                      <p id='ubuntu-light' className="text-[12px] md:text-[12px]">10:00 am</p>
                      <p id='ubuntu-light' className="text-[12px] md:text-[12px]">Tu pedido ha sido entregado en tu domicilio</p>
                      <h2 d='ubuntu-medium' className='text-[12px] md:text-[12px]'>Sucursal Loma real</h2>
                    </div>
                  </div>
                </div>
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

export default EstatusDePedido;
