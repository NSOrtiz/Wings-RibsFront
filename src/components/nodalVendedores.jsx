import React, { useState, useRef } from 'react';

const sharedInputClasses =
  'mt-1 block w-full border border-neutral-300 rounded-md p-2';
const sharedLabelClasses = 'block text-neutral-600';

const NewVendorForm = ({ onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    postalCode: '',
    branch: '',
  });
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file ? file.name : null);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    console.log('Datos del vendedor:', formData);
    // Puedes hacer una llamada a una API aquí para enviar los datos
    // Luego de enviar, cierra el modal
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      {/* Fondo semitransparente */}
      <div className="absolute flex w-[700px] h-[800px] p-[10px] flex-col justify-center items-center gap-[10px] z-40"></div>

      {/* Modal principal */}
      <div className="relative flex flex-col w-[600px] p-[20px] bg-white rounded-[16px] shadow-lg z-50">
        {/* Botón "X" */}
        <div className="flex justify-end items-start gap-2 self-stretch p-[16px_0px]">
          <button
            onClick={onClose}
            className="text-[#F39C12] hover:text-amber-700"
          >
            <img src="/icons/close.svg" alt="Cerrar" className="w-5 h-5" />
          </button>
        </div>

        {/* Título "Nuevo Vendedor" */}
        <h2 className="text-[#D77408] font-ubuntu text-[24px] font-bold leading-normal tracking-[0.24px] self-stretch">
          Nuevo Vendedor
        </h2>

        {/* Contenedor para el formulario de "Nombre vendedor" */}
        <div className="flex flex-col p-8 self-stretch">
          <span
            className="self-stretch"
            style={{
              color: 'var(--Primary-Gris-500, #667473)',
              fontFamily: 'Ubuntu',
              fontSize: '20px',
              fontWeight: 700,
              lineHeight: 'normal',
              letterSpacing: '0.2px',
            }}
          >
            Nombre vendedor
          </span>

          {/* Inputs para Nombre y Apellido */}
          <div className="flex w-full gap-4 mt-2">
            <label className="flex flex-col items-start self-stretch">
              <input
                type="text"
                name="firstName"
                className={sharedInputClasses}
                placeholder="Nombre"
                onChange={handleInputChange}
              />
            </label>

            <label className="flex flex-col items-start self-stretch">
              <input
                type="text"
                name="lastName"
                className={sharedInputClasses}
                placeholder="Apellido"
                onChange={handleInputChange}
              />
            </label>
          </div>

          {/* Sección "Foto" */}
          <span
            className="self-stretch mt-4"
            style={{
              color: 'var(--Primary-Gris-500, #667473)',
              fontFamily: 'Ubuntu',
              fontSize: '20px',
              fontWeight: 700,
              lineHeight: 'normal',
              letterSpacing: '0.2px',
            }}
          >
            Foto
          </span>

          <div className="flex items-center mt-2 w-full">
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
                background: 'var(--Primary-Gris-500, #667473)',
                boxShadow: '4px 4px 12px 0px rgba(0, 0, 0, 0.12)',
              }}
            >
              Selecciona archivo:
            </button>

            <span className="ml-4 flex-1 text-ellipsis overflow-hidden whitespace-nowrap text-[var(--Primary-Gris-300,#ABB5B4)] font-ubuntu text-[20px] font-medium leading-normal uppercase">
              {selectedFile ? selectedFile : 'NO HAY ARCHIVO SELECCIONADO'}
            </span>
          </div>
        </div>

        {/* Nuevo div separado para "Datos vendedor" */}
        <div className="flex flex-col p-8 self-stretch">
          <span
            className="self-stretch"
            style={{
              color: 'var(--Primary-Gris-500, #667473)',
              fontFamily: 'Ubuntu',
              fontSize: '20px',
              fontWeight: 700,
              lineHeight: 'normal',
              letterSpacing: '0.2px',
            }}
          >
            Datos vendedor
          </span>

          {/* Inputs para Correo Electrónico, Teléfono, Estado y CP */}
          <div className="flex w-full gap-4 mt-2">
            <label className="flex flex-col items-start self-stretch">
              <input
                type="text"
                name="email"
                className={sharedInputClasses}
                placeholder="Correo electrónico"
                onChange={handleInputChange}
              />
            </label>

            <label className="flex flex-col items-start self-stretch">
              <input
                type="text"
                name="phone"
                className={sharedInputClasses}
                placeholder="Teléfono"
                onChange={handleInputChange}
              />
            </label>
          </div>

          <div className="flex w-full gap-4 mt-2">
            <label className="flex flex-col items-start self-stretch">
              <input
                type="text"
                name="state"
                className={sharedInputClasses}
                placeholder="Estado"
                onChange={handleInputChange}
              />
            </label>

            <label className="flex flex-col items-start self-stretch">
              <input
                type="text"
                name="postalCode"
                className={sharedInputClasses}
                placeholder="CP"
                onChange={handleInputChange}
              />
            </label>
          </div>

          {/* Sucursal */}
          <span
            className="self-stretch mt-4"
            style={{
              color: 'var(--Primary-Gris-500, #667473)',
              fontFamily: 'Ubuntu',
              fontSize: '20px',
              fontWeight: 700,
              lineHeight: 'normal',
              letterSpacing: '0.2px',
            }}
          >
            Sucursal
          </span>

          {/* Nuevo label para "Sucursal" que abarca todo el espacio */}
          <label className="flex flex-col items-start self-stretch mt-2">
            <input
              type="text"
              name="branch"
              className={sharedInputClasses}
              placeholder="Sucursal"
              onChange={handleInputChange}
            />
          </label>

          {/* Botón Enviar */}
          <div className="flex justify-center mt-4">
            <button
              type="button"
              onClick={handleSubmit} // Llama a la función handleSubmit al hacer clic
              className="flex justify-center items-start gap-4"
              style={{
                display: 'flex',
                width: '300px',
                padding: 'var(--12, 12px) 28px',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '4px',
                borderRadius: 'var(--2, 16px)',
                border: '1px solid #F39C12',
                background: '#F39C12',
                boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.25)',
                color: '#FFFFFF',
              }}
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewVendorForm;
