import ToggleOptions from '@/components/CardToggle';
import React from 'react';

const page = () => {
    return (
        <div className='py-40 text-center'>
            <h3 className='text-4xl font-bold'>Empieza tu prueba gratis</h3>
            <p className='text-sm my-2'>Pruébalo gratis durante 14 días. No necesitas tarjeta de crédito.</p>
            <ToggleOptions />
        </div>
    );
};

export default page;