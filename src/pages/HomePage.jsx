import React from 'react';
import NavBar from '../components/NavBar';
import LocalizadorSucursal from '../components/LocalizadorSucursal';
import BannerYPromos from '../components/BannerAndPromos';
import '../CSS/colors_text.css';

export default function HomePage() {
  return (
    <main className="w-full h-dvh flex flex-col items-center gap-[28px]">
      <NavBar />

      <div className="flex-grow">
        <LocalizadorSucursal />
        <BannerYPromos />
      </div>

      <footer className="bg-neutral-900 w-full text-white text-center py-4">
        <p>footer</p>
      </footer>
    </main>
  );
}
