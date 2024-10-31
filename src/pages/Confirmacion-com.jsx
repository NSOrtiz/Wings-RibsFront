import React, { useState, useEffect } from 'react';
import { NavBar } from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Confirmacioncom() {
  const [isVisible, setIsVisible] = useState(false);
  const [pedido, setPedido] = useState(null);
  const [clientData, setClientData] = useState({
    nameuser: '',
    address: '',
    phone: '',
  });
  const navigate = useNavigate();

  const handleIconClick = () => {
    setIsVisible(!isVisible);
  };
  
  const handleClick = () => {
    navigate('/metodo_pago');
  };

  const fetchPedido = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/orders');
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error al obtener el pedido: ${response.status} ${errorText}`);
      }
      const data = await response.json();
      setPedido(data[0]); 
    } catch (error) {
      console.error(error);
    }
  };
  const handleDelete = async (itemId) => {
    if (!pedido) return; 
    try {
      const response = await axios.delete(`http://localhost:5000/api/orders/${pedido._id}/items/${itemId}`);
      console.log(response.data);
     
      fetchPedido();
    } catch (error) {
      console.error('Error al eliminar el item:', error);
    }
  };
  
  const calculateSubtotal = () => {
    return pedido.items.reduce((total, item) => {
      return total + item.price; 
    }, 0);
  };
  
  const calculateTotalDiscount = () => {
    return pedido.items.reduce((total, item) => {
      return total + item.discount; 
    }, 0);
  };
  
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discount = calculateTotalDiscount();
    return subtotal - discount; 
  };
  

  useEffect(() => {
    fetchPedido(); 
  }, []);


  return (
    <main>
      <NavBar />
      <section>
        <div className="flex items-center justify-center min-h-screen bg-neutral-200 p-4 w-full max-w-full mx-auto">
          <div className="p-6 max-w-7xl w-[450px] sm:w-[480px] md:w-[500px] lg:w-full">
            <h1
              id="ubuntu-bold"
              className="text-[32px] mb-10 text-center text-amber-500"
            >
              Confirmar compra
            </h1>
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 flex flex-col">
                <div className="flex flex-col items-center bg-white p-4 rounded-xl">
                  <div className="flex items-center pb-2 w-full">
                    <h2
                      id="ubuntu-bold"
                      className="text-[16px] flex-1 text-center text-amber-500"
                    >
                      No. de pedido: {pedido ? pedido.orderNumber : 'Cargando...'}
                    </h2>
                  </div>
                  <div className="flex flex-col space-y-4 mt-4 w-full">
                    {pedido && pedido.items && pedido.items.length > 0 ? (
                      pedido.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex flex-col border-b border-amber-300 pb-2 w-full"
                        >
                          <div className="flex items-center justify-start">
                            <img
                              src={item.photo}
                              alt="Plato"
                              className="w-[70px] h-[60px]"
                            />
                            <div className="flex flex-col mx-8">
                              <h2 id="ubuntu-bold" className="text-[16px]">
                                {item.item} 
                              </h2>
                              <p id="ubuntu-light" className="text-[12px]">
                                {item.details}
                              </p>
                              <p id="ubuntu-medium" className="text-[16px]">
                                MX ${item.price}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center mt-2 justify-between">
                            <div className="flex items-center">
                              <img
                                src="/icons/trash-outline.svg"
                                alt="Eliminar"
                                className="w-4 h-4 mr-1"
                              />
                              <button className="mr-2" onClick={() => handleDelete(item._id)}>Eliminar</button>
                            </div>
                            <div className="flex items-center">
                              <img
                                src="/icons/add-amber.svg"
                                alt="añadir"
                                className="w-6 h-6 mr-1 rounded-full border border-amber-400"
                              />
                              <p className="mr-1 text-[16px]">1</p>
                              <img
                                src="/icons/remove-amber.svg"
                                alt=""
                                className="w-6 h-6 rounded-full border border-amber-400"
                              />
                            </div>
                          </div>
                          <div className="flex items-center mt-2 justify-end">
                            <div className="flex items-center">
                              <p id="ubuntu-light" className="mr-2">
                                1 producto x
                              </p>
                              <p id="ubuntu-medium" className="mr-1">
                                MX $10.00
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No hay items en el pedido.</p>
                    )}
                    <div className="flex flex-col space-y-4 mt-4 w-full">
                      <div className="flex justify-between pb-2">
                        <p className="text-[16px]">Subtotal</p>
                        <p className="text-[16px] text-amber-500">
                          MX ${pedido ? calculateSubtotal().toFixed(2) : 0}
                        </p>
                      </div>
                      <div className="flex justify-between pb-2">
                        <p className="text-[16px]">Descuento</p>
                        <p className="text-[16px] text-amber-500">
                          MX ${pedido ? calculateTotalDiscount().toFixed(2) : 0}
                        </p>
                      </div>
                      <div className="flex justify-between pb-2">
                        <p className="text-[28px]">Total</p>
                        <p className="text-[28px] text-amber-500">
                          MX ${pedido ? calculateTotal().toFixed(2) : 0}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col lg:mt-0 mt-4">
                <div className="flex flex-col items-center bg-white p-4 rounded-xl h-full">
                  <div className="flex items-center pb-2 w-full relative">
                    <h2 id="ubuntu-bold" className="text-[16px] flex-1 text-center">Datos del cliente</h2>
                    <img src="/icons/edit-yellow.svg" alt="Edit" className="w-6 h-6 text-amber-500 ml-4 cursor-pointer" onClick={handleIconClick} />
                    {isVisible && (
                      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                        <div className="bg-slate-200 p-6 shadow-lg w-full max-w-md rounded-lg">
                          <h2 id="ubuntu-regular" className="py-2 text-[28px]">Nombre</h2>
                          <input
                            type="text"
                            placeholder="Escribe tu nombre"
                            className="border border-neutral-500 w-full py-3 rounded-md"
                            value={clientData.nameuser} // Cambiado a nameuser
                            onChange={(e) => setClientData({ ...clientData, nameuser: e.target.value })} // Cambiado a nameuser
                          />
                          <h2 id="ubuntu-regular" className="py-2 text-[28px]">Número telefónico</h2>
                          <input
                            type="text"
                            placeholder="Número telefónico"
                            className="border border-neutral-500 w-full py-3 rounded-md"
                            value={clientData.phone}
                            onChange={(e) => setClientData({ ...clientData, phone: e.target.value })}
                          />
                          <h2 id="ubuntu-regular" className="py-2 text-[28px]">Dirección</h2>
                          <input
                            type="text"
                            placeholder="Escribe tu dirección"
                            className="border border-neutral-500 w-full py-3 rounded-md"
                            value={clientData.address}
                            onChange={(e) => setClientData({ ...clientData, address: e.target.value })}
                          />
                          <div className="mt-6 flex justify-between">
                            <button 
                              className="px-6 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600"
                              onClick={handleSubmit}
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
                      <p id="ubuntu-light" className="text-[16px]">Nombre</p>
                      <p id="ubuntu-regular" className="text-[16px}">{clientData.nameuser || 'No disponible'}</p>
                    </div>
                    <div className="flex justify-between border-b border-neutral-200 pb-2">
                      <p id="ubuntu-light" className="text-[16px]">Dirección</p>
                      <p id="ubuntu-regular" className="text-[16px]">{clientData.address || 'No disponible'}</p>
                    </div>
                    <div className="flex justify-between pb-2">
                      <p id="ubuntu-light" className="text-[16px]">Número telefónico</p>
                      <p id="ubuntu-regular" className="text-[16px]">{clientData.phone || 'No disponible'}</p>
                    </div>
                  </div>

                  <div className="mt-auto flex justify-center w-full">
                    <button
                      className="px-20 py-2 bg-amber-500 text-white rounded-xl hover:bg-amber-600"
                      onClick={handleClick}
                    >
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

