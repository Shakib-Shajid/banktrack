"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLink = (
        <>
            <li>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="group">
                        Funcionalidades
                        <IoIosArrowDown className="inline-block ml-2 group-hover:rotate-180 transform-translate duration-200 ease-in" />
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] mt-80 w-[700%] p-2 shadow">
                        {/* <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li> */}
                        {/* ............................................. */}
                        <div className='flex gap-3'>
                            <div>
                                <li>
                                    <div className='text-sm flex gap-4'>
                                        <Image src="/who_1_2.png" width="70" height="70" alt="" />
                                        <div>
                                            <h2>Dashboards</h2>
                                            <p>La vista de datos bancarios que siempre quisiste.</p>
                                        </div>
                                    </div>
                                </li>


                                <li>
                                    <div className='text-sm flex gap-4'>
                                        <Image src="/who_1_3.png" width="70" height="70" alt="" />
                                        <div>
                                            <h2>Buscador</h2>
                                            <p>El motor de busqueda para tus cuentas bancarias.</p>
                                        </div>
                                    </div>
                                </li>


                                <li>
                                    <div className='text-sm flex gap-4'>
                                        <Image src="/who_1_7.png" width="70" height="70" alt="" />
                                        <div>
                                            <h2>Alertas</h2>
                                            <p>Entérate cuando pasan cosas raras.</p>
                                        </div>
                                    </div>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <div className='text-sm flex gap-4'>
                                        <Image src="/who_1_2.png" width="70" height="70" alt="" />
                                        <div>
                                            <h2>Previsiones</h2>
                                            <p>El futuro de tu tesorería bajo control.</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className='text-sm flex gap-4'>
                                        <Image src="/who_1_2.png" width="70" height="70" alt="" />
                                        <div>
                                            <h2>Informes</h2>
                                            <p>Tu tesorería siempre contigo.</p>
                                        </div>
                                    </div>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <div className='text-sm flex gap-4'>
                                        <Image src="/who_1_2.png" width="70" height="70" alt="" />
                                        <div>
                                            <h2>Cobros y pagos</h2>
                                            <p>Conciliación automática de facturas.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='text-sm flex gap-4'>
                                        <Image src="/who_1_2.png" width="70" height="70" alt="" />
                                        <div>
                                            <h2>Reglas automáticas</h2>
                                            <p>Categorización gastos e ingresos "nivel Dios".</p>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        </div>
                        {/* ............................................. */}
                    </ul>
                </div>
            </li>
            <li>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="group">
                        Recursos
                        <IoIosArrowDown className="inline-block ml-2 group-hover:rotate-180 transform-translate duration-200 ease-in" />
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] mt-32 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </li>
            <li><a>Casos de éxito</a></li>
            <li><a>Precios</a></li>
            <li>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="group">
                        Funcionalidades
                        <IoIosArrowDown className="inline-block ml-2 group-hover:rotate-180 transform-translate duration-200 ease-in" />
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] mt-40 w-[400%] p-2 shadow">
                        {/* <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li> */}

                        {/* ............................................................ */}
                        <div className='flex gap-5'>
                            <li>
                                <div className='text-sm flex gap-4'>
                                    <Image src="/video.png" width="70" height="70" alt="" />
                                    <div>
                                        <h2>Vídeo Academy</h2>
                                        <p>Aprende a usar Banktrack <br /> con vídeos rápidos.</p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className='text-sm flex gap-4'>
                                    <Image src="/question.png" width="70" height="70" alt="" />
                                    <div>
                                        <h2>Centro de Ayuda</h2>
                                        <p>Todo lo que necesitas saber <br /> sobre cómo usar Banktrack.</p>
                                    </div>
                                </div>
                            </li>
                        </div>
                        {/* ............................................................ */}
                    </ul>
                </div>
            </li>
        </>
    );

    return (
        <div className="max-w-7xl mx-auto">
            <div className={`max-w-7xl mx-auto navbar mt-3 fixed z-50 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
                <div className="navbar-start">
                    <Image src="/logo.png" width="100" height="100" alt="Banktrack logo" className="h-7 w-7" />
                    <Link href="/" className="ml-2 text-base md:text-xl font-bold">Banktrack</Link>

                    <div className="navbar-center hidden lg:flex ml-10">
                        <ul className="menu menu-horizontal px-1">
                            {navLink}
                        </ul>
                    </div>
                </div>

                <div className="navbar-end">
                    <Link className="text-[14px] rounded-full px-4 mr-3 hidden md:grid" href="">Entrar</Link>
                    <Link className="text-[14px] btn bg-black text-white rounded-full px-4 border-none" href="">Empieza gratis</Link>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
