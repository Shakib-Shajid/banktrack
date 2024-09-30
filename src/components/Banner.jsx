"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { CiCalendar } from "react-icons/ci";
import { PopupButton } from 'react-calendly';

const Banner = () => {
    const [isClient, setIsClient] = useState(false);

    // Check if the component is mounted on the client side
    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div>
            <div className="hero h-[900px] md:h-[800px] bg-[#FDFAF5]">
                <div className="hero-content text-center -mt-16 md:-mt-36">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold">
                            El software más fácil para controlar tu tesorería
                        </h1>
                        <p className="py-6 text-2xl max-w-2xl mx-auto">
                            Visualiza todos tus gastos e ingresos a tiempo real, categorizados y desde una única plataforma
                        </p>
                        <div className='flex justify-center gap-3 flex-col md:flex-row'>
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
                    </div>
                </div>
            </div>

            {/* Root element for Calendly popup */}
            <div id="calendly-root"></div>
        </div>
    );
};

export default Banner;
