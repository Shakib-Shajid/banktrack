import Image from 'next/image';
import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='bg-[#FDFAF5]'>
            <footer className="footer flex flex-col lg:grid lg:grid-cols-4 text-base-content p-10 w-[90%] mx-auto relative">
                <aside>
                    <Image src="/logo.png" width="70" height="70" alt="" className='absolute right-0 lg:relative' />
                </aside>
                
                <nav className='space-y-2'>
                    <h6 className="footer-title text-[#888585]">Sobre Banktrack</h6>
                    <a className="link link-hover">Funcionalidades</a>
                    <a className="link link-hover">Soluciones</a>
                    <a className="link link-hover">Precios</a>
                    <a className="link link-hover">Quiénes somos</a>
                    <a className="link link-hover">Blog</a>
                </nav>
                <nav className='space-y-2'>
                    <h6 className="footer-title text-[#888585]">Soporte</h6>
                    <a className="link link-hover">Ayuda</a>
                    <a className="link link-hover">Email</a>
                </nav>
                <nav className='space-y-2'>
                    <h6 className="footer-title text-[#888585]">Artículos destacados</h6>
                    <a className="link link-hover">Software de Tesorería</a>
                    <a className="link link-hover">Software Gestión de Gastos</a>
                    <a className="link link-hover">Control de Gastos en Pareja</a>
                </nav>
                <nav className='space-y-2'>
                    <h6 className="footer-title text-[#888585]">Síguenos</h6>
                    <div className="grid grid-flow-col gap-4 text-2xl">
                        <a>
                            <FaLinkedinIn />
                        </a>
                        <a>
                            <FaXTwitter />
                        </a>
                        <a>
                            <FaInstagram />
                        </a>
                        <a>
                            <FaTiktok />
                        </a>
                        <a>
                            <FaYoutube />
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;