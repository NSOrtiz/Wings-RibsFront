import React from 'react';

const sharedInputClasses = 'mt-1 block w-full border border-neutral-300 rounded-md p-2';
const sharedLabelClasses = 'block text-neutral-600'; 

const NewVendorForm = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-neutral-100 p-6 rounded-lg shadow-lg w-96"> 
        <h2 className="text-lg font-semibold text-amber-500">Nuevo Vendedor</h2> 
        <form className="mt-4">
          <div className="mb-4">
            <label className={sharedLabelClasses} htmlFor="vendor-name">
              Nombre vendedor
            </label>
            <input 
              type="text" 
              id="vendor-name" 
              className={sharedInputClasses} 
              placeholder="Nombre" 
            />
          </div>
          <div className="mb-4">
            <label className={sharedLabelClasses} htmlFor="vendor-photo">
              Foto
            </label>
            <input 
              type="file" 
              id="vendor-photo" 
              className={sharedInputClasses} 
            />
            <p className="text-neutral-500 text-sm">NO HAY ARCHIVO SELECCIONADO</p>
          </div>
          <div className="mb-4">
            <label className={sharedLabelClasses} htmlFor="vendor-data">
              Datos vendedor
            </label>
            <input 
              type="text" 
              id="vendor-data" 
              className={sharedInputClasses} 
              placeholder="Como vendedor" 
            />
          </div>
          <div className="mb-4">
            <input 
              type="text" 
              className={sharedInputClasses} 
              placeholder="Teléfono" 
            />
          </div>
          <div className="mb-4">
            <input 
              type="text" 
              className={sharedInputClasses} 
              placeholder="Estado" 
            />
          </div>
          <div className="mb-4">
            <input 
              type="text" 
              className={sharedInputClasses} 
              placeholder="Sucursal" 
            />
          </div>
          <button 
            type="submit" 
            className="bg-amber-500 text-white hover:bg-amber-400 w-full py-2 rounded-md">
            Enviar
          </button> 
        </form>
      </div>
    </div>
  );
};

export default NewVendorForm;
