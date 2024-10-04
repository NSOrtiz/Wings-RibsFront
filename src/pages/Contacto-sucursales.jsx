import Subsidiary from '../components/Subsidiary';
import React from 'react';
import { NavBar } from '../components/NavBar';

export default function Contacto() {
  return (
    <section className=" w-full h-fit flex flex-col">
      <NavBar />
      <div className=" w-full h-screen flex flex-col justify-center px-[16px] md:px-[56px] lg:px-[80px] py-[24px] gap-[16px]">
        <h2 id="ubuntu-bold" className="text-amber-600 text-[28px]">
          Contacto y sucursales
        </h2>
        <div className="pb-4 text-neutral-800">
          <Subsidiary />
        </div>
      </div>
      <footer className=" w-full h-20 bg-neutral-800">
        <div className="flex flex-row gap-8 justify-center md:justify-end items-center">
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
