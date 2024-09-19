import React from 'react';
import BannerPromo from './BannerPromos';
import CarouselPromociones from './CarouselPromociones';

export default function BannerYPromos() {
  return (
    <div className="w-full">
      <BannerPromo />
      <CarouselPromociones />
    </div>
  );
}
