import React from 'react';

const MetodoDePago = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-white md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto p-4">
      <h2 className="text-orange-500 text-2xl font-bold mb-4">Método de pago</h2>
      <div className="flex flex-col mb-4">
        <h3 className="text-gray-600 text-lg font-bold mb-2">Card Details</h3>
        <div className="flex flex-col mb-4">
          <label className="text-gray-600 text-sm font-bold mb-1">Name Card</label>
          <input type="text" className="w-full p-2 pl-10 text-sm text-gray-700" placeholder="Nombre de la sucursal" />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-gray-600 text-sm font-bold mb-1">Card Number</label>
          <input type="text" className="w-full p-2 pl-10 text-sm text-gray-700" placeholder="Ingresa número de tarjeta" />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-gray-600 text-sm font-bold mb-1">Expiration Date</label>
          <input type="date" className="w-full p-2 pl-10 text-sm text-gray-700" />
          <span className="text-gray-600 text-sm font-bold ml-2">CVV</span>
          <input type="text" className="w-1/4 p-2 pl-10 text-sm text-gray-700" placeholder="Ingresa CVV" />
        </div>
      </div>
      <div className="flex flex-col mb-4">
        <h3 className="text-gray-600 text-lg font-bold mb-2">Card Type</h3>
        <div className="flex flex-wrap justify-center mb-4">
          <img src="visa-logo.png" alt="Visa Logo" className="w-24 h-24 mr-4" />
          <img src="paypal-logo.png" alt="PayPal Logo" className="w-24 h-24 mr-4" />
          {/**/}
        </div>
      </div>
      <div className="flex flex-col mb-4">
        <h3 className="text-gray-600 text-lg font-bold mb-2">Order Summary</h3>
        <div className="flex flex-col mb-4">
          <span className="text-gray-600 text-sm font-bold">Subtotal Shopping:</span>
          <span className="text-gray-600 text-sm font-bold">$ 0.00</span>
        </div>
        <div className="flex flex-col mb-4">
          <span className="text-gray-600 text-sm font-bold">Total:</span>
          <span className="text-gray-600 text-sm font-bold">$ 0.00</span>
        </div>
      </div>
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Pagar</button>
    </div>
  );
};

export default MetodoDePago;