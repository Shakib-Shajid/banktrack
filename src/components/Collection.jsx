import Image from 'next/image';
import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';

const Collection = () => {
    return (
        <div className='w-full max-w-7xl mx-auto flex flex-col gap-16 items-center lg:flex-row my-20'>
            <div className='w-[80%] lg:ml-40 space-y-3'>
                <div className='mt-10'>
                    <h3 className='text-xl font-bold text-[#4021C8] uppercase'>Cobros y Pagos</h3>
                    <p className='text-4xl font-bold leading-tight'>Olvídate del caos de <br className='hidden md:grid'/> facturas y <br className='hidden md:grid'/> proveedores</p>
                </div>
                <div className='text-[#828080] space-y-1 w-full'>

                    <p><IoMdCheckmark className='inline-block mr-1' />Control absoluto de lo cobrado y pagado</p>
                    <p><IoMdCheckmark className='inline-block mr-1' />Conciliación automática de tus facturas</p>
                    <p><IoMdCheckmark className='inline-block mr-1' />Digitalización de todas tus facturas con IA</p>
                    <p><IoMdCheckmark className='inline-block mr-1' />Manda tus facturas a Banktrack por WhatsApp</p>
                    <p><IoMdCheckmark className='inline-block mr-1' />Comparte las facturas con tu gestor con 1 clic</p>
                </div>
            </div>
            <Image src="/collection.png" width="300" height="300" alt="" className='w-[90%] md:w-[80%] lg:w-full mx-auto' />

        </div>
    );
};

export default Collection;