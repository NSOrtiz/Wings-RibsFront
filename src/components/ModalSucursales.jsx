import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { SelectCategories, SelectTimeCook } from './Button';

const sharedInputClasses =
  'mt-1 block w-full border border-neutral-300 rounded-md p-2 text-[16px] font-normal  ';

export function AddStore({ onClose }) {
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
          Nuevo sucursal
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full p-2 gap-4"
        >
          {/* Artículo */}
          <div className="w-full flex flex-row justify-between items-center gap-4">
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
              Nombre
              <label className="flex items-start py-2">
                <input
                  type="text"
                  {...register('Item', {
                    required: 'Nombre',
                  })}
                  className={sharedInputClasses}
                  placeholder="Nombre del producto..."
                />
              </label>
              {errors.Item && (
                <p className="text-red-500">{errors.Item.message}</p>
              )}
            </span>
          </div>

          {/* Direccion */}
          <div className=" flex flex-col pt-4 ">
            <div className="flex gap-3 w-full ">
              <p
                className="w-full"
                style={{
                  color: '#667473',
                  fontFamily: 'Ubuntu',
                  fontSize: '20px',
                  fontWeight: 700,
                }}
              >
                Dirección
              </p>
            </div>
            <div className="flex w-full flex-row justify-between gap-4 mt-2">
              <label className="flex flex-col w-full">
                <input
                  type="text"
                  {...register('calle')}
                  className={sharedInputClasses}
                  placeholder="Calle #"
                />
              </label>
              <label className="flex flex-col w-full">
                <input
                  type="text"
                  {...register('Colonia')}
                  className={sharedInputClasses}
                  placeholder="Colonia"
                />
              </label>
            </div>
            <div className="flex w-full flex-row justify-between gap-4 mt-2">
              <label className="flex flex-col w-full">
                <input
                  type="text"
                  {...register('Estado')}
                  className={sharedInputClasses}
                  placeholder="Estado"
                />
              </label>
              <label className="flex flex-col w-full">
                <input
                  type="text"
                  {...register('CP')}
                  className={sharedInputClasses}
                  placeholder="CP"
                />
              </label>
            </div>
          </div>
          <div className=" flex flex-col pt-4 ">
            <div className="flex gap-3 w-full ">
              <p
                className="w-full"
                style={{
                  color: '#667473',
                  fontFamily: 'Ubuntu',
                  fontSize: '20px',
                  fontWeight: 700,
                }}
              >
                Contacto
              </p>
            </div>
            <div className="flex w-full flex-row justify-between gap-4 mt-2">
              <label className="flex flex-col w-full">
                <input
                  type="text"
                  {...register('email')}
                  className={sharedInputClasses}
                  placeholder="Correo electronico"
                />
              </label>
              <label className="flex flex-col w-full">
                <input
                  type="text"
                  {...register('Tel')}
                  className={sharedInputClasses}
                  placeholder="Teléfono"
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
