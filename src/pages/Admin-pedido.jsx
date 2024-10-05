import { AdminSellerNavBar } from '../components/NavBar';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import PedidoCard from '../components/PedidoCard';
import { AdminMenu } from '../components/VerticalMenu';
import { Search } from '../components/Button';

export default function VendedorPedido() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <main className="w-full">
      <AdminSellerNavBar toggleMenuVisibility={toggleMenuVisibility} />
      <section className="w-full pl-0 pr-[16px] pb-[16px] md:pr-[56px] md:pb-[56px] lg:pb-[80px] lg:pr-[80px] flex flex-row gap-2 ">
        <aside
          className={`${
            isMenuVisible ? 'block' : 'hidden'
          } hide-cart relative top-[0] left-0 h-full w-[300px]  z-50 flex flex-col items-center`}
        >
          <AdminMenu />
        </aside>

        <section className="w-full flex flex-col items-stretch pl-[16px] md:pl-[56px] pt-[16px] md:pt-[56px] lg:pt-[80px]">
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

          <div
            id="ubuntu-bold"
            className="grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr]  2xl:grid-cols-[calc(22%+1px)_1fr_1fr_1fr_1fr_1fr] border-b border-neutral-500 mb-4 "
          >
            <p className="flex flex-col mb-2 items-center justify-center text-[16px] text-amber-500">
              Detalles de pedido
            </p>
            <p className="flex flex-col items-center justify-center text-[16px] text-amber-500">
              Tipo de pago
            </p>
            <p className="lg:flex flex-col items-center justify-center  text-[16px] text-amber-500 hidden">
              Tiempo de preparación
            </p>
            <p className="md:flex flex-col items-center justify-center text-[16px] text-amber-500 hidden ">
              Estatus de pedido
            </p>
            <p className="2xl:flex flex-col items-center justify-center  text-[16px] text-amber-500 hidden ">
              Hora aproximada de entrega
            </p>
            <p className="2xl:flex flex-col items-center justify-center text-[16px] text-amber-500 hidden ">
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
