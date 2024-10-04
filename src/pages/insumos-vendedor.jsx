import React, { useState } from 'react';
import { AdminSellerNavBar } from '../components/NavBar';
import Footer from '../components/Footer';

const InsumosTable = ({ children }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full border-collapse bg-[#FAFAFA]">
        <thead>
          <tr className="bg-muted text-muted-foreground">
            <th className="p-2 text-[#F39C12] font-Ubuntu text-[16px] font-medium leading-normal text-center">
              Productos
            </th>
            <th className="p-2 text-[#F39C12] font-Ubuntu text-[16px] font-medium leading-normal text-center">
              Unidades Disponibles
            </th>
            <th className="p-2 text-[#F39C12] font-Ubuntu text-[16px] font-medium leading-normal text-center">
              Inventario
            </th>
            <th className="p-2 text-[#F39C12] font-Ubuntu text-[16px] font-medium leading-normal text-center">
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
    <tr className="border-t border-b border-[#000000]">
      <td className="py-2 px-4 align-middle border-b border-[#000000]">
        {product}
      </td>
      <td className="py-2 px-4 align-middle border-b border-[#000000]">
        {unitsAvailable}
      </td>
      <td className="py-2 px-4 align-middle border-b border-[#000000]">
        {inventory}
      </td>
      <td className="py-2 px-4 align-middle border-b border-[#000000]">
        <div
          className="flex items-center cursor-pointer"
          onClick={toggleAvailability}
        >
          <img
            src={
              isAvailable ? '/images/switch.png' : '/images/switchapagado.png'
            }
            alt="Disponible"
            className="w-10 h-10"
          />
          <div className="ml-2 text-[#242828]">
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
        <span className="font-Roboto text-[12px] font-normal text-[#D77408]">
          Páginas
        </span>
        <div className="flex items-center gap-2">
          <span className="font-Roboto text-[12px] font-normal text-[#D77408]">
            10
          </span>
          <img
            src="/images/Flechadepaginacion.svg"
            alt="Flecha de paginación"
          />
        </div>
        <span className="font-Roboto text-[12px] font-normal text-[#D77408]">
          1-5 de 13
        </span>
        <div className="flex gap-2">
          <img
            src="/images/flechaizquierdapaginacion.svg"
            alt="Flecha izquierda"
          />
          <img src="/images/flechaderechapaginacion.svg" alt="Flecha derecha" />
        </div>
      </div>
    </div>
  );
};

export default function Insumos() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-[#FAFAFA]">
      <AdminSellerNavBar />
      <div className="flex flex-col items-center justify-center flex-1 w-full p-4 md:p-8 lg:p-8 xl:p-10">
        {/* Contenedor de Datos con el Título */}
        <div className="w-full max-w-6xl bg-[#FAFAFA] shadow-lg rounded-lg p-6">
          <h1 className="text-[#F39C12] font-Ubuntu text-[24px] md:text-[32px] font-bold tracking-[0.96px] leading-normal mb-4 self-stretch">
            Insumos
          </h1>
          {/* Contenedor para "Columnas", "Filtros", "Exportar" y la barra de búsqueda */}
          <div className="relative flex items-center self-stretch gap-2 mb-4 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="flex items-start gap-2">
                <img
                  src="/images/iconocolumnas.svg"
                  alt="Icono Columnas"
                  className="w-6 h-6"
                />
                <span className="text-[#F39C12] font-Ubuntu text-[16px] font-medium leading-normal">
                  Columnas
                </span>
              </div>
              <div className="flex items-start gap-2">
                <img
                  src="/images/Filtros.svg"
                  alt="Icono Filtros"
                  className="w-6 h-6"
                />
                <span className="text-[#F39C12] font-Ubuntu text-[16px] font-medium leading-normal">
                  Filtros
                </span>
              </div>
              <div className="flex items-start gap-2">
                <img
                  src="/images/Exportar.svg"
                  alt="Icono Exportar"
                  className="w-6 h-6"
                />
                <span className="text-[#F39C12] font-Ubuntu text-[16px] font-medium leading-normal">
                  Exportar
                </span>
              </div>
            </div>
            {/* Barra de Búsqueda dentro del contenedor */}
            <div className="flex items-center gap-2 ml-auto border rounded-full border-[#E5E8E7] bg-[#FAFAFA] p-1">
              {/* Imagen de la lupa */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M25.7006 23.0494L20.9409 18.2897C21.9244 16.8075 22.5 15.0328 22.5 13.125C22.5 7.95563 18.2944 3.75 13.125 3.75C7.95563 3.75 3.75 7.95563 3.75 13.125C3.75 18.2944 7.95563 22.5 13.125 22.5C15.0328 22.5 16.8075 21.9244 18.2897 20.9409L23.0494 25.7006C23.7806 26.4328 24.9694 26.4328 25.7006 25.7006C26.4328 24.9684 26.4328 23.7816 25.7006 23.0494ZM6.5625 13.125C6.5625 9.50625 9.50625 6.5625 13.125 6.5625C16.7437 6.5625 19.6875 9.50625 19.6875 13.125C19.6875 16.7437 16.7437 19.6875 13.125 19.6875C9.50625 19.6875 6.5625 16.7437 6.5625 13.125Z"
                  fill="#F39C12"
                />
              </svg>
              <input
                type="text"
                placeholder="Buscar..."
                className="outline-none w-full h-[36px]"
                style={{
                  padding: '0 8px',
                  color: '#667473',
                  fontFamily: 'Ubuntu',
                  fontSize: '16px',
                  fontWeight: '400',
                  background: 'transparent',
                }}
              />
            </div>
          </div>
          <InsumosTable>
            <TableRow product="Wings" unitsAvailable={60} inventory="80/300" />
            <TableRow
              product="Boneless"
              unitsAvailable={60}
              inventory="80/300"
            />
            <TableRow
              product="Verdura"
              unitsAvailable={60}
              inventory="80/300"
            />
            <TableRow product="Pollo" unitsAvailable={60} inventory="80/300" />
            <TableRow
              product="Cheese Sticks"
              unitsAvailable={60}
              inventory="80/300"
            />
            <TableRow
              product="Aros de cebolla"
              unitsAvailable={60}
              inventory="80/300"
            />
            <TableRow product="Papas" unitsAvailable={60} inventory="80/300" />
            <TableRow
              product="Papas con queso"
              unitsAvailable={60}
              inventory="80/300"
            />
            <TableRow product="Ribs" unitsAvailable={60} inventory="80/300" />
            <TableRow product="Wings" unitsAvailable={60} inventory="80/300" />
          </InsumosTable>
        </div>
      </div>
      <Footer />
    </div>
  );
}
