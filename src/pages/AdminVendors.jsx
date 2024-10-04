import React, { useState } from 'react'; // Agregar useState aquí
import NavBarManager from '../components/NavBarManger';
import Footer from '../components/Footer';
import { AdminMenu } from '../components/VerticalMenu';
import { Search } from '../components/Button';
import { Boton } from '../components/Button';
import ProfileVendor from '../components/ProfileVendors';
import NewVendorForm from '../components/nodalVendedores'; // Importa el modal

export default function AdminVendores() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

  const handleOpenModal = () => {
    setIsModalOpen(true); // Abre el modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Cierra el modal
  };
  return (
    <main className="w-full">
      <NavBarManager />
      <section className="w-full pl-0 pr-[16px] pb-[16px] md:pr-[56px] md:pb-[56px] lg:pb-[80px] lg:pr-[80px] flex flex-row gap-2 ">
        <aside className=" w-1/4 md:flex flex-col items-center hidden ">
          <AdminMenu />
        </aside>
        <div className="overflow-scroll w-full h-full p-[24px]">
          <section className="w-full flex flex-col items-stretch pl-[16px] pt-[16px] md:pt-[56px] lg:pt-[80px]">
            <div
              id="ubuntu-bold"
              className="w-full border-b border-amber-500 mb-4 text-amber-500 text-[32px]"
            >
              Vendedores
            </div>

            <div className="w-full flex pt-8 justify-between mb-20">
              <Search />
              <Boton
                texto="Agregar Vendedor"
                onClick={handleOpenModal} // Abre el modal cuando se hace clic en el botón
              />
            </div>

            <div className=" flex flex-row gap-8 border-b border-neutral-500 mb-6 font-bold">
              <p className="col-span-full text-center text-[16px] text-amber-500 basis-1/3">
                Usuario
              </p>
              <p className="text-center text-[16px] text-amber-500 basis-1/2">
                Correo
              </p>
              <p className="text-center text-[16px] text-amber-500 basis-1/2 ">
                Teléfono
              </p>
              <p className="text-center text-[16px] text-amber-500  basis-1/4">
                ID
              </p>
            </div>

            <ProfileVendor />
            <ProfileVendor />
            <ProfileVendor />
            <ProfileVendor />
            <ProfileVendor />
            <ProfileVendor />
            <ProfileVendor />
            <ProfileVendor />
            <ProfileVendor />
            <ProfileVendor />

            <div className="flex justify-end">
              <li className="font-roboto font-bold text-[12px] block rounded leading-8 p-3 text-amber-500 ">
                página 10
              </li>
              <li className="font-roboto font-bold text-[12px] block rounded leading-8 p-3 text-amber-500">
                1
              </li>
              <li className="font-roboto font-bold text-[12px] block rounded leading-8 p-3 text-amber-500">
                2
              </li>
              <li className="font-roboto font-bold text-[12px] block rounded leading-8 p-3 text-amber-500">
                3
              </li>
              <li className="font-roboto font-bold text-[12px] block rounded leading-8 p-3 text-amber-500">
                4
              </li>
              <li className="block rounded leading-8 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-9"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </li>
              <li className="block rounded leading-8 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-9"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </li>
            </div>
          </section>
        </div>
      </section>
      <Footer />
      {/* Modal para agregar vendedor */}
      {isModalOpen && (
        <NewVendorForm onClose={handleCloseModal} /> // Renderiza el modal si está abierto
      )}
    </main>
  );
}
