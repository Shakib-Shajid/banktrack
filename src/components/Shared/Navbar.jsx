import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {

    const navLink =
        <>
            <li>
                <div className="dropdown dropdown-hover ">
                    <div tabIndex={0} role="button" className='group'>Funcionalidades<IoIosArrowDown className='inline-block ml-2 group-hover:rotate-180 transform-translate duration-200 ease-in'/></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] mt-32 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </li>
            <li>
                <div className="dropdown dropdown-hover ">
                    <div tabIndex={0} role="button" className='group'>Recursos<IoIosArrowDown className='inline-block ml-2 group-hover:rotate-180 transform-translate duration-200 ease-in'/></div>
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
                    <div tabIndex={0} role="button" className='group'>Funcionalidades<IoIosArrowDown className='inline-block ml-2 group-hover:rotate-180 transform-translate duration-200 ease-in'/></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] mt-32 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </li>
        </>

    return (
        <div className='max-w-7xl mx-auto'>
            <div className="navbar mt-3 z-50 fixed max-w-7xl mx-auto">
                <div className="navbar-start">
                    <Image src="/logo.png" width="100" height="100" alt="" className='h-7 w-7' />
                    <Link href="/" className="ml-2 text-base md:text-xl font-bold">Banktrack</Link>

                    {/* .................................................. */}
                    <div className="navbar-center hidden lg:flex ml-10">
                        <ul className="menu menu-horizontal px-1">
                            {navLink}
                        </ul>
                    </div>
                    {/* .................................................. */}
                </div>
                {/* <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div> */}
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
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        {/* <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLink}
                        </ul> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;


