import React from 'react';

const page = () => {
    return (
        <div>
            <div className="hero h-[300px] md:h-[300px] bg-[#FDFAF5] pt-32 md:pt-96">
                <div className="hero-content text-center -mt-20 md:-mt-72">
                    <div className="max-w-3xl">
                        <p className='text-[#4021C8] font-bold'>Tutoriales de Banktrack</p>
                        <h1 className="text-4xl md:text-6xl font-bold mb-0 mt-2">Vídeo Academy</h1>
                        <p className='text-[#888585] my-5'>Sácale el máximo provecho a todas las herramientas <br /> que Banktrack ofrece</p>
                    </div>
                </div>
            </div>

            <div className='w-[80%] mx-auto flex gap-5'>
                <ul className="menu w-56 p-0 [&_li>*]:rounded-none shadow-xl text-base font-bold">
                    <li><a>Cómo empezar</a></li>
                    <li><a>Dashboards</a></li>
                    <li><a>Transacciones</a></li>
                    <li><a>Cobros y pagos</a></li>
                    <li><a>Previsiones</a></li>
                    <li><a>Informes y alertas</a></li>
                    <li><a>Reglas automáticas</a></li>
                </ul>

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


                </div>
            </div>
        </div>
    );
};

export default page;





// "use client"
// import React, { useState } from 'react';

// const Page = () => {
//     // State to store the currently selected video category
//     const [selectedCategory, setSelectedCategory] = useState("Cómo empezar");

//     // Video data for each category with multiple videos
//     const videoData = {

//         "Cómo empezar": [
//             {
//                 src: "https://www.youtube.com/embed/oZJCmJp4YDA?si=50ua5WSW4WKd3rzo",
//                 title: "Cómo configurar un dashboard",
//                 subtitle: "Visualiza tus finanzas en un único sitio 100% personalizable"
//             },
//             {
//                 src: "https://www.youtube.com/embed/P8Dpxlb3F14?si=LkJvmN0cT6URuz8G",
//                 title: "Cómo usar el buscador de transacciones",
//                 subtitle: "Busca transacciones en un click y organízalas a tu manera."
//             },
//             {
//                 src: "https://www.youtube.com/embed/1uV65WO5BGo?si=a0-DQrIO8FWE_aVi",
//                 title: "Cómo crear previsiones a futuro",
//                 subtitle: "Cómo hacer un forecast y escenarios"
//             },
//             {
//                 src: "https://www.youtube.com/embed/plib7KSuHJA?si=jvT3ohSmsFzQ7tVv",
//                 title: "Cómo conciliar facturas",
//                 subtitle: "Concilia facturas con movimientos bancarios de forma automática"
//             },
//         ],
//         "Dashboards": [
//             {
//                 src: "https://www.youtube.com/embed/oZJCmJp4YDA?si=YxHoHVDPajqxEISz",
//                 title: "Cómo configurar un dashboard",
//                 subtitle: "Visualiza tus finanzas en un único sitio 100% personalizable"
//             }

//         ],
//         "Transacciones": [
//             {
//                 src: "https://www.youtube.com/embed/P8Dpxlb3F14?si=6l0-PzmFKGUGvaHV",
//                 title: "Cómo usar el buscador de transacciones",
//                 subtitle: "Busca transacciones en un click y organízalas a tu manera."
//             }
//         ],
//         "Cobros y pagos": [
//             {
//                 src: "https://www.youtube.com/embed/plib7KSuHJA?si=zRR-o5UB_Ute8E0p",
//                 title: "Cómo conciliar facturas",
//                 subtitle: "Concilia facturas con movimientos bancarios de forma automática"
//             }
//         ],
//         "Previsiones": [
//             {
//                 src: "https://www.youtube.com/embed/1uV65WO5BGo?si=mzm9RNbhhSwnZ1vs",
//                 title: "Cómo crear previsiones a futuro",
//                 subtitle: "Cómo hacer un forecast y escenarios"
//             }
//         ],
//         "Informes y alertas": [
//             {
//                 src: "https://www.youtube.com/embed/e_nKxRGdG00?si=xMu0ZjZY7I2TsdUV",
//                 title: "Cómo crear un informe",
//                 subtitle: "Informes periódicos personalizados con tu información financiera."
//             }
//         ],
//         "Reglas automáticas": [
//             {
//                 src: "https://www.youtube.com/embed/t_RbNALwb-c?si=ntZ6AMh82tIvXs1u",
//                 title: "Cómo crear una regla automática",
//                 subtitle: "Categoriza, etiqueta o modifica tus transacciones automáticamente."
//             }
//         ]
//         // Add more categories as needed
//     };

//     return (
//         <div className='py-10'>
//             {/* Hero Section */}
//             <div className="hero h-[300px] md:h-[300px] bg-[#FDFAF5] pt-32 md:pt-96">
//                 <div className="hero-content text-center -mt-20 md:-mt-72">
//                     <div className="max-w-3xl">
//                         <p className='text-[#4021C8] font-bold'>Tutoriales de Banktrack</p>
//                         <h1 className="text-4xl md:text-6xl font-bold mb-0 mt-2">Vídeo Academy</h1>
//                         <p className='text-[#888585] my-5'>
//                             Sácale el máximo provecho a todas las herramientas <br />
//                             que Banktrack ofrece
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Video Menu and Content */}
//             <div className='w-full lg:w-[80%] mx-auto flex flex-col lg:flex-row gap-5'>
//                 {/* Video Menu */}
//                 <select
//                     className="select select-bordered w-[84%] mx-auto grid lg:hidden"
//                     value={selectedCategory}
//                     onChange={(e) => setSelectedCategory(e.target.value)}
//                 >
//                     {Object.keys(videoData).map((category) => (
//                         <option key={category} value={category}>
//                             {category}
//                         </option>
//                     ))}
//                 </select>



//                 {/* Video Display */}
//                 <div className='w-[90%] lg:w-[80%] mx-auto py-10'>
//                     {/* Display the selected category as a title */}
//                     <h2 className='text-2xl font-bold mb-8 w-[96%] mx-auto hidden lg:grid'>
//                         {selectedCategory}
//                     </h2>

//                     {/* Videos */}
//                     <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between mx-auto my-5'>
//                         {videoData[selectedCategory].map((video, index) => (
//                             <div key={index} className="card bg-base-100 w-[94%] mx-auto shadow-xl">
//                                 <figure>
//                                     <iframe
//                                         className='w-full'
//                                         width="560"
//                                         height="315"
//                                         src={video.src}
//                                         title={`YouTube video player ${index}`}
//                                         frameBorder="0"
//                                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                                         referrerPolicy="strict-origin-when-cross-origin"
//                                         allowFullScreen
//                                     ></iframe>
//                                 </figure>
//                                 <div className="card-body ">
//                                     <h2 className="card-title text-2xl">{video.title}</h2>
//                                     <p className='text-[#4021C8] text-base font-semibold'>
//                                         {video.subtitle}
//                                     </p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Page;
