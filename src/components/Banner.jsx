import React from 'react';
import { CiCalendar } from "react-icons/ci";
const Banner = () => {
    return (
        <div>
            <div className="hero h-[600px] md:min-h-screen bg-[#FDFAF5]">
                <div className="hero-content text-center">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold">El software más fácil para controlar tu tesorería</h1>
                        <p className="py-6 text-2xl max-w-2xl mx-auto">
                            Visualiza todos tus gastos e ingresos a tiempo real, categorizados y desde una única plataforma
                        </p>
                        <div className='flex justify-center gap-3 flex-col md:flex-row'>
                            <button className="btn bg-[#4021C8] text-white rounded-full btn-lg px-10"><div>Empieza gratis</div></button>
                            <button className="btn rounded-full btn-lg px-10 bg-white text-[#4021C8]"><div className='flex gap-1 justify-center items-center'><CiCalendar className='text-[#4021C8] text-3xl w-8' />Agendar demo</div></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;