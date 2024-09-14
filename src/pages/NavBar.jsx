import React from 'react';
import Logo1VG from '../assets/W&R1.png';

export default function NavBar() {
  return (
    <nav className="w-full top-0 border-b bg-neutral-900 sm:items-center sm:justify-start mx-auto p-4 flex flex-wrap px-10  md:justify-start md:items-center lg:justify-start lg:items-center">
      <div id="ubuntu-bold">
        <div className="w-72  flex flex-auto gap-3">
          <img
            className="inline rounded-full"
            src={Logo1VG}
            alt="logo cabecera"
            width="44px"
            height="44px"
          />

          <div className=" before:content-['M&R'] lg:before:content-['Wings_&_Ribs'] pt-2 text-2xl text-amber-500"></div>
        </div>
      </div>
    </nav>
  );
}
