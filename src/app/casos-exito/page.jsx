import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiCalendar } from 'react-icons/ci';
import { RiDoubleQuotesL } from "react-icons/ri";

const page = () => {
    return (
        <div>
            <div className="hero h-[300px] md:h-[600px] bg-[#FDFAF5] pt-32">
                <div className="hero-content text-center -mt-20 md:-mt-72">
                    <div className="max-w-3xl">
                        <p className='text-[#4021C8] font-bold'>Casos de éxito</p>
                        <h1 className="text-4xl md:text-6xl font-bold mb-0">¿Por qué escogieron Banktrack?</h1>
                    </div>
                </div>
            </div>



            <div className='-mt-10 md:-mt-64 mb-10 z-0'>
                <div className='flex flex-col lg:flex-row w-[94%] md:w-[80%] lg:w-[80%] justify-between mx-auto'>
                    <div>
                        <iframe
                            width="1200"
                            height="500"
                            src="https://www.youtube.com/embed/D9hJyomex3c?si=Oq9zC3Z6O0POVZNf"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            className='rounded-xl md:rounded-2xl h-[200px] w-full md:h-[350px] md:w-[600px] lg:h-[500px] lg:w-[900px] mx-auto' referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen></iframe>
                    </div>

                    <div className='lg:ml-14 mt-0 md:mt-10'>
                        <div className="">
                            <h2 className="text-[#4021C8] text-6xl md:text-7xl"><RiDoubleQuotesL /></h2>
                            <p className="text-2xl font-bold text-[#4021C8] mt-2 w-full">
                                Me da una visión clara de todos mis ingresos y gastos
                            </p>
                            <div className="mt-6">
                                <p className="text-xl font-bold text-[#4021C8]">Kike</p>
                                <p className="text-md text-[#4021C8]">CEO de KS Asesores</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 w-[94%] md:w-[80%] gap-10 justify-between mx-auto my-20'>

                {/* 1st */}
                <div className="card bg-base-100 w-full shadow-xl">
                    <figure>
                        <iframe
                            className='w-full'
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/phkgI43cCmA?si=EPZ2Xh_csAlkvMSU"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title text-2xl">Su Casa Away</h2>
                        <p className='text-[#4021C8] text-base font-semibold'>Apartamentos de lujo</p>
                    </div>
                </div>

                {/* 2nd */}
                <div className="card bg-base-100 w-full shadow-xl">
                    <figure>
                        <iframe
                            className='w-full'
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/Mb3TFbz4_Y8?si=qp95_K4dnm7PD12z"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title text-2xl">Marcus Pequeno</h2>
                        <p className='text-[#4021C8] text-base font-semibold'>Consultor Financiero</p>
                    </div>
                </div>

                {/* 3rd */}
                <div className="card bg-base-100 w-full shadow-xl">
                    <figure>
                        <iframe
                            className='w-full'
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/1mAuN47af94?si=ybhLqmzhNwlztNvv"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title text-2xl">La Milanese</h2>
                        <p className='text-[#4021C8] text-base font-semibold'>Restaurante</p>
                    </div>
                </div>

                {/* 4th */}
                <div className="card bg-base-100 w-full shadow-xl">
                    <figure>
                        <iframe
                            className='w-full'
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/DNQhEnpXtzo?si=8JCE1CytBaiI-yDq"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title text-2xl">Autocares David</h2>
                        <p className='text-[#4021C8] text-base font-semibold'>Empresa de Movilidad</p>
                    </div>
                </div>

                {/* 3rd */}
                <div className="card bg-base-100 w-full shadow-xl">
                    <figure>
                        <iframe
                            className='w-full'
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/bQYo7Dq-VnA?si=wbjnqE1C_-THVnht"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title text-2xl">La Milanese</h2>
                        <p className='text-[#4021C8] text-base font-semibold'>Restaurante</p>
                    </div>
                </div>

                {/* 4th */}
                <div className="card bg-base-100 w-full shadow-xl">
                    <figure>
                        <iframe
                            className='w-full'
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/JePlprW8DA8?si=p85UfVmgVkRuxrbO"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title text-2xl">Autocares David</h2>
                        <p className='text-[#4021C8] text-base font-semibold'>Empresa de Movilidad</p>
                    </div>
                </div>
            </div>


            <div className='bg-gradient-to-r from-violet-600 to-blue-500 h-full flex gap-5 md:w-[80%] mx-auto justify-between md:rounded-3xl my-10'>
                <div className='py-10 w-[86%] lg:w-[50%] mx-auto my-auto'>
                    <p className='font-bold'>Pruébalo</p>
                    <h2 className='text-white text-3xl lg:text-5xl font-bold leading-tight'>Simplifica tus finanzas. Dedica más tiempo a tu negocio.</h2>
                    <div className='my-7'>
                        <div className='flex justify-start gap-3 flex-col md:flex-row '>
                            <Link href="/registrarse">
                                <button className="btn bg-gradient-to-r from-red-300 to-red-500 text-white rounded-full btn-lg px-10 w-full border-none"><div>Empieza gratis</div></button>
                            </Link>

                            <button className="btn rounded-full btn-lg px-10 bg-white text-[#4021C8] border-none"><div className='flex gap-1 justify-center items-center'><CiCalendar className='text-[#4021C8] text-3xl w-8' />Agendar demo</div></button>
                        </div>
                    </div>
                </div>
                <div className="w-[30%] text-start h-full hidden lg:grid">
                    <Image src="/client.png" width="500" height="500" alt="" className='hidden lg:grid w-full rounded-3xl' />
                </div>
            </div>
        </div>
    );
};

export default page;
