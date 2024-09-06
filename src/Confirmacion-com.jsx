import React from 'react';

function Confirmacioncom() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 max-w-7xl w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-4 text-center text-orange-500">Confirmar compra</h1>
        <div className="flex space-x-4">
          {/* Primera Columna */}
          <div className="flex-1 p-4 bg-gray-100 border border-gray-300 rounded-md">
            <h2 className="text-lg font-semibold">No. de Pedido</h2>
            <p>Contenido de la primera parte</p>
          </div>
          {/* Segunda Columna */}
          <div className="flex-1 flex flex-col space-y-80">
            {/* Encabezado y icono de edición */}
            <div className="flex flex-col items-center bg-gray-50 p-4 border border-gray-300 rounded-md ">
             <div className="flex items-center border-b border-gray-200 pb-2 w-full">
              <h2 className="text-lg font-semibold flex-1 text-center">Datos del cliente</h2>
              <img
                src="/edit_24.svg"
                alt="Edit"
                className="w-6 h-6 text-orange-500 ml-4"
              />

            </div>
            {/* Detalles del cliente */}
            <div className="flex flex-col space-y-4 mt-4 w-full">
              {/* Cada detalle en su propio div con separación */}
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
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <p className="font-semibold w-1/3">Phone No.</p>
                <p className="w-2/3 text-right">+12 83472838 28</p>
              </div>
            </div>
            </div>
            {/* Botón al final del recuadro */}
            <div className="flex justify-center mt-6">
              <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                Confirmar compra
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirmacioncom;



