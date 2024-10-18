import React, { useState } from 'react';

function EstatusDePedidoVendedorAdmin({onClose}) {
 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-xl p-4 max-w-md mx-auto w-full h-auto" style={{ maxHeight: '95vh', overflowY: 'auto' }}>
        <div className="flex justify-end items-center pb-4">
        <button onClick={onClose} className="text-gray-500 text-right hover:text-gray-800">
            <img src="/icons/close.svg" alt="Cerrar" className="w-5 h-5" />
          </button>
        </div>
        <div className="flex justify-between items-center pb-4">
          <p  className="text-lg font-semibold bg-green-500 rounded-2xl text-white px-4 py-2">Pagado</p>
          <h2 className="text-lg font-semibold text-amber-500">No. de pedido</h2>
        </div>
        <div className="flex justify-center items-center pb-4">
          <h2 className="text-lg font-semibold">Cliente</h2>
        </div>
        <div className="flex flex-col space-y-4">
          {[1, 2, 3].map((item) => (
            <div className="flex items-center border-b border-neutral-200 pb-2 justify-between">
              <div className="flex items-center">
                <p className="mr-2 text-amber-500">1</p>
                <img src="/images/Rectangle-19.png" alt="Producto" className="w-[65px] h-[82px] p-2" />
              </div>
              <div className="flex flex-col mx-4">
                <h2 className="text-[16px]">Plato de ostras</h2>
                <p className="text-[12px]">Galletas de chocolate con forma de tortuga y red velvet</p>
              </div>
              <p className="text-[16px] text-amber-500">$10.00 mxn</p>
            </div>
          ))}
          <div className="flex flex-col space-y-4 mt-4 w-full">
            <div className="flex justify-between pb-2">
              <p className="text-[16px]">Subtotal</p>
              <p className="text-[16px] text-amber-500">$30.00 mxn</p>
            </div>
            <div className="flex justify-between pb-2">
              <p className="text-[16px]">Descuento</p>
              <p className="text-[16px] text-amber-500">$10.00 mxn</p>
            </div>
            <div className="flex justify-between pb-2">
              <p className="text-[28px]">Total</p>
              <p className="text-[28px] text-amber-500">$220.00 mxn</p>
            </div>
            <div className="flex items-center pb-2 w-full">
              <h2 className="text-[16px] flex-1 text-center">Datos del cliente</h2>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <p className="text-[16px]">Nombre</p>
                <p className="text-[16px]">Albert Stevano</p>
              </div>
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <p className="text-[16px]">Dirección</p>
                <p className="text-[16px]">ygahysisysi</p>
              </div>
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <p className="text-[16px]">Código Postal</p>
                <p className="text-[16px]">BCBSBER</p>
              </div>
              <div className="flex justify-between pb-2">
                <p className="text-[16px]">Número telefónico</p>
                <p className="text-[16px]">+12 83472838 28</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EstatusDePedidoVendedorAdmin;


  
  