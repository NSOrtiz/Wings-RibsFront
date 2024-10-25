import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { SelectCategories, SelectTimeCook } from './Button';
import axios from 'axios';

const sharedInputClasses =
  'mt-1 block w-full border border-neutral-300 rounded-md p-2 text-[16px] font-normal  ';

export function AddProductForm({ onClose, selectedSubsidiary }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTimeCook, setSelectedTimeCook] = useState(0);
  const fileInputRef = useRef(null);

  // Inicializa el hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('item', data.item);
      formData.append('subsidiary', selectedSubsidiary);
      formData.append('photo', selectedFile);
      formData.append('description', data.description);
      formData.append('price', parseFloat(data.price));
      formData.append('discount', parseFloat(data.discount) || 0);
      formData.append('category', selectedCategory);
      formData.append('timecook', selectedTimeCook);

      console.log('Valor de subsidiary:', selectedSubsidiary);
      console.log('Datos enviados al backend:', formData);

      const response = await axios.post(
        'http://localhost:5000/api/item',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('Respuesta del servidor:', response.data);
      onClose(); // Cierra el formulario después de enviar los datos
    } catch (error) {
      console.error(
        'Error al enviar el formulario:',
        error.response?.data || error.message
      );
    }
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
              Artículo
              <label className="flex items-start py-2">
                <input
                  type="text"
                  {...register('item', {
                    required: 'El artículo es requerido',
                  })}
                  className={sharedInputClasses}
                  placeholder="Nombre del producto..."
                />
              </label>
              {errors.item && (
                <p className="text-red-500">{errors.item.message}</p>
              )}
            </span>
            <div className="w-full flex flex-col items-start">
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
                  accept=".png, .jpg, .jpeg"
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
                  {selectedFile
                    ? selectedFile.name
                    : 'NO HAY ARCHIVO SELECCIONADO'}
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
            <label className="flex flex-col items-start self-stretch">
              <textarea
                {...register('description', {
                  required: 'La descripción es requerida',
                })}
                className={sharedInputClasses}
                placeholder="Descripción del producto..."
                rows={4}
              />
            </label>
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
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
            <label className="flex flex-col">
              <input
                type="text"
                {...register('price', { required: 'El precio es requerido' })}
                className={sharedInputClasses}
                placeholder="Precio..."
              />
            </label>
            {errors.price && (
              <p className="text-red-500">{errors.price.message}</p>
            )}
          </span>

          {/* Categorías y tiempo de cocción */}
          <div className="flex w-full gap-4 mt-2">
            <SelectCategories onSelect={setSelectedCategory} />

            <SelectTimeCook onSelect={setSelectedTimeCook} />
          </div>

          {/* Descuento */}

          <span
            className="w-full pt-2"
            style={{
              color: '#667473',
              fontFamily: 'Ubuntu',
              fontSize: '20px',
              fontWeight: 700,
            }}
          >
            Descuentos
            <label className="flex flex-col w-full">
              <input
                type="text"
                {...register('discount')}
                className={sharedInputClasses}
                placeholder="Descuento"
              />
            </label>
          </span>

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

export function EditProductForm({ onClose, productData }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(
    productData.category
  );
  const [selectedTimeCook, setSelectedTimeCook] = useState(
    productData.timecook
  );
  const [selectedSubsidiary, setSelectedSubsidiary] = useState(
    productData.subsidiary || ''
  );

  const fileInputRef = useRef(null);

  // Inicializa el hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    console.log('Product Data:', productData);
    reset(productData);
  }, [productData, reset]);

  const onSubmit = async (data) => {
    if (!productData._id) {
      console.error('El ID del producto no está definido.');
      return;
    }
    try {
      const formData = new FormData();
      formData.append('item', data.item);
      formData.append('description', data.description);
      formData.append('price', parseFloat(data.price));
      formData.append('discount', parseFloat(data.discount) || 0);
      formData.append('category', selectedCategory);
      formData.append('timecook', selectedTimeCook);
      formData.append('subsidiary', selectedSubsidiary);
      if (selectedFile) {
        formData.append('photo', selectedFile);
      }
      console.log('Datos enviados al backend:', formData);

      const response = await axios.put(
        `http://localhost:5000/api/items/${productData._id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('Respuesta del servidor:', response.data);
      onClose();
    } catch (error) {
      console.error(
        'Error al enviar el formulario:',
        error.response?.data || error.message
      );
    }
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
          Editar producto
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full p-2 gap-2"
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
              Artículo
              <label className="flex items-start py-2">
                <input
                  type="text"
                  {...register('item', {
                    required: 'El artículo es requerido',
                  })}
                  className={sharedInputClasses}
                  placeholder="Nombre del producto..."
                />
              </label>
              {errors.item && (
                <p className="text-red-500">{errors.item.message}</p>
              )}
            </span>

            <div className="w-full flex flex-col items-start">
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
                  accept=".png, .jpg, .jpeg"
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
                  {selectedFile
                    ? selectedFile.name
                    : 'NO HAY ARCHIVO SELECCIONADO'}
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
            <label className="flex flex-col items-start self-stretch">
              <textarea
                {...register('description', {
                  required: 'La descripción es requerida',
                })}
                className={sharedInputClasses}
                placeholder="Descripción del producto..."
                rows={4}
              />
            </label>
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
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
            <label className="flex flex-col">
              <input
                type="text"
                {...register('price', { required: 'El precio es requerido' })}
                className={sharedInputClasses}
                placeholder="Precio..."
              />
            </label>
            {errors.price && (
              <p className="text-red-500">{errors.price.message}</p>
            )}
          </span>

          {/* Categorías y tiempo de cocción */}
          <div className="flex w-full gap-4 mt-2">
            <SelectCategories onSelect={setSelectedCategory} />

            <SelectTimeCook onSelect={setSelectedTimeCook} />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="subsidiary"
              className="text-[#667473] font-semibold font-ubuntu text-[20px] py-2"
            >
              Sucursal
            </label>
            <select
              id="subsidiary"
              onChange={(e) => setSelectedSubsidiary(e.target.value)}
              value={selectedSubsidiary}
              className="pl-10 pr-10 h-12 border border-neutral-300 rounded-md shadow-sm px-2 py-1 bg-white text-[16px] text-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600"
            >
              {selectedSubsidiary === '' && <option value="">Sucursal</option>}
              <option value="Paseo Loma Real">Paseo Loma Real</option>
              <option value="Salinas Puga">Salinas Puga</option>
              <option value="Ruiz Cortinez">Ruiz Cortinez</option>
            </select>
          </div>

          {/* Descuento */}

          <span
            className="w-full pt-2"
            style={{
              color: '#667473',
              fontFamily: 'Ubuntu',
              fontSize: '20px',
              fontWeight: 700,
            }}
          >
            Descuentos
            <label className="flex flex-col w-full">
              <input
                type="text"
                {...register('discount')}
                className={sharedInputClasses}
                placeholder="Descuento"
              />
            </label>
          </span>

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
