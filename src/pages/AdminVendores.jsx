import React, { useState } from 'react'; // Agregar useState aquí
import Footer from '../components/Footer';
import { AdminMenu } from '../components/VerticalMenu';
import { PaginationComponent, Search } from '../components/Button';
import { Boton } from '../components/Button';
import ProfileVendor from '../components/ProfileVendors';
import NewVendorForm from '../components/nodalVendedores'; // Importa el modal
import { AdminSellerNavBar } from '../components/NavBar';

export default function AdminVendores() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true); // Abre el modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Cierra el modal
  };
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
          } hide-cart relative top-[0] left-0 h-full w-[300px] z-50 flex flex-col items-center`}
        >
          <AdminMenu />
        </aside>
        <div className="w-full h-full p-[24px]">
          <section className="w-full flex flex-col items-stretch pl-[16px] md:pl-[56px]  pt-[16px] md:pt-[56px] lg:pt-[80px]">
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
              <p className="text-center text-[16px] text-amber-500  basis-1/4"></p>
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

            <PaginationComponent />
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
