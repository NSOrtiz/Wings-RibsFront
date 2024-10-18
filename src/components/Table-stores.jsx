import React, { useState, useEffect } from 'react';

export default function ItemStores() {
  const dataSubsidiary = [
    {
      name: 'Sucursal Paseo Loma Real',
      address: 'Loma Real, Infonavit Benito Juárez, 88274 Nuevo Laredo, Tamps.',
      phone: '(867)745-8517',
      id: '24234235235',
    },
    {
      name: 'Sucursal Ruiz Cortinez',
      address:
        'Av. Ruiz cortínez entre fray Pedro de Gante 704, Nuevo Laredo, Tamps.',
      phone: '(867)750 4342',
      id: '252543535435',
    },
    {
      name: 'Sucursal Salinas Puga',
      address: 'Salinas puga 2309, Nuevo Laredo, Tamps.',
      phone: '(867)308-0606',
      id: '5254325532453',
    },
  ];

  return (
    <section className="p-2">
      {dataSubsidiary.map((element) => {
        return (
          <div
            className="w-full grid grid-cols-[1fr_1fr_1fr_1fr_1fr] border-b border-neutral-500 mb-6 sm:overflow-x-auto"
            key={element.text}
          >
            <p
              id="ubuntu-regular"
              className="col-span2 text-center text-neutral-800 text-[16px] "
            >
              {element.name}
            </p>

            <p
              id="ubuntu-regular"
              className="text-center text-neutral-800 text-[14px] lg:text-[16px]"
            >
              {element.address}
            </p>
            <p
              id="ubuntu-regular"
              className="text-center text-neutral-800 text-[14px] lg:text-[16px]"
            >
              {element.phone}
            </p>
            <p
              id="ubuntu-regular"
              className="text-center text-neutral-800 text-[14px] lg:text-[16px]"
            >
              {element.id}
            </p>
            <div className=" flex flex-row gap-2 justify-center">
              <img
                src="/icons/edit-yellow.svg"
                alt=""
                className="w-[30px] h-[30px] cursor-pointer hover:scale-125"
              />
              <img
                className="w-[30px] h-[30px] cursor-pointer hover:scale-125"
                src="/icons/delete-yellow.svg"
                alt=""
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}
