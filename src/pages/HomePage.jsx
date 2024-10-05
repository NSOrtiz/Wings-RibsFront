import React from 'react';
import { NavBar } from '../components/NavBar';
import LocalizadorSucursal from '../components/LocalizadorSucursal';
import BannerYPromos from '../components/BannerAndPromos';
import Footer from '../components/Footer';
import PromoCarrusel from '../components/CarouselPromociones';

import '../CSS/colors_text.css';

export default function HomePage() {
  return (
    <main className="w-full h-auto flex flex-col items-center gap-0">
      <NavBar />
      <LocalizadorSucursal />
      <div className="px-[16px] md:px-[56px] lg:px-[80px]">
        <BannerYPromos />
      </div>
      <div className="w-full pb-5 px-[16px] md:px-[56px] lg:px-[80px]">
        <PromoCarrusel />
      </div>
      <Footer />
    </main>
  );
}
