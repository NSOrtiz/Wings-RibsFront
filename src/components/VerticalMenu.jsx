import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MenuButtonList({ titlesBtn, handleButtonClick, selectedBtn }) {
  return (
    <div className="flex flex-col items-start gap-2">
      {titlesBtn.map((btn, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(index)}
          className={`w-full flex items-center gap-[8px] justify-start p-2 rounded-[12px] 
            ${selectedBtn === index ? 'bg-white shadow-md' : 'hover:bg-white'}`}
        >
          <img src="/icons/ArrowLineRight.svg" alt="" />
          <img src={btn.icon} alt={btn.title} className="w-[24px] h-[24px]" />
          <p>{btn.title}</p>
        </button>
      ))}
    </div>
  );
}

export function AdminMenu({ onSelectSubsidiary }) {
  const [selectedSubsidiary, setSelectedSubsidiary] = useState('');
  const [selectedBtn, setSelectedBtn] = useState(null);
  const navigate = useNavigate();

  //guardar en localStorage sucursal
  useEffect(() => {
    const storedSubsidiary = localStorage.getItem('selectedSubsidiary');
    if (storedSubsidiary) {
      setSelectedSubsidiary(storedSubsidiary);
      onSelectSubsidiary(storedSubsidiary);
    }
  }, [onSelectSubsidiary]);

  const handleSubsidiaryChange = (event) => {
    const newSubsidiary = event.target.value;
    setSelectedSubsidiary(newSubsidiary);
    onSelectSubsidiary(newSubsidiary);
    localStorage.setItem('selectedSubsidiary', newSubsidiary);
  };

  const handleButtonClick = (index) => {
    setSelectedBtn(index);
    const routes = [
      '/admin-pedidos',
      '/admin-vendedores',
      '/admin-productos',
      '/admin-sucursales',
      '/admin-menu',
    ];
    if (index >= 0 && index < routes.length) navigate(routes[index]);
  };

  const adminTitlesBtn = [
    { icon: '/icons/Delivery.svg', title: 'Pedidos' },
    { icon: '/icons/UsersThree.svg', title: 'Vendedores' },
    { icon: '/icons/Bill.svg', title: 'Productos' },
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
          <div className="flex flex-col items-center justify-center">
            <div className="relative inline-block w-full">
              <img
                src="/icons/location_store.svg"
                alt=""
                className="absolute left-2 top-2"
              />
              <select
                id="subsidiary"
                onChange={handleSubsidiaryChange}
                value={selectedSubsidiary}
                className="pl-10 pr-10 h-12 border border-neutral-300 rounded-md shadow-sm px-2 py-1 bg-white text-[16px] text-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600"
              >
                {selectedSubsidiary === '' && (
                  <option value="">Sucursal</option>
                )}
                <option value="Paseo Loma Real">Paseo Loma Real</option>
                <option value="Salinas Puga">Salinas Puga</option>
                <option value="Ruiz Cortinez">Ruiz Cortinez</option>
              </select>
            </div>
          </div>
        </section>
        <MenuButtonList
          titlesBtn={adminTitlesBtn}
          handleButtonClick={handleButtonClick}
          selectedBtn={selectedBtn}
        />
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

export function SellerMenu() {
  const [selectedBtn, setSelectedBtn] = useState(null);
  const navigate = useNavigate();

  const handleButtonClick = (index) => {
    setSelectedBtn(index);
    const routes = [
      '/vendedor-menu',
      '/vendedor-pedidos',
      '/vendedor-insumoss',
      '/vendedor-menu',
    ];
    if (index >= 0 && index < routes.length) navigate(routes[index]);
  };

  const sellerTitlesBtn = [
    { icon: '/icons/fastfood.svg', title: 'Menu' },
    { icon: '/icons/Delivery.svg', title: 'Pedidos' },
    { icon: '/icons/Bill.svg', title: 'Insumos' },
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
          <p className="text-[20px]">Vendedor</p>
        </div>
        <MenuButtonList
          titlesBtn={sellerTitlesBtn}
          handleButtonClick={handleButtonClick}
          selectedBtn={selectedBtn}
        />
      </div>
      <div className="flex justify-center">
        <img
          src="/images/W&R1.png"
          alt="logo"
          className="w-[44px] h-[44px] rounded-full cursor-pointer"
          onClick={() => handleButtonClick(3)}
        />
      </div>
    </div>
  );
}
