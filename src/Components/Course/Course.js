import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReactPrint from 'react-to-print';
import { useRef } from 'react';

const Course = () => {
    const courseInfo = useLoaderData();
    // console.log(courseInfo);
    const { id, image, title, mentor, classes, seats, duration, price, time, date } = courseInfo;
    const ref = useRef();



    return (
        <div ref={ref} className="card lg:card-side bg-base-100 shadow-xl m-5 border">
            <figure className='lg:w-7/12'><img src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="text-xl font-bold">{title}</h2>
                <p>Mentor: <span className='text-primary'>{mentor}</span></p>
                <p>Classes: <span className='font-bold'>{classes}</span></p>
                <p>Available Seats: <span className='font-bold'>{seats}</span></p>
                <p>Course Duration: <span className='font-bold'>{duration}</span></p>
                <p>Course Price: <span className='font-bold'>{price}</span></p>
                <p>Course Time: <span className='font-bold'>{time}</span></p>
                <p>Launch Date: <span className='font-bold'>{date}</span></p>

                <div className="card-actions justify-end">
                    <ReactPrint trigger={() => <button className="btn btn-primary w-full">DOWNLOAD DETAILS</button>} content={() => ref.current} />
                </div>
                <div >
                    <Link to={`/checkout/${id}`} className="card-actions justify-end"><button className="btn btn-primary w-full">GET PREMIUM</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Course;