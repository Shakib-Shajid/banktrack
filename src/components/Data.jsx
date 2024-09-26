import Image from 'next/image';
import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';

const Data = () => {
    return (
        <div className="bg-[#28243E] h-[480px] lg:h-screen flex justify-center my-20">
            <div className='lg:mt-16 hero'>
                <h3 className='text-xl text-[#776EC1] my-4'>Dashboard financiero</h3>
                <Image src="/data.png" width="1000" height="700" alt="" className='rounded-xl hidden lg:grid' />
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-center bg-white rounded-xl py-10 md:px-20 md:py-10 mx-10">
                    <div className="">
                        <h1 className="text-4xl font-extrabold mb-5">Pruébalo <br className='md:hidden'/> ahora con <br className='hidden md:grid'/> tus datos</h1>
                        <button className="btn btn-primary rounded-full text-lg text-white btn-lg  px-10">Ver dashboard con mis datos</button>
                        <div className='flex flex-col md:flex-row gap-3 text-[#888585] my-5'>
                            <p><IoMdCheckmark className='inline-block' /> Tu cuenta gratis en 2 minutos</p>
                            <p><IoMdCheckmark className='inline-block' /> Sin tarjeta de crédito</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Data;