import React from 'react';
import { NavBar } from '../components/NavBar';
import { useNavigate } from 'react-router-dom';

export default function MetodoDePago() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/estatus-pedido');
  };
  return (
    <div className="min-h-screen bg-neutral-200 relative">
      <NavBar />
      <div className="flex justify-center py-10">
        {/* Contenedor principal */}
        <div
          className="flex flex-col items-center gap-4 px-[80px] py-0 flex-1"
          style={{
            padding: '0px 80px',
            background: 'rgba(255, 255, 255, 0.08)',
          }}
        >
          {/* Contenedor interno */}
          <div
            className="flex flex-col items-center gap-4"
            style={{ padding: '0px 80px', flex: '1 0 0' }}
          >
            {/* Contenedor para el título "Métodos de Pago" */}
            <div
              className="flex flex-col justify-center"
              style={{
                width: '311px',
                height: '55px',
                color: '#F59E0B', // Color ámbar
                textAlign: 'center',
                fontFamily: 'Ubuntu',
                fontSize: '32px',
                fontWeight: '700',
                lineHeight: 'normal',
                letterSpacing: '0.96px',
              }}
            >
              Métodos de Pago
            </div>

            {/* Título "Detalle de tarjeta" */}
            <div
              className="flex justify-center items-center gap-8 p-8 self-stretch"
              style={{
                display: 'flex',
                padding: '8px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                alignSelf: 'stretch',
              }}
            >
              <h3 className="text-black text-xl font-semibold text-center">
                Detalle de tarjeta
              </h3>
            </div>

            {/* Formulario */}
            <form className="w-full">
              {/* Contenedor para las imágenes de tipo de tarjeta */}
              <div
                className="flex justify-between w-full"
                style={{
                  display: 'flex',
                  gap: '0px',
                }}
              >
                <img
                  src="/images/logo-mastercard.png"
                  alt="Mastercard"
                  className="w-[75px] h-[55px] rounded-[5px] bg-[lightgray] bg-center bg-cover border-[rgba(217, 217, 217, 0.20)]"
                />
                <img
                  src="/images/logo-visa.png"
                  alt="Visa"
                  className="w-[75px] h-[55px] rounded-[5px] bg-[lightgray] bg-center bg-cover border-[rgba(217, 217, 217, 0.20)]"
                />
                <img
                  src="/images/logo-rupay.png"
                  alt="Rupay"
                  className="w-[75px] h-[55px] rounded-[5px] bg-[lightgray] bg-center bg-cover border-[rgba(217, 217, 217, 0.20)]"
                />
              </div>

              {/* Formulario para los inputs */}
              <div className="flex flex-col items-center gap-4 p-8 self-stretch">
                {/* Input "Nombre del titular de la tarjeta" */}
                <div className="w-full flex flex-col">
                  <label className="block text-[#667473] text-[20px] font-[700] font-Ubuntu leading-normal tracking-[0.2px] mb-2">
                    Nombre del titular de la tarjeta
                  </label>
                  <input
                    type="text"
                    className="w-full border-[#667473] border-[1px] rounded-[4px] bg-[#FFF] p-[12px]"
                    placeholder="Nombre en la sucursal"
                  />
                </div>

                {/* Input "Número de la tarjeta" */}
                <div className="w-full flex flex-col">
                  <label className="block text-[#667473] text-[20px] font-[700] font-Ubuntu leading-normal tracking-[0.2px] mb-2">
                    Número de la tarjeta
                  </label>
                  <input
                    type="text"
                    className="w-full border-[#667473] border-[1px] rounded-[4px] bg-[#FFF] p-[12px]"
                    placeholder="XXXX XXXX XXXX XXXX"
                  />
                </div>

                {/* Contenedor para los campos "Fecha de expiración" y "CVV" */}
                <div className="w-full flex gap-4">
                  <div className="w-1/2 flex flex-col">
                    <label
                      className="block text-[#667473] text-[20px] font-[700] font-Ubuntu leading-normal tracking-[0.2px] mb-2"
                      style={{ alignSelf: 'stretch' }}
                    >
                      Fecha de expiración
                    </label>
                    <input
                      type="date"
                      className="w-full border-[#667473] border-[1px] rounded-[4px] bg-[#FFF] p-[12px]"
                      placeholder="Fecha de expiración"
                    />
                  </div>
                  <div className="w-1/2 flex flex-col">
                    <label
                      className="block text-[#667473] text-[20px] font-[700] font-Ubuntu leading-normal tracking-[0.2px] mb-2"
                      style={{ alignSelf: 'stretch' }}
                    >
                      CVV
                    </label>
                    <input
                      type="text"
                      className="w-full border-[#667473] border-[1px] rounded-[4px] bg-[#FFF] p-[12px]"
                      placeholder="CVV"
                      style={{ alignSelf: 'stretch' }}
                    />
                  </div>
                </div>
              </div>
            </form>

            {/* Contenedor de subtotales y totales */}
            <div
              className="w-full flex flex-col gap-4"
              style={{
                display: 'flex',
                paddingBottom: '16px',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '16px',
                alignSelf: 'stretch',
                borderBottom: '0.5px solid #667473',
              }}
            >
              {/* Contenedor para "Subtotal" */}
              <div className="w-full flex justify-between items-center">
                <span className="text-neutral-500 text-[16px] font-[400] font-Ubuntu leading-normal tracking-[0.2px]">
                  Subtotal
                </span>
                <span className="text-amber-600 text-[16px] font-[500] font-Ubuntu leading-normal text-right">
                  $123.45
                </span>
              </div>

              {/* Contenedor para "Shipping" */}
              <div className="w-full flex justify-between items-center">
                <span className="text-neutral-500 text-[16px] font-[400] font-Ubuntu leading-normal tracking-[0.2px]">
                  Shipping
                </span>
                <span className="text-amber-600 text-[16px] font-[500] font-Ubuntu leading-normal text-right">
                  $12.34
                </span>
              </div>

              {/* Contenedor para "Total" */}
              <div className="w-full flex justify-between items-center">
                <span className="text-neutral-700 text-[20px] font-[700] font-Ubuntu leading-normal tracking-[0.2px]">
                  Total
                </span>
                <span className="text-amber-700 text-[20px] font-[700] font-Ubuntu leading-normal text-right">
                  $135.79
                </span>
              </div>
            </div>

            {/* Botón "Pagar" */}
            <div
              className="w-full flex justify-center"
              style={{ paddingTop: '16px' }}
            >
              <button
                className="w-[300px] flex justify-center items-center gap-[4px] p-[12px] bg-amber-500 text-white rounded-[16px] border-[1px] border-amber-500 shadow-md"
                onClick={() => handleClick()}
              >
                Pagar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
