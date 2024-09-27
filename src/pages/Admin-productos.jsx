import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { AdminMenu } from '../components/VerticalMenu';
import { Search } from '../components/Button';
import { Boton } from '../components/Button';
import ListData from '../components/ProductTable';

export default function Productos() {
  return (
    <main>
      <NavBar />
      <section className="w-full pl-0 pr-[16px] pb-[16px] md:pr-[56px] md:pb-[56px] lg:pb-[80px] lg:pr-[80px] flex flex-row gap-2">
        <aside className="w-1/4 flex flex-col items-center ">
          <AdminMenu />
        </aside>
        <div className="w-full flex flex-col items-stretch pl-[16px] pt-[16px] md:pt-[56px] lg:pt-[80px] gap-2">
          <div
            id="ubuntu-bold"
            className="w-full border-b border-amber-500 mb-4 text-amber-500 text-[32px]"
          >
            Productos
          </div>
          <div className="w-full flex flex-row justify-between pb-4">
            <Search />
            <Boton
              texto="Agregar producto  "
              onClick={() => handleClick('Has hecho clic en Comprar ahora')}
            />
          </div>
          <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] border-b border-neutral-500 mb-6">
            <p className="col-span-2 lg:col-span-1 text-center text-[16px] text-amber-500">
              Id
            </p>
            <p className="text-center text-[16px] text-amber-500">Categoria</p>
            <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">
              Foto
            </p>
            <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">
              Descripción
            </p>
            <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">
              Opciones
            </p>
            <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">
              Tiempo de preparacion
            </p>
            <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">
              Precio
            </p>
            <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">
              Promocion
            </p>
            <p className="text-center text-[16px] text-amber-500 hidden md:table-cell"></p>
          </div>
          <ListData />
        </div>
      </section>
      <Footer />
    </main>
  );
}
