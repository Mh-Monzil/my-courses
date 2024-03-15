import React, { useEffect, useState } from 'react';
import Course from './Course';


const Courses = () => {
    const [courses, setCourses] = useState([]);

useEffect(() => {
    fetch("./fakeData.json")
    .then(res => res.json())
    .then(data => setCourses(data))
}, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                courses.map(course => <Course key={course.id} course={course}></Course>)
            }
        </div>
    );
};

export default Courses;