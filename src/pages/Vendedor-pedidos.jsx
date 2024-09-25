import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import PedidoCard from "../components/PedidoCard";

export default function VendedorPedido() {
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
                
                <div className="flex justify-between items-center mb-20">
                    <div className="flex space-x-4">
                        <div className="flex flex-row ">
                        <img src="/icons/ViewColumn.svg" alt="columna" />
                        <p className="text-[16px] text-amber-500 px-2">Columnas</p>
                        </div>
                        <div className="flex flex-row">
                        <img src="/icons/FilterList.svg" alt="filterList" />
                        <p className="text-[16px] text-amber-500 px-2">Filtros</p>
                        </div>
                        <div className="flex flex-row">
                        <img src="/icons/TableRows.svg" alt="tabalRows" />
                        <p className="text-[16px] text-amber-500 px-2">Densidad</p>
                        </div>
                        <div className="flex flex-row">
                        <img src="/icons/SaveAlt.svg" alt="saveAlt" />
                        <p className="text-[16px] text-amber-500 px-2">Exportar</p>
                        </div>

                    </div>
                    <div className="flex flex-row">
                        
                    <img src="/icons/magnifier.svg" alt="buscador" />
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="border border-gray-300 rounded-md px-2"
                    />
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-6 sm:grid-cols-3 md:col-span-6 border-b border-neutral-500 mb-4">
                    <p className="flex-auto text-center text-[16px] text-amber-500">Detalles de pedido</p>
                    <p className="text-center text-[16px] text-amber-500">Tipo de pago</p>
                    <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">Tiempo de preparación</p>
                    <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">Estatus de pedido</p>
                    <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">Hora aproximada de entrega</p>
                    <p className="text-center text-[16px] text-amber-500 hidden md:table-cell">Editar</p>
                </div>
                <PedidoCard/>
                <PedidoCard/>
                <PedidoCard/>
                <PedidoCard/>
                <PedidoCard/>
                <div className="flex justify-end">  </div>
            </section>
            <Footer />
        </main>
    );
}



