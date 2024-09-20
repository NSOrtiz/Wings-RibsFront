import React from 'react';
import NavBar from '../components/NavBar';
import LocalizadorSucursal from '../components/LocalizadorSucursal';
import BannerYPromos from '../components/BannerAndPromos';
import Footer from '../components/Footer';

import '../CSS/colors_text.css';

export default function HomePage() {
  return (
    <main className="w-full h-dvh flex flex-col items-center gap-0">
      <NavBar />
      <LocalizadorSucursal />
      <div className="flex-grow mb-4 mx-8">
        <BannerYPromos />
      </div>

      <Footer />
    </main>
  );
}
