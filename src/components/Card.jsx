import Image from 'next/image';
import React from 'react';

const Card = () => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <Image src="/nav_1.png" alt="" width="300" height="300" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;