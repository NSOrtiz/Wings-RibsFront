import React, { useEffect, useState } from 'react';
import { AdminSellerNavBar } from '../components/NavBar';
import Footer from '../components/Footer';
import PedidoCard from '../components/PedidoCard';
import { SellerMenu } from '../components/VerticalMenu';
import { Search } from '../components/Button';

export default function VendedorPedido() {
  const [status, setStatus] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const closeDropdown = () => {
    setDropdownOpen(false);
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
      <AdminSellerNavBar />
      <section className="w-full pl-0 pr-[16px] pb-[16px] md:pr-[56px] md:pb-[56px] lg:pb-[80px] lg:pr-[80px] flex flex-row gap-2">
        <aside className="w-1/4 flex flex-col items-center hidden lg:block">
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
            <Search />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 sm:grid-cols-3 md:col-span-6 border-b border-neutral-500 mb-4">
            <p className="flex-auto text-center text-[16px] text-amber-500">Detalles de pedido</p>
            <p className="text-center text-[16px] text-amber-500">Tipo de pago</p>
            <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">Tiempo de preparación</p>
            <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">Estatus de pedido</p>
            <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">Hora aproximada de entrega</p>
            <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">Editar</p>
          </div>

          <PedidoCard />
          <PedidoCard />
          <PedidoCard />
          <PedidoCard />
          <PedidoCard />
          <div className="flex justify-end"></div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
