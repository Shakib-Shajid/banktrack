import Image from 'next/image';
import React from 'react';
import { FcGoogle } from "react-icons/fc";


const page = () => {
    return (
        <div className='h-screen'>
            <div className='pt-20  flex gap-0 h-screen'>
                <div className='hidden lg:grid w-[30%] bg-[#4021C8]'>
                    <div className='pl-20 pt-24'>
                        <h3 className='text-white text-3xl font-extrabold w-80'>Recupera el control de tus finanzas</h3>
                        <Image src="/register.png" width="500" height="500" alt="" className='h-full' />
                    </div>
                </div>
                <div className='md:w-[80%] mx-auto lg:w-[70%] flex justify-center text-center pt-20'>

                    {/* ......................................... */}
                    <div className="flex flex-col border-opacity-50" >
                        <div>
                            <div className='w-full'>
                                <h3 className='text-2xl lg:text-4xl font-bold'>Empieza tu prueba gratis</h3>
                                <p className='text-xs lg:text-lg text-[#9b9a9a] mt-5 mb-10'>Prueba de 14 días. No necesitas tarjeta de crédito.</p>
                                <button className='btn bg-white rounded-full text-sm w-[80%] md:w-full mx-auto'><FcGoogle className='text-xl relative -left-8 lg:-left-20' />Registrarse con Google</button>
                            </div>
                        </div>
                        <div className="divider my-10 w-[80%] md:w-full mx-auto">O</div>
                        <div className='space-y-3 w-[80%] md:w-full mx-auto'>
                            <input type="email" placeholder="Tu correo electrónico" className="input input-bordered w-full " />
                            <input type="password" placeholder="Contraseña" className="input input-bordered w-full" />
                            <div className='py-5'>
                                <button className='btn btn-lg text-white rounded-full w-full bg-[#4021C8] '>Empezar</button>
                            </div>
                        </div>
                    </div>
                    {/* ......................................... */}

                </div>
            </div>
        </div>
    );
};

export default page;