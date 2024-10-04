import { React } from 'react';
import burgerLogo from '../assets/MenuFilled.png';

export default function NavBarManager() {
  return (
    <nav className="w-full flex justify-stretch items-center py-2 bg-neutral-800 default-shadow px-[16px] md:px-[56px] lg:px-[80px]">
      <div
        id="ubuntu-bold"
        className="flex justify-between items-center flex-1 self-stretch"
      >
        <div className="flex items-center gap-4 flex-1">
          <img
            src="/images/W&R1.png"
            alt="logo"
            className="w-[44px] h-[44px] rounded-full cursor-pointer"
          />
          <div className=" before:content-['W&R'] lg:before:content-['Wings_&_Ribs'] pt-2 text-[32px] text-amber-500"></div>
        </div>
        <button type="button">
          <img src={burgerLogo} />
        </button>
      </div>
    </nav>
  );
}
