import React from 'react';
import NavBtn from './NavBtn';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function NavBar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  function handleNavigation(btn) {
    if (btn === 'Inicio') {
      navigate('/login');
    } else if (btn === 'Registro') {
      navigate('/register');
    } else if (btn === 'menu') {
      navigate('/home/menu');
    }
  }

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
            onClick={() => handleNavigation('menu')}
          />
          <div className=" before:content-['W&R'] lg:before:content-['Wings_&_Ribs'] pt-2 text-[32px] text-amber-500"></div>
        </div>
        {location.pathname !== '/login' &&
          location.pathname !== '/register' && (
            <div className="hidden lg:block">
              <NavBtn />
            </div>
          )}
        {location.pathname !== '/login' &&
          location.pathname !== '/register' && (
            <div className="lg:hidden">
              <img
                onClick={toggleMenu}
                className="w-[40px] h-[40px] cursor-pointer"
                src="/icons/menu.svg"
                alt=""
              />
            </div>
          )}
        {isOpen && (
          <div className="flex flex-col lg:hidden absolute top-16 bg-neutral-100 border-2 border-neutral-300 rounded-[8px] overflow-hidden shadow-lg right-[16px] md:right-[56px] w-[150px]">
            <button
              id="ubuntu-medium"
              className="border-b-2 text-[16px] hover:bg-amber-500 hover:text-white"
              onClick={() => handleNavigation('Inicio')}
            >
              Inicio
            </button>
            <button
              id="ubuntu-medium"
              className="text-[16px] hover:bg-amber-500 hover:text-white"
              onClick={() => handleNavigation('Registro')}
            >
              Registro
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
