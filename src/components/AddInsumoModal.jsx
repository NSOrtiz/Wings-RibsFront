import React, { useState } from 'react';
import axios from 'axios';

const AddInsumoModal = ({ isOpen, onClose, onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [unitsAvailable, setUnitsAvailable] = useState('');
  const [inventory, setInventory] = useState('');
  const [isAvailable, setIsAvailable] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      nombre: productName,
      unidadesDisponibles: unitsAvailable,
      inventario: inventory,
      disponible: isAvailable,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/insumos', newProduct);
      onAddProduct(response.data); // Add the new product to the list
      onClose(); // Close the modal
      resetForm(); // Reset the form fields
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Error al agregar el insumo. Por favor, inténtalo de nuevo.');
    }
  };

  const resetForm = () => {
    setProductName('');
    setUnitsAvailable('');
    setInventory('');
    setIsAvailable(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg w-1/3">
        <h2 className="text-lg font-bold mb-4">Agregar Insumo</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Nombre del Producto:</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="border rounded w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Unidades Disponibles:</label>
            <input
              type="number"
              value={unitsAvailable}
              onChange={(e) => setUnitsAvailable(e.target.value)}
              className="border rounded w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Inventario:</label>
            <input
              type="number"
              value={inventory}
              onChange={(e) => setInventory(e.target.value)}
              className="border rounded w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Disponible:</label>
            <input
              type="checkbox"
              checked={isAvailable}
              onChange={(e) => setIsAvailable(e.target.checked)}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 bg-gray-300 px-4 py-2 rounded"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-[#F39C12] text-white px-4 py-2 rounded"
            >
              Agregar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddInsumoModal;
