import React from 'react';
import NavBar from '../components/NavBar';
import Categories from '../components/Categories';
import { MenuFood } from '../components/ListFoot';
import Footer from '../components/Footer';
import { Search } from '../components/Button';
import { AdminMenu } from '../components/VerticalMenu';

export default function Menu2() {
  const handleCategoryClick = (category) => {
    const categoryRef = document.getElementById(category);
    if (categoryRef) {
      categoryRef.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <NavBar />
      <section className="w-full pl-0 pr-[16px] pb-[16px] md:pr-[56px] md:pb-[56px] lg:pb-[80px] lg:pr-[80px] flex flex-row gap-2">
        <aside className="w-1/4 flex flex-col items-center ">
          <AdminMenu />
        </aside>
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
            <aside className="flex"></aside>
          </section>
        </section>
      </section>
      <Footer />
    </main>
  );
}
