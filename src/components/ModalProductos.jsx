import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { SelectCategories, SelectTimeCook } from './Button';

const sharedInputClasses =
  'mt-1 block w-full border border-neutral-300 rounded-md p-2 text-[16px] font-normal  ';

export function AddProductForm({ onClose }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  // Inicializa el hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file ? file.name : null);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const onSubmit = (data) => {
    console.log('Datos del formulario:', { ...data, Image: selectedFile });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative flex flex-col w-[600px] p-[20px] bg-white rounded-[16px]">
        <div className="flex justify-end items-start gap-2 self-stretch ">
          <button
            onClick={onClose}
            className="text-[#F39C12] hover:text-amber-700"
          >
            <img src="/icons/close.svg" alt="Cerrar" className="w-5 h-5" />
          </button>
        </div>

        <h2 className="text-[#D77408] font-ubuntu text-[24px] font-bold leading-normal tracking-[0.24px] self-stretch">
          Nuevo Producto
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full p-2 gap-2"
        >
          {/* Artículo */}
          <div className="w-full flex flex-row justify-between items-center gap-2">
            <span
              className="w-full"
              style={{
                color: 'var(--Primary-Gris-500, #667473)',
                fontFamily: 'Ubuntu',
                fontSize: '20px',
                fontWeight: 700,
                lineHeight: 'normal',
                letterSpacing: '0.2px',
              }}
            >
              Artículo
              <label className="flex items-start py-2">
                <input
                  type="text"
                  {...register('Item', {
                    required: 'El artículo es requerido',
                  })}
                  className={sharedInputClasses}
                  placeholder="Nombre del producto..."
                />
              </label>
              {errors.Item && (
                <p className="text-red-500">{errors.Item.message}</p>
              )}
            </span>

            {/* Imagen */}
            <div className="w-full py-2 flex flex-col items-start">
              <p
                style={{
                  color: '#667473',
                  fontFamily: 'Ubuntu',
                  fontSize: '20px',
                  fontWeight: 700,
                }}
              >
                Imagen
              </p>
              <div className="flex flex-col items-start mt-2 w-full">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={handleButtonClick}
                  className="flex items-center justify-center rounded-[8px] bg-neutral-500 shadow-[4px_4px_12px_0px_rgba(0,0,0,0.12)] text-[16px] text-[var(--Primary-Gris-100,#E5E8E7)] font-ubuntu font-medium leading-normal tracking-[0.2px] py-2 px-4"
                  style={{
                    borderRadius: '8px',
                    background: '#667473',
                    boxShadow: '4px 4px 12px 0px rgba(0, 0, 0, 0.12)',
                  }}
                >
                  Selecciona archivo:
                </button>

                <span className="flex-1 text-ellipsis overflow-hidden whitespace-nowrap text-[var(--Primary-Gris-300,#ABB5B4)] font-ubuntu text-[12px] font-medium leading-normal uppercase">
                  {selectedFile ? selectedFile : 'NO HAY ARCHIVO SELECCIONADO'}
                </span>
              </div>
            </div>
          </div>

          {/* Descripción */}
          <span
            className="w-full"
            style={{
              color: '#667473',
              fontFamily: 'Ubuntu',
              fontSize: '20px',
              fontWeight: 700,
            }}
          >
            Descripción
            <label className="flex flex-col items-start self-stretch py-2">
              <textarea
                {...register('Description', {
                  required: 'La descripción es requerida',
                })}
                className={sharedInputClasses}
                placeholder="Descripción del producto..."
                rows={4}
              />
            </label>
            {errors.Description && (
              <p className="text-red-500">{errors.Description.message}</p>
            )}
          </span>

          {/* Precio */}
          <span
            className="w-full"
            style={{
              color: '#667473',
              fontFamily: 'Ubuntu',
              fontSize: '20px',
              fontWeight: 700,
            }}
          >
            Precio
            <label className="flex flex-col py-2">
              <input
                type="text"
                {...register('Price', { required: 'El precio es requerido' })}
                className={sharedInputClasses}
                placeholder="Precio..."
              />
            </label>
            {errors.Price && (
              <p className="text-red-500">{errors.Price.message}</p>
            )}
          </span>

          {/* Categorías y tiempo de cocción */}
          <div className="flex w-full gap-4 mt-2">
            <SelectCategories />

            <SelectTimeCook />
          </div>

          {/* Descuento */}
          <div className=" flex flex-col pt-4 ">
            <div className="flex gap-3 w-full ">
              <input type="checkbox" name="check" />
              <p className="text-center text-[16px]  text-neutral-500">
                Agregar Promociones
              </p>
            </div>
            <div className="flex w-full flex-row justify-between gap-4 mt-2">
              <label className="flex flex-col w-full">
                <input
                  type="text"
                  {...register('Discount')}
                  className={sharedInputClasses}
                  placeholder="Descuento"
                />
              </label>
              <label className="flex flex-col w-full">
                <input
                  type="text"
                  {...register('Promotion')}
                  className={sharedInputClasses}
                  placeholder="Promocion"
                />
              </label>
            </div>
          </div>

          {/* Botón Guardar */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="flex justify-center items-start gap-4"
              style={{
                display: 'flex',
                width: '300px',
                padding: '12px 28px',
                justifyContent: 'center',
                borderRadius: '16px',
                border: '1px solid #F39C12',
                background: '#F39C12',
                boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.25)',
                color: '#FFFFFF',
              }}
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
