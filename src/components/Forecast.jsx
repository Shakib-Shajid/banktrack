import Image from 'next/image';
import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';

const Forecast = () => {
    return (
        <div className='w-full flex flex-col gap-10 justify-center items-center lg:flex-row-reverse' data-aos="fade-right">
            <div className='w-[80%] space-y-3 mt-5 md:mt-10'>
                <h3 className='text-xl font-bold text-[#4021C8] uppercase'>Previsiones</h3>
                <p className='text-4xl font-bold leading-tight'>Crea escenarios y <br /> previsiones fiables</p>
                <div className='text-[#828080] space-y-3'>
                    <p><IoMdCheckmark className='inline-block mr-1' /> Despeja las dudas sobre tu futuro financiero</p>
                    <p><IoMdCheckmark className='inline-block mr-1' /> Crea escenarios de contratación e inversiones</p>
                    <p><IoMdCheckmark className='inline-block mr-1' /> Calcula previsiones en base a histórico o cantidades fijas</p>
                    <p><IoMdCheckmark className='inline-block mr-1' /> Comparte los escenarios con tu equipo</p>
                </div>
            </div>
            <Image src="/forecast.png" width="300" height="300" alt="" className='h-[300px] md:h-[500px] w-[90%] md:w-[80%] lg:w-full mx-auto lg:ml-20' />

        </div>
    );
};

export default Forecast;