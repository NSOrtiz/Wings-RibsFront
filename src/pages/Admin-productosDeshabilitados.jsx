import React, { useState } from 'react';
import { AdminSellerNavBar } from '../components/NavBar';
import Footer from '../components/Footer';
import { AdminMenu } from '../components/VerticalMenu';
import { Search } from '../components/Button';
import { Boton } from '../components/Button';
import { ListDataFalse } from '../components/ProductTable';
import { useNavigate } from 'react-router-dom';

export default function ProductosDeshabilitados({ onSelectSubsidiary }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [selectedSubsidiary, setSelectedSubsidiary] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const toggleMenuVisibility = (product) => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleButtonClick = () => {
    console.log('Sucursal seleccionada:', selectedSubsidiary);
    if (selectedSubsidiary) {
      navigate('/admin-productos');
    } else {
      setErrorMessage(
        'Seleccione sucursal para poder agregar un nuevo producto'
      );
      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  return (
    <main>
      <AdminSellerNavBar toggleMenuVisibility={toggleMenuVisibility} />
      <section className="w-full pl-0 pr-[16px] pb-[16px] md:pr-[56px] md:pb-[56px] lg:pb-[80px] lg:pr-[80px] flex flex-row gap-2 ">
        <aside
          className={`${
            isMenuVisible ? 'block' : 'hidden'
          } hide-cart relative top-[0] left-0 h-full w-[300px] z-50 flex flex-col items-center`}
        >
          <AdminMenu onSelectSubsidiary={setSelectedSubsidiary} />
        </aside>
        <div className="w-full flex flex-col items-stretch pl-[16px] md:pl-[56px] pt-[16px] md:pt-[56px] lg:pt-[80px] gap-2">
          <div
            id="ubuntu-bold"
            className="w-full border-b border-amber-500 mb-4 text-amber-500 text-[32px]"
          >
            Productos
          </div>
          <div className="w-full flex flex-row items-center justify-between gap-4 pb-12">
            <Search />
            <div className="w-full flex flex-col items-end">
              <div className="flex flex-row w-2/5 justify-end gap-2">
                <Boton
                  texto="Volver a productos"
                  onClick={handleButtonClick}
                  disabled={!selectedSubsidiary}
                />
              </div>
              {errorMessage && (
                <p className="flex justify-end text-red-500 text-xs">
                  {errorMessage}
                </p>
              )}
            </div>
          </div>
          <div
            id="ubuntu-bold"
            className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] border-b border-neutral-500 mb-6"
          >
            <p className="text-center text-[16px] text-amber-500">Categoria</p>
            <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">
              Foto
            </p>
            <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">
              Descripción
            </p>
            <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">
              Opciones
            </p>
            <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">
              Tiempo de preparación
            </p>
            <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">
              Precio
            </p>
            <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">
              Promoción
            </p>
            <p className="text-center text-[16px] text-amber-500 hidden md:table-cell"></p>
          </div>
          <ListDataFalse selectedSubsidiary={selectedSubsidiary} />;
        </div>
      </section>
      <Footer />
    </main>
  );
}
