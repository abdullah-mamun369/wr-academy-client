import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {

    const courseInfo = useLoaderData();
    // console.log(courseInfo);
    const { image, title, mentor, duration, price, date } = courseInfo;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl m-5 border">
            <figure className='lg:w-7/12'><img src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="text-xl font-bold">{title}</h2>
                <p>Mentor: <span className='text-primary'>{mentor}</span></p>
                <p>Course Duration: <span className='font-bold'>{duration}</span></p>
                <p>Course Price: <span className='font-bold'>{price}</span></p>
                <p>Launch Date: <span className='font-bold'>{date}</span></p>

                <div className="card-actions justify-end">
                    <button className="btn btn-primary w-full">CHECKOUT</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;