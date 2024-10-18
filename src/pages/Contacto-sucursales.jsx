import { Subsidiary } from '../components/Subsidiary';
import React from 'react';
import { NavBar } from '../components/NavBar';

export default function Contacto() {
  return (
    <section className="min-h-screen  flex flex-col ">
      <NavBar />
      <div className="flex-grow w-full flex flex-col justify-start px-[16px] md:px-[56px] lg:px-[80px] py-[24px] gap-[16px] pb-20">
        <h2
          id="ubuntu-bold"
          className="text-amber-600 text-[28px] w-full h-fit flex flex-row gap-2 border-b-[1px] border-amber-600 px-[16px]"
        >
          Contacto y sucursales
        </h2>
        <div className="pb-4 text-neutral-800 pt-8">
          <Subsidiary />
        </div>
      </div>
      <footer className=" w-full h-20 px-[16px] md:px-[56px] lg:px-[80px] bg-neutral-800">
        <div className="w-full h-full flex flex-row gap-8 justify-center md:justify-end items-center">
          <img
            className="w-[30px] h-[30px] cursor-pointer hover:scale-125"
            src="/icons/Icon_facebook.svg"
            alt="arrow"
          />
          <img
            className="w-[30px] h-[30px] cursor-pointer hover:scale-125"
            src="/icons/Icon_instagram.svg"
            alt="arrow"
          />
        </div>
      </footer>
    </section>
  );
}
