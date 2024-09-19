import React from 'react';
export default function Subsidiary() {
  const dataSubsidiary = [
    {
      name: 'Sucursal Paseo Loma Real',
      address: 'Loma Real, Infonavit Benito Juárez, 88274 Nuevo Laredo, Tamps.',
      phone: '(867)745-8517',
    },
    {
      name: 'Sucursal Ruiz Cortinez',
      address:
        'Av. Ruiz cortínez entre fray Pedro de Gante 704, Nuevo Laredo, Tamps.',
      phone: '(867)750 4342',
    },
    {
      name: 'Sucursal Salinas Puga',
      address: 'Salinas puga 2309, Nuevo Laredo, Tamps.',
      phone: '(867)308-0606',
    },
  ];
  return (
    <div className="w-full flex flex-col justify-center items-center md:flex-row gap-[24px] lg:justify-between ">
      {dataSubsidiary.map((element) => {
        return (
          <div className="w-[300px] lg:w-[400 px] " key={element.text}>
            <p id="ubuntu-bold" className="text-amber-400 text-[20px] ">
              {element.name}
            </p>
            <span className="flex flex-row justify-start gap-[8px]">
              <img
                className="w-[24px] h-[24px]"
                src="/icons/location-outline.svg"
                alt=""
              />
              <p
                id="ubuntu-regular"
                className="text-neutral-100 text-[14px] lg:text-[16px]"
              >
                {element.address}
              </p>
            </span>
            <span className="flex flex-row justify-start gap-[8px]">
              <img
                className="w-[24px] h-[24px]"
                src="/icons/call-outline.svg"
                alt=""
              />
              <p
                id="ubuntu-regular"
                className="text-neutral-100 text-[14px] lg:text-[16px]"
              >
                {element.phone}
              </p>
            </span>
          </div>
        );
      })}
    </div>
  );
}
