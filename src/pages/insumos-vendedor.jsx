import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

const TableRow = ({ product, unitsAvailable, inventory, isAvailable }) => {
  const [available, setAvailable] = useState(isAvailable);

  const toggleAvailability = () => {
    setAvailable(!available);
    // Aquí podrías realizar una llamada PUT para actualizar el producto en la base de datos
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
              available ? '/images/switch.png' : '/images/switchapagado.png'
            }
            alt="Disponible"
            className="w-10 h-10"
          />
          <div className="ml-2 text-[#242828]">
            {available ? 'Disponible' : 'No disponible'}
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
  const [products, setProducts] = useState([]);

  // Función para obtener los productos desde el backend
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/productos'); // Cambia la URL según corresponda
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
            {/* Filtros, columnas, exportar */}
            {/* Barra de búsqueda */}
            <div className="flex items-center gap-2 ml-auto border rounded-full border-[#E5E8E7] bg-[#FAFAFA] p-1">
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
            {products.map((product) => (
              <TableRow
                key={product._id}
                product={product.nombre}
                unitsAvailable={product.unidadesDisponibles}
                inventory={`${product.unidadesDisponibles}/${product.inventario}`}
                isAvailable={product.disponible}
              />
            ))}
          </InsumosTable>
        </div>
      </div>
      <Footer />
    </div>
  );
}
