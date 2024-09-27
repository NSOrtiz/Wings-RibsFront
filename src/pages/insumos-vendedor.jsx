import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'

export default function insumos() {
  return (
    <div className="flex flex-col items-center gap-4 px-[80px] py-0 flex-1">
      <NavBar />
      <div
        className="flex flex-col p-[24px] gap-[30px] items-center flex-[1_0_0] bg-transparent"
      >
        <div
          className="flex flex-col p-[16px] flex-direction: column align-items: flex-start align-self: stretch"
        >
          <div
            className="text-[#F39C12] font-Ubuntu text-[32px] font-weight-[700] leading-normal tracking-[0.96px]"
          >
            Insumos
          </div>
        </div>
        <div
          className="flex align-items: flex-start gap-[20px] pr-[80px] align-self: stretch"
        >
          <div
            className="flex align-items: flex-start gap-[8px] flex-[1_0_0]"
          >
            <div
              className="flex flex-row gap-[8px]"
            >
              <div
                className="text-[#F39C12] font-Ubuntu text-[16px] font-weight-[500] leading-normal"
              >
                Columnas
              </div>
              <div
                className="flex p-[4px_5px] flex-direction: column justify-content: center align-items: center border-radius-[4px]"
              >
                Filtros
              </div>
              <div
                className="flex p-[4px_5px] flex-direction: column justify-content: center align-items: center border-radius-[4px]"
              >
                Explorar
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}