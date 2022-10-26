import React from 'react';
import './Courses.css';

const Courses = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-4 gap-4 sidebar-container'>
                <div className='bg-slate-500 h-full'>Mamun</div>
                <div className='col-span-3 grid grid-cols-3 gap-4'>
                    <div className='col-span-1'>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Courses;