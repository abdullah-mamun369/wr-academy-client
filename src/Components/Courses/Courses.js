import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from './Card/Card';
import './Courses.css';

const Courses = () => {

    const courses = useLoaderData();



    return (
        <div className=''>
            <div className='grid grid-cols-4 gap-4 sidebar-container'>
                <div className='bg-slate-500 h-full'>
                    {
                        courses.map(course => <Link to={`/course/${course.id}`} key={course.id}><p>{course.title}</p></Link>)
                    }
                </div>
                <div className='col-span-3'>
                    <div className='grid grid-cols-3 gap-4'>
                        {
                            courses.map(course => <Card key={course.id} course={course}></Card>)
                        }
                    </div>


                </div>
            </div>
        </div>

    );
};

export default Courses;