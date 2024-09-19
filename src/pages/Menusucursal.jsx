import React from 'react';
import NavBar from '../components/NavBar';
import Categories from '../components/Categories';
import Food from '../components/FoodData';
import Cart from '../components/ShoppingCart';
import Footer from '../components/Footer';

export default function Menu1() {
  return (
    <main className="w-full h-dvh flex flex-col items-center gap-[28px]">
      <NavBar />
      <section className="w-full flex flex-col gap-[28px] items-center px-[16px] md:px-[56px] lg:px-[80px]">
        <div className="w-full flex flex-row justify-between items-center">
          <h1 id="ubuntu-bold" className=" text-[32px] text-amber-500">
            Menu Sucursal Paseo Loma Real
          </h1>
          <div className="hidden md:block flex flex-row bg-white items-center h-[40px] border border-neutral-300 rounded-lg overflow-hidden px-3 py-1 gap-3 shadow-inner">
            <img src="/icons/search.svg" alt="Search Icon" className="h-full" />
            <input
              id="ubuntu-regular"
              className="hidden lg:block w-full h-full text-[16px] placeholder:text-neutral-800"
              type="search"
              placeholder="Buscar..."
            />
          </div>
        </div>
        <Categories />
        <section className="flex flex-row">
          <Food />
          <Cart />
          <aside className="flex"></aside>
        </section>
      </section>
      <Footer />
    </main>
  );
}
