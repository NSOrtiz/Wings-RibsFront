import React from 'react';
export default function Categories() {
  const categories = [
    {
      category: 'Games',
      Icon: 'https://static-cdn.jtvnw.net/c3-vg/verticals/gaming.svg',
    },
    {
      category: 'IRL',
      Icon: 'https://static-cdn.jtvnw.net/c3-vg/verticals/irl.svg',
    },
    {
      category: 'Music',
      Icon: 'https://static-cdn.jtvnw.net/c3-vg/verticals/music.svg',
    },
    {
      category: 'Creative',
      Icon: 'https://static-cdn.jtvnw.net/c3-vg/verticals/creative.svg',
    },
    {
      category: 'Sports',
      Icon: 'https://static-cdn.jtvnw.net/c3-vg/verticals/esports.svg',
    },
  ];
  return (
    <div className="mt-2 h-[60px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {categories.map((item) => {
        return (
          <div
            key={item.category}
            className="flex flex-row w-[90%] h-[40px] mt-5 items-center justify-between pl-3 pr-3 bg-[#4c31c4] rounded-md hover:bg-[#7637D3] cursor-pointer"
          >
            <label className="text-white font-Inter font-semibold text-2xl">
              {item.category}
            </label>
            <img src={item.Icon} className="w-[60px] h-[60px]" alt="" />
          </div>
        );
      })}
    </div>
  );
}
