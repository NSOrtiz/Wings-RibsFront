<<<<<<< HEAD
import React from 'react';
import NavBarManager from '../components/NavBarManger';
import Footer from '../components/Footer';
import { SellerMenu } from '../components/VerticalMenu';
import { Search } from '../components/Button';
import Inventarios from '../components/Inventario';

export default function VendedorInsumos() {
  return (
    <main className="w-full">
      <NavBarManager />
      <section className="w-full pl-0 pr-[16px] pb-[16px] md:pr-[56px] md:pb-[56px] lg:pb-[80px] lg:pr-[80px] flex flex-row gap-2 ">
        <aside className=" w-1/4 md:flex flex-col items-center hidden ">
          <SellerMenu />
        </aside>
        <div className="overflow-scroll w-full h-full p-[20px]">
          <section className="w-full flex flex-col items-stretch pl-[16px] pt-[16px] md:pt-[56px] lg:pt-[80px]">
            <div
              id="ubuntu-bold"
              className="w-full border-b border-amber-500 mb-4 text-amber-500 text-[32px]"
            >
              Insumos
            </div>

            <div className="w-full flex justify-between items-center mb-20">
              <div className="flex space-x-4">
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
              </div>
              <Search />
            </div>

            <div className=" flex flex-row gap-8 border-b border-neutral-500 mb-6">
              <p className="col-span-full text-center text-[16px] text-amber-500 basis-1/3">
                productos
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
            <div className="flex justify-end">
              {' '}
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
=======
import React, { useState } from 'react';
import { AdminSellerNavBar } from '../components/NavBar';
import Footer from '../components/Footer';
import { SellerMenu } from '../components/VerticalMenu';
import { Search } from '../components/Button';

const InsumosTable = ({ children }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full border-collapse bg-neutral-100">
        <thead>
          <tr className="bg-muted text-muted-foreground">
            <th className="p-2 w-1/4 text-amber-500 font-Ubuntu text-[16px] font-medium leading-normal">
              Productos
            </th>
            <th className="p-2 w-1/5 text-amber-500 font-Ubuntu text-[16px] font-medium leading-normal text-center">
              Unidades Disponibles
            </th>
            <th className="p-2 w-1/5 text-amber-500 font-Ubuntu text-[16px] font-medium leading-normal text-center">
              Inventario
            </th>
            <th className="p-2 w-full text-amber-500 font-Ubuntu text-[16px] font-medium leading-normal ">
              Disponible
            </th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
      <PaginationComponent />
    </div>
  );
};

const TableRow = ({ product, unitsAvailable, inventory }) => {
  const [isAvailable, setIsAvailable] = useState(false);

  const toggleAvailability = () => {
    setIsAvailable(!isAvailable);
  };

  return (
    <tr className="border-t border-b border-neutral-800">
      <td className="py-2 w-1/4 px-4 align-middle border-b border-neutral-800 ">
        {product}
      </td>
      <td className="py-2 w-1/5 px-4 align-middle border-b border-neutral-800 text-center">
        {unitsAvailable}
      </td>
      <td className="py-2 w-1/5 px-4 align-middle border-b border-neutral-800 text-center">
        {inventory}
      </td>
      <td className="py-2 w-full px-4 align-middle border-b border-neutral-800">
        <div
          className="flex items-center cursor-pointer"
          onClick={toggleAvailability}
        >
          <img
            src={isAvailable ? '/icons/on.svg' : '/icons/off.svg'}
            alt="Disponible"
            className="w-10 h-10"
          />
          <div className="ml-2 text-neutral-800">
            {isAvailable ? 'Disponible' : 'No disponible'}
          </div>
        </div>
      </td>
    </tr>
  );
};

const PaginationComponent = () => {
  return (
    <div className="flex flex-col mt-4">
      <div className="flex justify-end items-center gap-4 p-2">
        <span className="font-Roboto text-[12px] font-normal text-amber-600">
          Páginas
        </span>
        <div className="flex items-center gap-2">
          <span className="font-Roboto text-[12px] font-normal text-amber-600">
            10
          </span>
          <img src="/icons/Flechadepaginacion.svg" alt="Flecha de paginación" />
        </div>
        <span className="font-Roboto text-[12px] font-normal text-amber-600">
          1-5 de 13
        </span>
        <div className="flex gap-2">
          <img
            src="/icons/flechaizquierdapaginacion.svg"
            alt="Flecha izquierda"
          />
          <img src="/icons/flechaderechapaginacion.svg" alt="Flecha derecha" />
        </div>
      </div>
    </div>
  );
};

export default function Insumos() {
  return (
    <main className="w-full">
      <AdminSellerNavBar />
      <section className="w-full pl-0 pr-[16px] pb-[16px] md:pr-[56px] md:pb-[56px] lg:pb-[80px] lg:pr-[80px] flex flex-row gap-2">
        <aside className="w-1/4 flex flex-col items-center hidden lg:block  ">
          <SellerMenu />
        </aside>

        <section className="w-full flex flex-col items-stretch pl-[16px] pt-[16px] md:pt-[56px] lg:pt-[80px]">
          <div
            id="ubuntu-bold"
            className="w-full border-b border-amber-500 mb-4 text-amber-500 text-[32px]"
          >
            Insumos
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

          <InsumosTable>
            <TableRow
              product="Wings"
              unitsAvailable={<span className="text-center">60</span>}
              inventory={<span className="text-center">80/300</span>}
            />
            <TableRow
              product="Boneless"
              unitsAvailable={<span className="text-center">60</span>}
              inventory={<span className="text-center">80/300</span>}
            />
            <TableRow
              product="Verdura"
              unitsAvailable={60}
              inventory={<span className="text-center">80/300</span>}
            />
            <TableRow
              product="Pollo"
              unitsAvailable={<span className="text-center">60</span>}
              inventory={<span className="text-center">80/300</span>}
            />
            <TableRow
              product="Cheese Sticks"
              unitsAvailable={<span className="text-center">60</span>}
              inventory={<span className="text-center">80/300</span>}
            />
            <TableRow
              product="Aros de cebolla"
              unitsAvailable={<span className="text-center">60</span>}
              inventory={<span className="text-center">80/300</span>}
            />
            <TableRow
              product="Papas"
              unitsAvailable={<span className="text-center">60</span>}
              inventory={<span className="text-center">80/300</span>}
            />
            <TableRow
              product="Papas con queso"
              unitsAvailable={<span className="text-center">60</span>}
              inventory={<span className="text-center">80/300</span>}
            />
            <TableRow
              product="Ribs"
              unitsAvailable={<span className="text-center">60</span>}
              inventory={<span className="text-center">80/300</span>}
            />
            <TableRow
              product="Wings"
              unitsAvailable={<span className="text-center">60</span>}
              inventory={<span className="text-center">80/300</span>}
            />
          </InsumosTable>
        </section>
>>>>>>> 022430b35eec9dde3fb084591cd79fcb0176a1a8
      </section>
      <Footer />
    </main>
  );
}
