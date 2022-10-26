import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from './Card/Card';
import './Courses.css';

const Courses = () => {

    const courses = useLoaderData();



    return (
        <div className='px-5'>
            <div className='grid grid-cols-4 gap-4 sidebar-container'>
                <div className='col-span-3'>
                    <div className='grid grid-cols-3 gap-4'>
                        {
                            courses.map(course => <Card key={course.id} course={course}></Card>)
                        }
                    </div>
                </div>
                <div className='bg-base-100 shadow-2xl h-full mb-5'>
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