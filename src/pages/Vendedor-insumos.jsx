import React, { useState } from 'react';
import Footer from '../components/Footer';
import { SellerMenu } from '../components/VerticalMenu';
import { Search } from '../components/Button';
import Inventarios from '../components/Inventario';
import { AdminSellerNavBar } from '../components/NavBar';
import { PaginationComponent } from '../components/Button';
export default function VendedorInsumos() {
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
          <SellerMenu />
        </aside>
        <div className="w-full h-full p-[20px]">
          <section className="w-full flex flex-col items-stretch pl-[16px] md:pl-[56px] pt-[16px] md:pt-[56px] lg:pt-[80px]">
            <div
              id="ubuntu-bold"
              className="w-full border-b border-amber-500 mb-4 text-amber-500 text-[32px]"
            >
              Insumos
            </div>

            <div className="w-full flex justify-end items-center mb-10">
              <Search />
            </div>

            <div
              id="ubuntu-bold"
              className=" flex flex-row gap-8 border-b border-neutral-500 mb-6"
            >
              <p className="col-span-full text-center text-[16px] text-amber-500 basis-1/3">
                Productos
              </p>
              <p className="text-center text-[16px] text-amber-500 basis-1/2">
                Unidades Disponibles
              </p>
              <p className="text-center text-[16px] text-amber-500 basis-1/2 ">
                Inventario
              </p>
              <p className="text-center text-[16px] text-amber-500  basis-1/4">
                Disponible
              </p>
            </div>
            <Inventarios />
            <Inventarios />
            <Inventarios />
            <Inventarios />
            <Inventarios />
            <Inventarios />
            <Inventarios />
            <Inventarios />
            <Inventarios />
            <Inventarios />
            <Inventarios />
            <Inventarios />
            <PaginationComponent />
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
}
