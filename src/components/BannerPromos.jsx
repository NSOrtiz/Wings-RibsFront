import React from 'react';
import bannerExample from '../assets/BannerExample.webp';

export default function BannerPromo() {
  return (
    <div
      className="my-6 w-full min-h-64 rounded-lg text-white text-center py-4 bg-gradient-to-r from-black via-[#f39c12] to-[#7b0000]"
      style={{
        backgroundImage: `url(${bannerExample})`,
      }}
    >
      <h2 className="text-lg font-bold">Lleva tus alitas con 20% descuento</h2>
      <p>Válido para clientes con membresías</p>
    </div>
  );
}
