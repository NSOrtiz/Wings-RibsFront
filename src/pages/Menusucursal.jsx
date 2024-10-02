import React from 'react';
import { NavBar } from '../components/NavBar';
import Categories from '../components/Categories';
import { MenuFood } from '../components/ListFoot';
import Cart from '../components/ShoppingCart';
import Footer from '../components/Footer';
import { Search } from '../components/Button';

export default function Menu1() {
  const handleCategoryClick = (category) => {
    const categoryRef = document.getElementById(category);
    if (categoryRef) {
      categoryRef.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="w-full h-dvh flex flex-col items-center gap-[28px]">
      <NavBar />
      <section className="w-max-[2200px] grid grid-4 gap-[28px] items-center px-[16px] md:px-[56px] lg:px-[80px]">
        <div className="w-full flex flex-row justify-between items-center">
          <h1 id="ubuntu-bold" className=" text-[32px] text-amber-500">
            Menu Sucursal Paseo Loma Real
          </h1>
          <Search />
        </div>
        <Categories onCategoryClick={handleCategoryClick} />
        <section className="w-full flex flex-row justify-between">
          <div className="w-full flex flex-col justify-center">
            <MenuFood />
          </div>
          <div className="hidden hide-cart pl-[24px]">
            <Cart />
          </div>

          <aside className="flex"></aside>
        </section>
      </section>
      <Footer />
    </main>
  );
}
