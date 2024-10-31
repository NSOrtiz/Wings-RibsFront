import React, { useState } from 'react';
import axios from 'axios';

const AddInsumoModal = ({ isOpen, onClose, onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [unitsAvailable, setUnitsAvailable] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [isAvailable, setIsAvailable] = useState(true);

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
      onAddProduct(response.data); // Call the parent function to add the product to the list
      onClose(); // Close modal after adding
      resetForm(); // Reset form fields
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Error al agregar el insumo. Por favor, inténtalo de nuevo.');
    }
  };

  const resetForm = () => {
    setProductName('');
    setUnitsAvailable(0);
    setInventory(0);
    setIsAvailable(true);
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-96">
          <h2 className="text-lg font-Ubuntu font-bold mb-4">Agregar Insumo</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-Ubuntu mb-1">Nombre del Insumo</label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="border border-gray-300 rounded w-full p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-Ubuntu mb-1">Unidades Disponibles</label>
              <input
                type="number"
                value={unitsAvailable}
                onChange={(e) => setUnitsAvailable(Number(e.target.value))}
                className="border border-gray-300 rounded w-full p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-Ubuntu mb-1">Inventario</label>
              <input
                type="number"
                value={inventory}
                onChange={(e) => setInventory(Number(e.target.value))}
                className="border border-gray-300 rounded w-full p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isAvailable}
                  onChange={() => setIsAvailable(!isAvailable)}
                  className="mr-2"
                />
                Disponible
              </label>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-red-500 text-white font-Ubuntu rounded-md px-4 py-2 mr-2"
                onClick={onClose}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-[#F39C12] text-white font-Ubuntu rounded-md px-4 py-2"
              >
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default AddInsumoModal;
