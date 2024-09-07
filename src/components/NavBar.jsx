import React from 'react';
import NavBtn from './NavBtn';
import '../CSS/colors_text.css';

export default function NavBar() {
  return (
    <header className="w-full flex justify-stretch items-center py-2 px-[80px] bg-neutral-800 default-shadow">
      <div className="flex justify-between items-center flex-1 self-stretch">
        <div className="flex items-center gap-4 flex-1 text-">
          <img
            src="/images/W&R1.png"
            alt="logo"
            className="w-[44px] h-[44px] rounded-full cursor-pointer"
          />
          <h1 className="title1 text-amber-500">Wings & Ribs</h1>
        </div>
        <NavBtn />
      </div>
    </header>
  );
}
