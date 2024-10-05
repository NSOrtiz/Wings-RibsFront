import React, { useState } from 'react';
import { AdminSellerNavBar } from '../components/NavBar';
import Categories from '../components/Categories';
import { MenuFood } from '../components/ListFoot';
import Footer from '../components/Footer';
import { Search } from '../components/Button';
import { SellerMenu } from '../components/VerticalMenu';

export default function Menu3() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleCategoryClick = (category) => {
    const categoryRef = document.getElementById(category);
    if (categoryRef) {
      categoryRef.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="w-full">
      <AdminSellerNavBar toggleMenuVisibility={toggleMenuVisibility} />
      <section className="w-full pl-0 pr-[16px] pb-[16px] md:pr-[56px] md:pb-[56px] lg:pb-[80px] lg:pr-[80px] flex flex-row gap-2 ">
        <aside
          className={`${
            isMenuVisible ? 'block' : 'hidden'
          } hide-cart relative top-[0] left-0 h-full w-[300px]  z-50 flex flex-col items-center`}
        >
          <SellerMenu />
        </aside>
        <section className="w-full grid grid-4 gap-[28px] items-center pl-[16px] md:pl-[56px] pt-[16px] md:pt-[56px] lg:pt-[80px]">
          <div className="w-full flex flex-row justify-between items-center ">
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
