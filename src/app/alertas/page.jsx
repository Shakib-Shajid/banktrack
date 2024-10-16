"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Try from '@/components/Try';
import PubDash from '@/components/PubDash';

const page = () => {


    return (
        <div>

            <div className='w-full flex flex-col gap-20 items-center lg:flex-row bg-[#FDFAF5] pt-24'>
                <div className='w-[80%] lg:ml-32 space-y-3'>
                    <div className=''>
                        <h3 className='text-3xl md:text-6xl font-bold'>Entérate cuando pasan cosas raras</h3>
                        {/* <p className='text-4xl font-bold leading-tight'>Olvídate del caos de <br className='hidden md:grid' /> facturas y <br className='hidden md:grid' /> proveedores</p> */}
                        <p className="py-6 text-[#888585]">
                        Recibe alertas inteligentes instantáneas. Alerta a miembros de tu equipo de anomalías.
                        </p>
                    </div>

                    <PubDash />

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
                <Image src="/alertas_3.png" width="1000" height="1000" alt="" className='w-[90%] md:w-[80%] lg:w-full mx-auto h-screen' />

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

            <section className='w-full max-w-7xl mx-auto flex flex-col gap-10 lg:gap-72 items-center lg:flex-row'>
                <div className='w-[80%] md:w-[70%] lg:ml-40 space-y-3'>
                    <div className='lg:mt-10'>
                        {/* <h3 className='text-xl font-bold text-[#4021C8] uppercase'>Cobros y Pagos</h3> */}
                        <p className='text-4xl font-bold leading-tight'>Alertas infinitamente flexibles</p>
                    </div>

                    <div className='text-[#828080] w-full text-xl pb-5'>
                        <p>Envia una alerta cuando el importe de una transacción, o tu saldo, sea igual, superior o inferior a una cantidad definida.</p>
                    </div>

                    <Link href="/registrarse">
                        <button className="btn border-none bg-[#4021C8] text-white rounded-full btn-lg px-6 md:px-10">
                            <div>Empieza gratis</div>
                        </button>
                    </Link>
                </div>
                <Image src="/alertas_2.png" width="500" height="300" alt="" className='w-[90%] md:w-[80%] lg:w-full mx-auto' />

            </section>

            <section className='w-full flex flex-col gap-10 lg:gap-40 justify-center items-center lg:flex-row-reverse'>
                <div className='w-[80%] mx-auto  lg:w-full space-y-3 mt-5 md:mt-10'>
                    <h3 className='text-4xl font-bold leading-tight'>Evita cargos duplicados</h3>
                    <p className='text-[#828080] md:w-[70%] lg:w-[60%] text-xl pb-5'>Envia una alerta cuando se detecten posibles cargos duplicados y evita que te cobren dos veces.</p>
                    <Link href="/registrarse">
                        <button className="btn border-none bg-[#4021C8] text-white rounded-full btn-lg px-6 md:px-10 ">
                            <div>Empieza gratis</div>
                        </button>
                    </Link>
                </div>
                <Image src="/alertas_3.png" width="1000" height="1000" alt="" className='h-[300px] md:h-[700px] lg:h-screen w-[90%] md:w-full' />

            </section>

            <section className='w-full lg:w-full flex flex-col gap-10 lg:gap-64 items-center lg:flex-row my-10'>
                <div className='w-[80%] mx-auto md:w-[80%] lg:w-[80%] lg:ml-56 space-y-3'>
                    <div className='lg:mt-10'>
                        {/* <h3 className='text-xl font-bold text-[#4021C8] uppercase'>Cobros y Pagos</h3> */}
                        <p className='text-4xl font-bold leading-tight'>Todo bajo control, estés donde estés</p> 
                    </div>

                    <div className='text-[#828080] w-full text-xl pb-5'>
                        <p>Elige en qué canal recibir tus alertas entre WhatsApp, email, sms, Slack, y Telegram.</p>
                    </div>

                    <Link href="/registrarse">
                        <button className="btn border-none bg-[#4021C8] text-white rounded-full btn-lg px-6 md:px-10">
                            <div>Empieza gratis</div>
                        </button>
                    </Link>
                </div>
                <Image src="/alertas_4.png" width="500" height="500" alt="" className='w-[90%] md:w-[80%] lg:w-full mx-auto' />

            </section>

            <Try />

        </div>
    );
};

export default page;