import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Boton } from './Button';
import axios from 'axios';

const sharedInputClasses =
  'mt-1 block w-full border border-neutral-300 rounded-md p-2 text-[16px] font-normal  ';

export function FormStore({ onClose, onSubmit, formName, subsidiaryData }) {
  // Inicializa el hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
          {formName}
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit, (errors) => {
            console.error('Error en el formulario:', errors);
          })}
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
                  {...register('name', {
                    required: 'Nombre',
                  })}
                  className={sharedInputClasses}
                  defaultValue={subsidiaryData.name}
                  placeholder="Nombre del sucursal..."
                />
              </label>
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
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
                  {...register('street')}
                  className={sharedInputClasses}
                  defaultValue={subsidiaryData.street}
                  placeholder="Calle #"
                />
              </label>
              <label className="flex flex-col w-full">
                <input
                  type="text"
                  {...register('town')}
                  className={sharedInputClasses}
                  defaultValue={subsidiaryData.town}
                  placeholder="Municipio"
                />
              </label>
            </div>
            <div className="flex w-full flex-row justify-between gap-4 mt-2">
              <label className="flex flex-col w-full">
                <input
                  type="text"
                  {...register('state')}
                  className={sharedInputClasses}
                  defaultValue={subsidiaryData.state}
                  placeholder="Estado"
                />
              </label>
              <label className="flex flex-col w-full">
                <input
                  type="text"
                  {...register('cpnum')}
                  className={sharedInputClasses}
                  defaultValue={subsidiaryData.cpnum}
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
                  defaultValue={subsidiaryData.email}
                  placeholder="Correo electronico"
                />
              </label>
              <label className="flex flex-col w-full">
                <input
                  type="text"
                  {...register('phone')}
                  className={sharedInputClasses}
                  defaultValue={subsidiaryData.phone}
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

export function AddStore({ onClose }) {
  const [error, setError] = useState(null);
  const onSubmit = async (data) => {
    try {
      console.log('Datos a enviar:', data);
      const response = await axios.post(
        'http://localhost:5000/api/subsidiary',
        data,
        /*{
          name: data.name,
          street: data.street,
          town: data.town,
          state: data.state,
          cpnum: data.cpnum,
          email: data.email,
          phone: data.phone,
        }*/ {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Respuesta del servidor:', response.data);
      onClose();
    } catch (error) {
      if (error.response?.status === 400) {
        setError('Este correo ya está registrado para otra sucursal');
      } else {
        setError('Error al enviar el formulario');
      }
      console.error(error);
    }
  };

  return (
    <>
      <FormStore
        onSubmit={onSubmit}
        onClose={onClose}
        formName="Nueva Sucursal"
        subsidiaryData={{
          name: '',
          street: '',
          town: '',
          state: '',
          cpnum: '',
          phone: '',
          email: '',
        }}
      />
      {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
    </>
  );
}

export function EditSubsidiaryForm({ onClose, subsidiaryData }) {
  const [error, setError] = useState(null);
  const { reset } = useForm();
  useEffect(() => {
    console.log('Product Data:', subsidiaryData);

    reset({
      name: subsidiaryData.name,
      street: subsidiaryData.street,
      town: subsidiaryData.town,
      state: subsidiaryData.state,
      cpnum: subsidiaryData.cpnum,
      phone: subsidiaryData.phone,
      email: subsidiaryData.email,
    });
  }, [subsidiaryData, reset]);

  const onSubmit = async (data) => {
    try {
      if (!subsidiaryData._id) {
        console.error('El ID de la sucursal no esta definida.');
        return;
      }
      console.log('Datos a enviar:', data);
      const response = await axios.put(
        `http://localhost:5000/api/subsidiary/${subsidiaryData._id}`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Respuesta del servidor:', response.data);
      onClose();
    } catch (error) {
      if (error.response?.status === 400) {
        setError('Este correo ya está registrado para otra sucursal');
      } else {
        setError('Error al enviar el formulario');
      }
      console.error(error);
    }
  };

  return (
    <FormStore
      onSubmit={onSubmit}
      onClose={onClose}
      formName="Editar Sucursal"
      subsidiaryData={subsidiaryData}
    />
  );
}

export function DeleteSubsidiary({ onClose, subsidiaryData }) {
  const onSubmit = async () => {
    if (!subsidiaryData._id) {
      console.error('El ID del Subsidiaryo no está definido.');
      return;
    }
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/subsidiary/${subsidiaryData._id}`
      );

      console.log('Respuesta del servidor:', response.data);
      onClose();
    } catch (error) {
      console.error(
        'Error al eliminar el Subsidiaryo:',
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
        <span className="flex flex-col justify-center text-center items-center gap-2 ">
          <p className="text-center text-[16px] text-neutral-800">
            ¿Estás seguro de que quieres <br /> eliminar definitivamente este
            Subsidiaryo?
          </p>
          <Boton texto="Aceptar" onClick={onSubmit} />
        </span>
      </div>
    </div>
  );
}
