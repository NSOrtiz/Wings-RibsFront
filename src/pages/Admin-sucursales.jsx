import React, { useState } from 'react';
import { AdminSellerNavBar } from '../components/NavBar';
import Footer from '../components/Footer';
import { AdminMenu } from '../components/VerticalMenu';
import { Boton } from '../components/Button';
import TableStores from '../components/Table-stores';
import { AddStore } from '../components/ModalSucursales.jsx';

export default function Productos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <main>
      <AdminSellerNavBar toggleMenuVisibility={toggleMenuVisibility} />
      <section className="w-full pl-0 pr-[16px] pb-[16px] md:pr-[56px] md:pb-[56px] lg:pb-[80px] lg:pr-[80px] flex flex-row gap-2 ">
        <aside
          className={`${
            isMenuVisible ? 'block' : 'hidden'
          } hide-cart relative top-[0] left-0 h-full w-[300px] z-50 flex flex-col items-center`}
        >
          <AdminMenu />
        </aside>
        <div className="w-full flex flex-col items-stretch pl-[16px] md:pl-[56px] pt-[16px] md:pt-[56px] lg:pt-[80px] gap-2">
          <div
            id="ubuntu-bold"
            className="w-full border-b border-amber-500 mb-4 text-amber-500 text-[32px]"
          >
            Sucursales
          </div>
          <div className="w-full flex flex-row items-center justify-end gap-4 pb-4">
            <Boton texto="Agregar Sucursal" onClick={handleOpenModal} />
          </div>
          <div
            id="ubuntu-bold"
            className=" grid grid-cols-[1fr_1fr_1fr_1fr_1fr] border-b border-neutral-500 mb-6"
          >
            <p className="col-span-2 lg:col-span-1 text-center text-[16px] text-amber-500">
              Nombre
            </p>
            <p className="text-center text-[16px] text-amber-500">Direccion</p>
            <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">
              Teléfono
            </p>
            <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">
              ID
            </p>
            <p className="text-center text-[16px] text-amber-500 hidden md:table-cell"></p>
          </div>
          <TableStores />
        </div>
      </section>
      <Footer />
      {isModalOpen && (
        <AddStore onClose={handleCloseModal} /> // Renderiza el modal si está abierto
      )}
    </main>
  );
}
