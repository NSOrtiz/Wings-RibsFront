import React from 'react';
import bannerExample from '../assets/BannerExample.webp';

export default function BannerPromo() {
  return (
    <div
      className="my-6 w-full min-h-64 rounded-lg text-white text-center py-4"
      style={{
        backgroundImage: `url(${bannerExample})`,
      }}
    >
      <div>Banner de promocion</div>
    </div>
  );
}
