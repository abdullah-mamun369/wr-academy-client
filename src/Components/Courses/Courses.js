import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from './Card/Card';
import './Courses.css';

const Courses = () => {

    const courses = useLoaderData();



    return (
        <div className='px-5'>
            <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-4 sidebar-container'>
                <div className='lg:col-span-3'>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-3 gap-4 mb-10'>
                        {
                            courses.map(course => <Card key={course.id} course={course}></Card>)
                        }
                    </div>
                </div>
                <div className='bg-base-100 shadow-2xl h-full sm:w-full mb-10'>
                    {
                        courses.map(course => <Link className='text-center' to={`/course/${course.id}`} key={course.id}>
                            <p className='py-5 border-b-2'>{course.title}</p>
                        </Link>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Courses;