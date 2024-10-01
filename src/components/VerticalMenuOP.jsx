import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function VerticalMenuOP() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [status, setStatus] = useState('Pages');
  const [selectedBtn, setSelectedBtn] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = (e) => {
    if (!e.target.closest('#dropdownButton')) {
      setDropdownOpen(false);
    }
  };

  const selectStatus = (newStatus, e) => {
    e.preventDefault();
    setStatus(newStatus);
    setDropdownOpen(false);
  };

  useEffect(() => {
    window.addEventListener('click', closeDropdown);
    return () => window.removeEventListener('click', closeDropdown);
  }, []);

  const handleButtonClick = (index) => {
    setSelectedBtn(index);
    if (index === 0) {
      navigate('');
    } else if (index === 1) {
      navigate('');
    } else if (index === 2) {
      navigate('');
    } else if (index === 3) {
      navigate('');
    } else if (index === 4) {
      navigate('');
    }
  };

  const titlesBtn = [
    { icon: '/icons/Delivery.svg', title: 'Pedidos' },
    { icon: '/icons/UsersThree.svg', title: 'Vendedores' },
    { icon: '/icons/Bill.svg', title: 'Productos' },
    { icon: '/icons/arrow_forward.svg', title: 'Estadisticas de ventas' },
    { icon: '/icons/Setting.svg', title: 'Configuración sucursal' },
  ];

  return (
    <div className="w-full h-screen flex flex-col justify-between px-4 bg-neutral-200 border-r-2 border-b-2 rounded-ee-[16px] border-neutral-500 shadow-md pb-8">
      <div id="ubuntu-bold" className="w-full flex flex-col gap-[12px]">
        <div className="flex flex-row justify-center items-center py-8 gap-2">
          <img
            className="w-[30px] h-[30px]"
            src="https://img.icons8.com/?size=100&id=7819&format=png&color=000000"
            alt=""
          />
          <p className="text-[20px]">Administrador</p>
        </div>
        <section className="w-full">
          <div className="hidden md:flex flex-col items-center justify-center">
            <div className="w-full relative inline-block">
              <button
                id="dropdownButton"
                className="w-full inline-flex flex-row justify-between items-center rounded-md border border-neutral-300 shadow-sm px-2 py-1 bg-white text-[16px] text-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600 "
                type="button"
                onClick={toggleDropdown}
              >
                <div className=" flex items-center gap-2 ">
                  <img src="/icons/location_store.svg" alt="" />
                  {status}
                </div>
                <img
                  className="border-l-[1px] border-neutral-200 p-2"
                  src="/icons/down_arrow.svg"
                  alt=""
                />
              </button>
              {dropdownOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="dropdownButton"
                >
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-amber-600"
                      role="menuitem"
                      onClick={(e) => selectStatus('Paseo Loma Real', e)}
                    >
                      Paseo Loma Real
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-amber-600"
                      role="menuitem"
                      onClick={(e) => selectStatus('Salinas Puga', e)}
                    >
                      Salinas Puga
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-amber-600"
                      role="menuitem"
                      onClick={(e) => selectStatus('Ruiz Cortinez', e)}
                    >
                      Ruiz Cortinez
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        <div className="flex flex-col items-start gap-2 ">
          {titlesBtn.map((btn, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`w-full flex items-center gap-[8px] justify-start p-2 rounded-[12px] 
                  ${selectedBtn === index ? 'bg-white shadow-md' : 'hover:bg-white'}`}
            >
              <img src="/icons/ArrowLineRight.svg" alt="" />
              <img
                src={btn.icon}
                alt={btn.title}
                className="w-[24px] h-[24px]"
              />
              <p>{btn.title}</p>
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src="/images/W&R1.png"
          alt="logo"
          className="w-[44px] h-[44px] rounded-full cursor-pointer"
          onClick={() => handleButtonClick(4)}
        />
      </div>
    </div>
  );
}
