import React from 'react';

export default function Inventarios() {
  return (
    <div className=" flex flex-row gap-8 border-b border-neutral-500 mb-4 pb-4">
      <p className=" col-span-full font-medium text-center basis-1/3">Wins</p>
      <p className="font-regular text-center basis-1/2 ">60</p>
      <p className="font-regular text-center basis-1/2">80/300</p>

      <label className="inline-flex items-center cursor-pointer basis-1/4 ">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="relative w-11 h-6 bg-gray-500 peer-focus:outline-none peer-focus:ring-4  peer-focus:ring-white dark:peer-focus:ring-white rounded-full peer dark:bg-gray-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-amber-500"></div>
        <span className="font-regular text-center pl-2 basis-1/4">
          Disponible
        </span>
      </label>
    </div>
  );
}
