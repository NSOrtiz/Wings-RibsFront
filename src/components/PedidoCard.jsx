import React, { useState, useEffect } from 'react';
import EstatusDePedidoVendedorAdmin from './Estatus-de-pedido';

export default function PedidoCard({ items, selectedSubsidiary }) {
  const [mostrarDetalles, setMostrarDetalles] = useState(false);
  const toggleDetalles = () => {
    setMostrarDetalles(!mostrarDetalles);
  };

  const [dropdownOpen, setDropdownOpen] = useState({});
  const [status, setStatus] = useState({});

  const statusColors = {
    Pendiente: 'bg-[#FFE89D4D] text-[#D77408]',
    'En preparación': 'bg-[#FFAD734D] text-[#C73702]',
    'En camino': 'bg-[#5EC8FD4D] text-[#0F015EB2]',
    Entregado: 'bg-[#6BDBA34D] text-[#004D0BB2]',
    Cancelado: 'bg-[#F047474D] text-[#740000B2]',
  };

  useEffect(() => {
    const initialStatus = {};
    items.forEach((item) => {
      initialStatus[item._id] = item.status;
    });
    setStatus(initialStatus);
  }, [items]);

  const toggleDropdown = (id) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const closeDropdown = (e) => {
    if (!e.target.closest('.dropdown')) {
      setDropdownOpen({});
    }
  };

  const selectStatus = async (id, newStatus, e) => {
    e.preventDefault();

    setStatus((prev) => ({
      ...prev,
      [id]: newStatus,
    }));

    try {
      await fetch(`http://localhost:5000/api/pedido/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      setDropdownOpen((prev) => ({
        ...prev,
        [id]: false,
      }));
    } catch (error) {
      console.error('Error al actualizar el estado:', error);

      setStatus((prev) => ({
        ...prev,
        [id]: items.find((item) => item._id === id).status,
      }));
    }
  };

  useEffect(() => {
    window.addEventListener('click', closeDropdown);
    return () => window.removeEventListener('click', closeDropdown);
  }, []);

  return (
    <main>
      <section className="p-4">
        {items && items.length > 0 ? (
          items.map((item) => (
            <div
              key={item._id}
              className="grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr] 2xl:grid-cols-[calc(22%+1px)_1fr_1fr_1fr_1fr_1fr] border-b border-neutral-500 mb-4"
            >
              <div className="flex flex-col mb-2 items-center">
                <div className="text-center mb-1 text-[16px]">Cliente</div>
                <div className="flex space-x-1 items-center">
                  <div className="flex-col text-center hidden 2xl:flex">
                    {item.products && item.products.length > 0 ? (
                      item.products.map((product, index) => (
                        <p key={product.id || index} className="text-[16px]">
                          {item.detail}
                        </p>
                      ))
                    ) : (
                      <p>No hay productos disponibles</p>
                    )}
                  </div>
                  <div className="flex flex-col p-2 text-center">
                    <div className="flex flex-row">
                      <p className="text-[16px] px-2">Total:</p>
                      <p
                        id="ubuntu-bold"
                        className="text-amber-500 text-[16px]"
                      >
                        ${item.total} mxn
                      </p>
                    </div>
                    <p className="text-[16px]">Hora de pedido</p>
                    <div className="flex flex-col p-2 text-center">
                      <button
                        className="mt-2 bg-amber-500 text-white rounded-md px-2 py-1"
                        onClick={toggleDetalles}
                      >
                        Ver detalles
                      </button>
                    </div>
                  </div>
                  {mostrarDetalles && (
                    <EstatusDePedidoVendedorAdmin onClose={toggleDetalles} />
                  )}
                </div>
              </div>

              <div className="flex flex-col items-center justify-center">
                <p className="text-center text-[16px]">{item.typeofPayment}</p>
              </div>

              <div className="hidden lg:flex flex-col items-center justify-center">
                <p className="text-center text-[16px]">{item.time} min</p>
              </div>

              <div className="hidden md:flex flex-col items-center justify-center">
                <div className="relative inline-block dropdown">
                  <button
                    id={`dropdownButton-${item._id}`}
                    className={`inline-flex justify-between rounded-md border border-neutral-300 shadow-sm px-2 py-1 ${statusColors[status[item._id]] || 'bg-white'} text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                    type="button"
                    onClick={() => toggleDropdown(item._id)}
                  >
                    {status[item._id]}
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06 0L10 10.44l3.71-3.23a.75.75 0 111.06 1.06l-4.25 3.6a.75.75 0 01-1.06 0l-4.25-3.6a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {dropdownOpen[item._id] && (
                    <div
                      className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby={`dropdownButton-${item.status}`}
                    >
                      <div className="py-1" role="none">
                        {Object.keys(statusColors).map((statusOption) => (
                          <a
                            key={statusOption}
                            href="#"
                            className="text-gray-700 block px-4 py-2 text-sm hover:bg-amber-600"
                            role="menuitem"
                            onClick={(e) =>
                              selectStatus(item._id, statusOption, e)
                            }
                          >
                            {statusOption}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="hidden 2xl:flex flex-col items-center justify-center">
                <p className="text-left text-[16px]">{item.timeofdeliver}</p>
              </div>

              <div className="hidden 2xl:flex flex-col items-center justify-center">
                <img
                  src="/icons/edit-yellow.svg"
                  alt=""
                  className="w-[30px] h-[30px] cursor-pointer hover:scale-125"
                />
              </div>
            </div>
          ))
        ) : (
          <p>No hay pedidos disponibles.</p>
        )}
      </section>
    </main>
  );
}
