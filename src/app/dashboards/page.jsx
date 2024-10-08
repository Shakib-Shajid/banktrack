"use client";
import Image from 'next/image';
import Link from 'next/link';
import { PopupButton } from 'react-calendly';
import { CiCalendar } from 'react-icons/ci';
import React, { useEffect, useState } from 'react';

const page = () => {
    const [isClient, setIsClient] = useState(false);

    // Check if the component is mounted on the client side
    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="bg-[#FDFAF5] py-28 md:py-40">

            <div className='w-full flex flex-col gap-20 items-center lg:flex-row '>
                <div className='w-[80%] lg:ml-32 space-y-3'>
                    <div className=''>
                        <h3 className='text-3xl md:text-6xl font-bold'>La vista de datos bancarios que siempre quisiste</h3>
                        {/* <p className='text-4xl font-bold leading-tight'>Olvídate del caos de <br className='hidden md:grid' /> facturas y <br className='hidden md:grid' /> proveedores</p> */}
                        <p className="py-6 text-[#888585]">
                            Consulta y analiza tus datos bancarios en tiempo real, de la forma más intuitiva.
                        </p>
                    </div>
                    <div className='text-[#828080] space-y-1 w-full'>

                        {/* <p><IoMdCheckmark className='inline-block mr-1' />Control absoluto de lo cobrado y pagado</p>
                    <p><IoMdCheckmark className='inline-block mr-1' />Conciliación automática de tus facturas</p>
                    <p><IoMdCheckmark className='inline-block mr-1' />Digitalización de todas tus facturas con IA</p>
                    <p><IoMdCheckmark className='inline-block mr-1' />Manda tus facturas a Banktrack por WhatsApp</p>
                    <p><IoMdCheckmark className='inline-block mr-1' />Comparte las facturas con tu gestor con 1 clic</p> */}
                    </div>
                    <div className='flex gap-3 flex-col md:flex-row'>
                        <Link href="/registrarse">
                            <button className="btn border-none bg-[#4021C8] text-white rounded-full btn-lg px-10 w-full">
                                <div>Empieza gratis</div>
                            </button>
                        </Link>
                        {/* Calendly Popup Button */}
                        {isClient && (
                            <PopupButton
                                url="https://calendly.com/testingdeveloper/30min"
                                rootElement={document.getElementById('calendly-root')}
                                text={
                                    <div className='flex gap-1 justify-center items-center'>
                                        <CiCalendar className='text-[#4021C8] text-3xl w-8' />
                                        Agendar demo
                                    </div>
                                }
                                className="btn border-none rounded-full btn-lg px-10 bg-white text-[#4021C8]"
                            />
                        )}
                    </div>

                    <div className='flex justify-center pt-5 items-center gap-2 flex-col lg:flex-row'>
                        <div className='flex items-center'>
                            <span>Excelente</span>
                            <div className="rating rating-sm rating-half">
                                <input type="radio" name="rating-10" className="rating-hidden" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                <input
                                    type="radio"
                                    name="rating-10"
                                    className="mask mask-star-2 mask-half-1 bg-green-500"
                                    defaultChecked />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                            </div>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <span>51 opinionses en</span>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-1" className="mask mask-star bg-green-500" /></div>
                            <span className='font-bold'>Trustpilot</span>
                        </div>
                    </div>
                </div>
                <Image src="/finance.png" width="1000" height="1000" alt="" className='w-[90%] md:w-[80%] lg:w-full mx-auto h-[500px]' />

            </div>

            <section className="py-20">
                <h2 className="text-2xl lg:text-4xl font-bold text-center">Usado por más de 1000 empresarios, contables, y <br className="hidden md:grid" /> directores financieros.</h2>
                <div className="flex gap-10 justify-center my-5 flex-col md:flex-row">
                    <div className="avatar-group -space-x-6 mx-auto md:mx-0">
                        <div className="avatar">
                            <div className="w-16">
                                <Image src="/das_1.png" width="500" height="500" alt="" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-16">
                                <Image src="/das_2.png" width="500" height="500" alt="" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-16">
                                <Image src="/das_1.png" width="500" height="500" alt="" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-16">
                                <Image src="/das_2.png" width="500" height="500" alt="" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-16">
                                <Image src="/das_1.png" width="500" height="500" alt="" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-16">
                                <Image src="/das_2.png" width="500" height="500" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center items-center gap-2 flex-col '>
                        <div className='flex items-center'>
                            <span>Excelente</span>
                            <div className="rating rating-sm rating-half">
                                <input type="radio" name="rating-10" className="rating-hidden" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                <input
                                    type="radio"
                                    name="rating-10"
                                    className="mask mask-star-2 mask-half-1 bg-green-500"
                                    defaultChecked />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                            </div>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <span>51 opinionses en</span>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-1" className="mask mask-star bg-green-500" /></div>
                            <span className='font-bold'>Trustpilot</span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default page;