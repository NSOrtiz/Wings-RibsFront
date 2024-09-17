import React from 'react';
import NavBar from '../components/NavBar';
import '../CSS/colors_text.css';
//import Colorstest from '../components/Colors';

export default function Menu1() {
  return (
    <main className="w-full h-dvh flex flex-col items-center gap-[28px]">
      <NavBar />

      <section className="w-full flex flex-col gap-[28px] items-center">
        <div className="w-full flex flex-row justify-between px-[80px]">
          <h1 className="">Menu Sucursal Paseo Loma Real</h1>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <input
              type="search"
              placeholder="Search..."
              className="px-4 py-2 w-full focus:outline-none"
            />
            <button className="p-2 bg-gray-200 hover:bg-gray-300">
              <img
                src="/icons/search.svg"
                alt="Search Icon"
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
