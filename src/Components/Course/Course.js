import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const courseInfo = useLoaderData();
    console.log(courseInfo);
    const { id, title } = courseInfo;

    return (
        <div>
            <p>{id}</p>
            <p>{title}</p>
            <p></p>
        </div>
    );
};

export default Course;