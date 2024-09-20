import React from 'react';
import bannerExample from '../assets/BannerExample.webp';

export default function BannerPromo() {
  return (
    <div
      className="my-6 w-full min-h-64 rounded-lg text-white text-center py-4 bg-gradient-to-r from-black via-[#f39c12] to-[#7b0000] flex items-center"
      style={{
        backgroundImage: `url(${bannerExample})`,
      }}
    >
      <div className="flex-grow text-left p-4 ms-8">
        <h2 className="text-2xl font-bold">
          Lleva tus alitas con 20% descuento
        </h2>
        <p>Válido para clientes con membresías</p>
      </div>
      <div className="me-10">
        <img src="/images/W&R2.png" alt="logo" className="w-[125px] h-[80px]" />
      </div>
    </div>
  );
}
