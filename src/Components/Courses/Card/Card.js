import React from 'react';

const Card = ({ course }) => {
    const { image, title, mentor, classes, seats } = course;
    console.log(image, title, mentor, classes, seats);
    return (
        <div className='col-span-1'>
            <div className="card card-compact w-full bg-base-100 shadow-xl mt-5">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-base font-bold">{title}</h2>
                    <p>Mentor: <span className='text-primary'>{mentor}</span></p>
                    <p>Classes: <span className='font-bold'>{classes}</span></p>
                    <p>Available Seats: <span className='font-bold'>{seats}</span></p>
                    <div className="card-actions">
                        <button className="btn btn-primary w-full">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;