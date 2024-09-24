import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function AdminPedido() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [status, setStatus] = useState("Selecciona un estado");

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const closeDropdown = (e) => {
        if (!e.target.closest('#dropdownButton')) {
            setDropdownOpen(false);
        }
    };

    const selectStatus = (newStatus) => {
        setStatus(newStatus);
        setDropdownOpen(false);
    };

    useEffect(() => {
        window.addEventListener('click', closeDropdown);
        return () => window.removeEventListener('click', closeDropdown);
    }, []);

    return (
        <main>
            <NavBar />
            <section className="p-4">
                <div id='ubuntu-bold' className="border-b border-amber-500 mb-4 text-amber-500 text-[32px]">Pedidos</div>
                
                <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-4">
                        <p className="text-[16px] text-amber-500">Columnas</p>
                        <p className="text-[16px] text-amber-500">Filtros</p>
                        <p className="text-[16px] text-amber-500">Exportar</p>
                    </div>
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="border border-gray-300 rounded-md px-2 py-1"
                    />
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-6 sm:grid-cols-3 md:col-span-6 border-b border-neutral-500 mb-4">
                    <p className="flex-auto text-center text-[16px] text-amber-500">Detalles de pedido</p>
                    <p className="text-center text-[16px] text-amber-500">Tipo de pago</p>
                    <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">Tiempo de preparación</p>
                    <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">Estatus de pedido</p>
                    <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">Hora aproximada de entrega</p>
                    <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">Editar</p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-6 sm:grid-cols-3 md:col-span-6 border-b border-neutral-500 mb-4">
                    <div className="flex flex-col mb-2 items-center"> 
                        <div className="text-center mb-1 text-[16px]">Cliente</div>
                        <div className="flex space-x-1 items-center"> 
                            <div className="flex-col text-center hidden lg:flex">
                                <p className="text-[16px]">Producto 1</p>
                                <p className="text-[16px]">Producto 2</p>
                                <p className="text-[16px]">Producto 3</p>
                                <p className="text-[16px]">Producto 4</p>
                            </div>
                            <div className="flex flex-col p-2 text-center">
                                <div className="flex flex-row">
                                    <p className="text-[16px] px-2">Total:</p>
                                    <p id='ubuntu-bold' className="text-amber-500 text-[16px]">$10.00 mxn</p>
                                </div>
                                <p className="text-[16px]">Hora de pedido</p>
                                <button className="mt-2 bg-amber-500 text-white rounded-md px-2 py-1">Ver detalles</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center ">
                        <p className="text-center text-[16px]">Efectivo</p>
                    </div>

                    {/* Columnas ocultas en sm */}
                    <div className="hidden lg:flex flex-col items-center justify-center">
                        <p className="text-center text-[16px]">15 min</p>
                    </div>

                    <div className="hidden md:flex flex-col items-center justify-center">
                        <div className="relative inline-block">
                            <button
                                id="dropdownButton"
                                className="inline-flex justify-between rounded-md border border-neutral-300 shadow-sm px-2 py-1 bg-white text-sm font-medium text-gray-700 hover:border-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                type="button"
                                onClick={toggleDropdown}
                            >
                                {status}
                                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06 0L10 10.44l3.71-3.23a.75.75 0 111.06 1.06l-4.25 3.6a.75.75 0 01-1.06 0l-4.25-3.6a.75.75 0 010-1.06z" clipRule="evenodd" />
                                </svg>
                            </button>
                            {dropdownOpen && (
                                <div className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="dropdownButton">
                                    <div className="py-1" role="none">
                                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-amber-600" role="menuitem" onClick={() => selectStatus('Pendiente')}>Pendiente</a>
                                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-amber-600" role="menuitem" onClick={() => selectStatus('En preparación')}>En preparación</a>
                                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-amber-600" role="menuitem" onClick={() => selectStatus('En camino')}>En camino</a>
                                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-amber-600" role="menuitem" onClick={() => selectStatus('Entregado')}>Entregado</a>
                                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-amber-600" role="menuitem" onClick={() => selectStatus('Cancelado')}>Cancelado</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="hidden lg:flex flex-col items-center justify-center">
                        <div className="flex items-center space-x-1"> 
                            <p className="text-left text-[16px]">8:30</p>
                        </div>
                    </div>

                    <div className="hidden lg:flex flex-col items-center justify-center">
                        <img src="/edit_24.svg" alt="Editar" className="w-6 h-6" />
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}








