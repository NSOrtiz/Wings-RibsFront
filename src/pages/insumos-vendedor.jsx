import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

// Componente para la tabla de insumos
const InsumosTable = ({ children }) => {
  return (
    <div className="p-6 bg-transparent text-foreground w-full">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-muted text-muted-foreground">
            <th className="py-2 text-left">Productos</th>
            <th className="py-2 text-left">Unidades Disponibles</th>
            <th className="py-2 text-left">Inventario</th>
            <th className="py-2 text-left">Disponible</th>
          </tr>
        </thead>
        <tbody>
          {children} {/* Aquí se renderizan las filas de productos */}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <div className="text-[#F39C12] font-Ubuntu text-[16px] font-weight-[500]">
          Páginas 10
        </div>
        <div className="flex">
          <button className="border px-4 py-2 rounded-l bg-[#F39C12] text-white">◀</button>
          <button className="border px-4 py-2 rounded-r bg-[#F39C12] text-white">▶</button>
        </div>
      </div>
    </div>
  );
};

// Componente para cada fila de la tabla
const TableRow = ({ product, unitsAvailable, inventory }) => {
  // Estado para controlar la disponibilidad
  const [isAvailable, setIsAvailable] = useState(false); // false indica que no está disponible

  // Función para alternar el estado
  const toggleAvailability = () => {
    setIsAvailable(!isAvailable);
  };

  return (
    <tr className="border-b border-border">
      <td className="py-2">{product}</td>
      <td className="py-2">{unitsAvailable}</td>
      <td className="py-2">{inventory}</td>
      <td className="py-2 flex items-center">
        <div className="flex items-center cursor-pointer" onClick={toggleAvailability}>
          <img 
            src={isAvailable ? "/images/switch.png" : "/images/switch.png"} // Cambia la imagen según el estado
            alt="Disponible" 
            className="w-10 h-10" // Aumenté el tamaño de la imagen
          />
          <div className="flex flex-col items-start ml-2">
            <span className="text-[#242828]">{isAvailable ? 'Disponible' : 'No disponible'}</span> {/* Cambié el color a #242828 */}
          </div>
        </div>
      </td>
    </tr>
  );
};

// Componente principal de Insumos
export default function Insumos() {
  return (
    <div className="flex flex-col items-center gap-4 px-[80px] py-0 flex-1">
      <NavBar />
      <div className="flex flex-col p-[24px] gap-[30px] items-center flex-[1_0_0] bg-transparent">
        <div className="flex flex-col p-[16px] align-items: flex-start align-self: stretch">
          <div className="text-[#F39C12] font-Ubuntu text-[32px] font-weight-[700] leading-normal tracking-[0.96px]">
            Insumos
          </div>
        </div>
        <div className="flex justify-between items-center w-full p-[16px]">
          <div className="flex flex-row gap-[8px]">
            <div className="flex justify-center items-center gap-[8px]">
              <img
                src="/images/iconocolumnas.svg"
                alt="iconocolumnas"
                className="w-[20px] h-[20px]"
              />
              <div className="text-[#F39C12] font-Ubuntu text-[16px] font-weight-[500] leading-normal">
                Columnas
              </div>
            </div>
            <div className="flex justify-center items-center gap-[8px]">
              <img
                src="/images/Filtros.svg"
                alt="iconofiltros"
                className="w-[20px] h-[20px]"
              />
              <div className="text-[#F39C12] font-Ubuntu text-[16px] font-weight-[500] leading-normal">
                Filtros
              </div>
            </div>
            <div className="flex justify-center items-center gap-[8px]">
              <img
                src="/images/Exportar.svg"
                alt="iconoexportar"
                className="w-[20px] h-[20px]"
              />
              <div className="text-[#F39C12] font-Ubuntu text-[16px] font-weight-[500] leading-normal">
                Exportar
              </div>
            </div>
          </div>
          <input
            type="text"
            placeholder="Buscar..."
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <InsumosTable>
          {/* Filas de insumos */}
          <TableRow product="Wings" unitsAvailable={60} inventory="80/300" />
          <TableRow product="Boneles" unitsAvailable={60} inventory="80/300" />
          <TableRow product="Verdura" unitsAvailable={60} inventory="80/300" />
          <TableRow product="Cheese Sticks" unitsAvailable={60} inventory="80/300" />
          <TableRow product="Aros de cebolla" unitsAvailable={60} inventory="80/300" />
          <TableRow product="Papas" unitsAvailable={60} inventory="80/300" />
          <TableRow product="Papas con queso" unitsAvailable={60} inventory="80/300" />
          <TableRow product="Ribs" unitsAvailable={60} inventory="80/300" />
          <TableRow product="Wings" unitsAvailable={60} inventory="80/300" />
        </InsumosTable>
      </div>
      <Footer />
    </div>
  );
}
