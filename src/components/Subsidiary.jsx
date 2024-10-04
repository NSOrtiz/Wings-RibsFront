import React from 'react';

const dataSubsidiary = [
  {
    name: 'Sucursal Paseo Loma Real',
    address: 'Loma Real, Infonavit Benito Juárez, 88274 Nuevo Laredo, Tamps.',
    phone: '(867)745-8517',
    image: '/images/map1.png',
  },
  {
    name: 'Sucursal Ruiz Cortinez',
    address:
      'Av. Ruiz cortínez entre fray Pedro de Gante 704, Nuevo Laredo, Tamps.',
    phone: '(867)750 4342',
    image: '/images/map2.png',
  },
  {
    name: 'Sucursal Salinas Puga',
    address: 'Salinas puga 2309, Nuevo Laredo, Tamps.',
    phone: '(867)308-0606',
    image: '/images/map1.png',
  },
];

export function SubsidiaryFooter() {
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

export function Subsidiary() {
  return (
    <div className="w-full flex flex-col justify-center items-center md:flex-row gap-[24px] lg:justify-between ">
      {dataSubsidiary.map((element) => {
        return (
          <section
            className=" w-[300px] lg:w-[400px] h-[300px] md:h-[350px] lg:h-[300px] bg-neutral-900 p-4 rounded-[16px] bg-opacity-70"
            key={element.text}
          >
            <div className=" flex flex-col opacity-100 gap-2">
              <img
                src={element.image}
                alt=""
                className="w-full rounded-sm h-[150px] object-cover"
              />
              <div className="flex flex-col h-full w-full justify-center items-start">
                <p id="ubuntu-bold" className="text-amber-500 text-[20px] ">
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
            </div>
          </section>
        );
      })}
    </div>
  );
}
