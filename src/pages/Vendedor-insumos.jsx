import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import { SellerMenu } from '../components/VerticalMenu';
import { AdminSellerNavBar } from '../components/NavBar';
import { Search, PaginationComponent } from '../components/Button';
import AddInsumoModal from '../components/AddInsumoModal'; 
import EditInsumoModal from '../components/EditInsumoModal';

// Tabla de Insumos
const InsumosTable = ({ children }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full border-collapse bg-[#FAFAFA]">
        <thead>
          <tr className="bg-muted text-muted-foreground">
            <th className="p-2 text-[#F39C12] font-Ubuntu text-[16px] font-medium leading-normal text-center">Productos</th>
            <th className="p-2 text-[#F39C12] font-Ubuntu text-[16px] font-medium leading-normal text-center">Unidades Disponibles</th>
            <th className="p-2 text-[#F39C12] font-Ubuntu text-[16px] font-medium leading-normal text-center">Inventario</th>
            <th className="p-2 text-[#F39C12] font-Ubuntu text-[16px] font-medium leading-normal text-center">Disponible</th>
            <th className="p-2 text-[#F39C12] font-Ubuntu text-[16px] font-medium leading-normal text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
      <PaginationComponent />
    </div>
  );
};

// Fila de la tabla
const TableRow = ({ product, unitsAvailable, inventory, isAvailable, id, onDelete, onEdit }) => {
  const [available, setAvailable] = useState(isAvailable);

  const toggleAvailability = () => {
    setAvailable(!available);
  };

  return (
    <tr className="border-t border-b border-[#000000]">
      <td className="py-2 px-4 align-middle border-b border-[#000000]">{product}</td>
      <td className="py-2 px-4 align-middle border-b border-[#000000]">{unitsAvailable}</td>
      <td className="py-2 px-4 align-middle border-b border-[#000000]">{inventory}</td>
      <td className="py-2 px-4 align-middle border-b border-[#000000]">
        <div className="flex items-center cursor-pointer" onClick={toggleAvailability}>
          <img src={available ? '/images/switch.png' : '/images/switchapagado.png'} alt="Disponible" className="w-10 h-10" />
          <div className="ml-2 text-[#242828]">{available ? 'Disponible' : 'No disponible'}</div>
        </div>
      </td>
      <td className="py-2 px-4 align-middle flex space-x-2">
        <div className="flex justify-end space-x-2">
          <button className="bg-[#F39C12] text-white font-Ubuntu rounded px-2 py-1 text-xs border-none" onClick={() => onEdit(id)}>
            Editar
          </button>
          <button className="bg-red-500 text-white font-Ubuntu rounded px-2 py-1 text-xs border-none" onClick={() => onDelete(id)}>
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
};

// Página principal de insumos
export default function VendedorInsumos() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  const toggleMenuVisibility = () => setIsMenuVisible(!isMenuVisible);
  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);
  const openEditModal = (product) => {
    setProductToEdit(product);
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => setIsEditModalOpen(false);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/insumos');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching insumos:', error);
    }
  };

  const addProductToList = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const editProduct = async (editedProduct) => {
    try {
      // Realiza la solicitud PATCH a la API para actualizar el insumo
      await axios.patch(`http://localhost:5000/api/insumos/${productToEdit.id}`, editedProduct);
      closeEditModal(); 
      fetchProducts();  // Refresca la lista después de editar
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Error al actualizar el insumo. Por favor, inténtalo de nuevo.');
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/insumos/${id}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Error al eliminar el insumo. Por favor, inténtalo de nuevo.');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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

            {/* Barra de búsqueda */}
            <div className="w-full flex justify-end items-center mb-10">
              <Search />
            </div>

            {/* Botón "Agregar Insumos" */}
            <div className="flex justify-end mb-4">
              <button
                className="bg-[#F39C12] text-white font-Ubuntu rounded-md px-4 py-2"
                onClick={openAddModal}
              >
                Agregar Insumo
              </button>
            </div>

            <InsumosTable>
              {products.map((product) => (
                <TableRow
                  key={product.id}
                  product={product.nombre}
                  unitsAvailable={product.unidadesDisponibles}
                  inventory={product.inventario}
                  isAvailable={product.disponible}
                  onEdit={() => openEditModal(product)}
                  onDelete={deleteProduct}
                />
              ))}
            </InsumosTable>
          </section>
        </div>
      </section>
      <Footer />
      {isAddModalOpen && (
        <AddInsumoModal
          isOpen={isAddModalOpen}
          onClose={closeAddModal}
          onAddProduct={addProductToList}
        />
      )}
      {isEditModalOpen && (
        <EditInsumoModal
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          onEditProduct={editProduct} 
          productToEdit={productToEdit}
        />
      )}
    </main>
  );
}
