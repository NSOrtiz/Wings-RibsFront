import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import React, { useState, useEffect } from 'react';
import PedidoCard from '../components/PedidoCard';
import { SellerMenu } from '../components/VerticalMenu';
import { Search } from '../components/Button';

export default function VendedorPedido() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [status, setStatus] = useState('Selecciona un estado');

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = (e) => {
    if (!e.target.closest('#dropdownButton')) {
      setDropdownOpen(false);
    }
  };

  const selectStatus = (newStatus) => {
    setStatus(newStatus);
    setDropdownOpen(false);
  };

  useEffect(() => {
    window.addEventListener('click', closeDropdown);
    return () => window.removeEventListener('click', closeDropdown);
  }, []);

  return (
    <main className="w-full">
      <NavBar />
      <section className="w-full pl-0 pr-[16px] pb-[16px] md:pr-[56px] md:pb-[56px] lg:pb-[80px] lg:pr-[80px] flex flex-row gap-2">
        <aside className="w-1/4 flex flex-col items-center ">
          <SellerMenu />
        </aside>

        <section className="w-full flex flex-col items-stretch pl-[16px] pt-[16px] md:pt-[56px] lg:pt-[80px]">
          <div
            id="ubuntu-bold"
            className="w-full border-b border-amber-500 mb-4 text-amber-500 text-[32px]"
          >
            Pedidos
          </div>

          <div className="w-full flex justify-end items-center mb-10">
            {/*<div className="flex space-x-4">
              <div className="flex flex-row ">
                <img src="/icons/ViewColumn.svg" alt="columna" />
                <p className="text-[16px] text-amber-500 px-2">Columnas</p>
              </div>
              <div className="flex flex-row">
                <img src="/icons/FilterList.svg" alt="filterList" />
                <p className="text-[16px] text-amber-500 px-2">Filtros</p>
              </div>
              <div className="flex flex-row">
                <img src="/icons/TableRows.svg" alt="tabalRows" />
                <p className="text-[16px] text-amber-500 px-2">Densidad</p>
              </div>
              <div className="flex flex-row">
                <img src="/icons/SaveAlt.svg" alt="saveAlt" />
                <p className="text-[16px] text-amber-500 px-2">Exportar</p>
              </div>
            </div>*/}
            <Search />
          </div>

          <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] lg:grid-cols-[calc(33.33%+20px)_1fr_1fr_1fr_1fr_1fr] border-b border-neutral-500 mb-6">
            <p className="col-span-2 lg:col-span-1 text-center text-[16px] text-amber-500">
              Detalles de pedido
            </p>
            <p className="text-center text-[16px] text-amber-500">
              Tipo de pago
            </p>
            <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">
              Tiempo de preparación
            </p>
            <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">
              Estatus de pedido
            </p>
            <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">
              Hora aproximada de entrega
            </p>
            <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">
              Editar
            </p>
          </div>
          <PedidoCard />
          <PedidoCard />
          <PedidoCard />
          <PedidoCard />
          <PedidoCard />
          <div className="flex justify-end"> </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
