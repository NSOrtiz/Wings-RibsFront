import React from 'react';
import BannerPromo from './BannerPromos';
import CarouselPromociones from './CarouselPromociones';

export default function BannerYPromos() {
  return (
    <div className="bg-neutral-900 w-full text-white text-center py-4">
      <p>Banner y promos</p>
      <BannerPromo />
      <CarouselPromociones />
    </div>
  );
}
