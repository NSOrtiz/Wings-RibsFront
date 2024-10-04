import React from 'react';
import NavBtn from './NavBtn';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export function NavBar() {
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
    } else if (btn === 'carrito') {
      navigate('/home/carrito');
    } else if (btn === 'contacto') {
      navigate('/contacto');
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
          location.pathname !== '/register' &&
          location.pathname !== '/profile' && (
            <div className="hidden hide-cart">
              <NavBtn />
            </div>
          )}
        {location.pathname !== '/login' &&
          location.pathname !== '/register' &&
          location.pathname !== '/profile' && (
            <div className="block hide-btns">
              <img
                onClick={toggleMenu}
                className="w-[40px] h-[40px] cursor-pointer"
                src="/icons/menu.svg"
                alt=""
              />
            </div>
          )}
        {isOpen && (
          <div className="flex flex-col hide-btns absolute top-16 bg-neutral-100 rounded-[4px] overflow-hidden border-[1px] border-neutral-300 shadow-lg right-[16px] md:right-[56px] z-20">
            <button
              id="ubuntu-medium"
              className="text-[16px] hover:bg-amber-500 hover:text-white flex flex-row justify-start p-2 items-center gap-2"
              onClick={() => handleNavigation('menu')}
            >
              <img
                className="w-[20px] h-[20px] cursor-pointer"
                src="/icons/fast-food-outline.svg"
                alt=""
              />
              Menu
            </button>
            <button
              id="ubuntu-medium"
              className="text-[16px] hover:bg-amber-500 hover:text-white flex flex-row items-center justify-start p-2 items-center gap-2"
              onClick={() => handleNavigation('carrito')}
            >
              <img
                className="w-[20px] h-[20px] cursor-pointer"
                src="/icons/shopping_cart_black.svg"
                alt=""
              />
              Carrito de compras
            </button>
            <button
              id="ubuntu-medium"
              className="text-[16px] hover:bg-amber-500 hover:text-white flex flex-row justify-start p-2 items-center gap-2"
              onClick={() => handleNavigation('contacto')}
            >
              <img
                className="w-[20px] h-[20px] cursor-pointer"
                src="/icons/call-outline_black.svg"
                alt=""
              />
              Contactanos
            </button>
            <button
              id="ubuntu-medium"
              className="text-[16px] hover:bg-amber-500 hover:text-white flex flex-row justify-start p-2 border-t-[1px] border-neutral-300 items-center gap-2"
              onClick={() => handleNavigation('Inicio')}
            >
              <img
                className="w-[20px] h-[20px] cursor-pointer"
                src="/icons/log-in-outline.svg"
                alt=""
              />
              Inicio
            </button>
            <button
              id="ubuntu-medium"
              className="text-[16px] hover:bg-amber-500 hover:text-white flex flex-row justify-start p-2 items-center gap-2"
              onClick={() => handleNavigation('Registro')}
            >
              <img
                className="w-[20px] h-[20px] cursor-pointer"
                src="/icons/create-outline.svg"
                alt=""
              />
              Registro
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export function AdminSellerNavBar({ toggleMenuVisibility }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  function handleNavigation(btn) {
    if (btn === 'menu') {
      navigate('/');
    }
  }

  return (
    <nav className="w-full flex justify-stretch items-center py-2 bg-neutral-800 default-shadow px-[16px] md:px-[56px] lg:px-[80px]">
      <div
        id="ubuntu-bold"
        className="flex justify-between items-center flex-1 self-stretch"
      >
        <div className="block hide-btns mr-4">
          <img
            onClick={toggleMenuVisibility}
            className="w-[40px] h-[40px] cursor-pointer"
            src="/icons/menu.svg"
            alt=""
          />
        </div>
        <div className="flex items-center gap-4 flex-1">
          <img
            src="/images/W&R1.png"
            alt="logo"
            className="w-[44px] h-[44px] rounded-full cursor-pointer"
            onClick={() => handleNavigation('menu')}
          />
          <div className=" before:content-['W&R'] lg:before:content-['Wings_&_Ribs'] pt-2 text-[32px] text-amber-500"></div>
        </div>
      </div>
    </nav>
  );
}
