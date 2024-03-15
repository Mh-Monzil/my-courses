import React from 'react';
import { FiBookOpen } from "react-icons/fi";
import { FaDollarSign } from "react-icons/fa";
import PropTypes from 'prop-types'

const Course = ({course, addToCart}) => {
    const {name, price, photo, description, credit} = course;
    return (
        <div className="card max-w-96 mx-auto bg-white text-black shadow-xl p-4">
            <figure><img className='w-full ' src={photo} alt="Shoes" /></figure>
            <div className="pt-4">
                <h2 className="card-title">{name}</h2>
                <p className='pt-3'>{description}</p>
                <div className='flex justify-around pt-4'>
                    <p className='flex items-center gap-2'><FaDollarSign />Price: {price}</p>
                    <p className='flex items-center gap-2'><FiBookOpen />Credit: {credit}hr</p>
                </div>
                <div className="card-actions items-end pt-6">
                    <button onClick={() => addToCart(course)} className="btn w-full btn-info text-white text-xl">Select</button>
                </div>
            </div>
        </div>
    );
};

Course.propTypes = {
    course : PropTypes.object.isRequired,
    addToCart : PropTypes.func
}

export default Course;