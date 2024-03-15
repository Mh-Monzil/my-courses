import React from 'react';
import Course from './Course';

const Courses = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <Course></Course>
            <Course></Course>
            <Course></Course>
            <Course></Course>
            <Course></Course>
            <Course></Course>
        </div>
    );
};

export default Courses;