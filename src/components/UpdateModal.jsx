import { React } from 'react';

export default function UpdateUser({ isOpen, setIsOpen }) {
  return (
    <div>
      <div className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative justify-center w-full ">
          <div className="relative bg-neutral-200 rounded-lg py-12 shadow dark:bg-gray-500 bg-opacity-70">
            <div className="flex items-center justify-center p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <div className="bg-white w-[80%] lg:max-w-[1000px] p-5 rounded-xl">
                <div className="flex flex-row">
                  <button
                    type="button"
                    className=" text-amber-500 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    <img
                      src="/icons/close.svg"
                      alt="Cerrar"
                      className="w-5 h-5"
                    />
                  </button>
                </div>

                <p className="text-[16px] font-semibold text-gray-500 pb-[24px]">
                  Modificación de datos:
                </p>
                <p className="text-[20px] font-bold text-gray-500 pb-[12px] ">
                  Nombre Completo
                </p>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md border border-gray-500 my-2"
                ></input>
                <p className="text-[20px] font-bold text-gray-500 pb-[12px]">
                  Teléfono
                </p>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md border border-gray-500 my-2"
                ></input>
                <p className="text-[20px] font-bold text-gray-500 pb-[12px]">
                  Dirección
                </p>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md border border-gray-500 my-2"
                ></input>
                <p className="text-[20px] font-bold text-gray-500 pb-[12px]">
                  Imagen
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="border border-gray-700 bg-gray-500 rounded-lg px-2 py-2 text-white font-bold"
                  >
                    Selecciona un archivo
                  </button>
                  <p className="text-[20px] font-bold text-gray-600 pl-[20px]">
                    NO HAY ARCHIVO SELECCIONADO
                  </p>
                </div>
                <div className="flex justify-center pt-[12px]">
                  <button
                    type="button"
                    className="border border-amber-700 bg-amber-500 text-[20px] font-bold text-white px-5 py-2 rounded-full w-[300px]"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
