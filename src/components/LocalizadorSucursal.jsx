import React from 'react';
import imageURL from '../assets/BackgroundHomepage.jpeg';

export default function LocalizadorSucursal() {
  return (
    <div
      className="w-full h-[500px] flex-col justify-center items-center gap-2.5 inline-flex pt-10 px-4"
      style={{
        backgroundImage: `url(${imageURL})`,
        objectFit: 'scale-down',
      }}
    >
      <div className="rounded-[10px] flex-col justify-center items-start gap-2 flex">
        <div className="self-stretch justify-center items-center gap-2 inline-flex">
          <div className="h-11 p-2 bg-[#f39c12] rounded-2xl shadow border border-[#424949] justify-center items-center flex">
            <div className="text-white text-2xl font-bold font-['Ubuntu'] tracking-tight">
              Entregar a Domicilio
            </div>
          </div>
          <div className="h-11 p-2 bg-[#e5e8e7]/60 rounded-2xl shadow border border-[#424949] justify-center items-center flex">
            <div className="text-[#424949] text-2xl font-bold font-['Ubuntu'] tracking-tight">
              Recoger en tienda
            </div>
          </div>
        </div>
        <div className="self-stretch h-[135px] py-4 rounded-xl flex-col justify-center items-start gap-2 flex">
          <div className="self-stretch py-2 justify-center items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 h-[46px] pl-6 pr-7 py-2 bg-white rounded-2xl shadow border border-white justify-start items-center gap-2 flex">
              <div className="w-[30px] h-[30px] justify-center items-center flex">
                <div className="w-[30px] h-[30px] relative flex-col justify-start items-start flex" />
              </div>
              <div className="text-[#667473] text-xl font-normal font-['Ubuntu']">
                Ingresa tu calle y número
              </div>
            </div>
            <div className="h-[47px] px-1 py-2 bg-[#f39c12] rounded-2xl shadow border border-[#f39c12] justify-center items-center gap-1 flex">
              <div className="self-stretch px-2 py-1 justify-center items-center gap-2 flex">
                <div className="text-white text-xl font-bold font-['Ubuntu'] tracking-tight">
                  Localizar
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-1 justify-start items-center gap-4 inline-flex">
            <div className="w-6 h-6 relative backdrop-blur-sm" />
            <div className="w-[237px] h-[23px] text-white text-base font-medium font-['Ubuntu']">
              Utiliza mi ubicación
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
