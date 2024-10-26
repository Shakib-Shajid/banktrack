import Image from 'next/image';
import React from 'react';
import { IoMdCheckmark } from "react-icons/io";

const Finance = () => {
    return (
        <div className='w-full max-w-7xl mx-auto flex flex-col gap-10 justify-center items-center lg:flex-row-reverse' data-aos="flip-right">
            <div className='w-[80%] lg:ml-10 space-y-3'>
                <h3 className='text-xl font-bold text-[#4021C8] uppercase'>Dashboards</h3>
                <p className='text-4xl font-bold leading-tight'>Visualiza tus <br /> finanzas en tiempo <br /> real</p>
                <div className='text-[#828080] space-y-3'>
                    <p><IoMdCheckmark className='inline-block mr-1' /> Tus ingresos y gastos siempre actualizados</p>
                    <p><IoMdCheckmark className='inline-block mr-1' /> Añade los gráficos y bloques que quieres con 2 clics</p>
                    <p><IoMdCheckmark className='inline-block mr-1' /> Filtra por periodos de tiempo, categorías o cuentas</p>
                    <p><IoMdCheckmark className='inline-block mr-1' /> Gráficos de categorías, ingresos y gastos, KPIs y mucho más...</p>
                </div>
            </div>
            <Image src="/finance.png" width="300" height="300" alt="" className='w-[90%] md:w-[80%] lg:w-full mx-auto' />

        </div>
    );
};

export default Finance;